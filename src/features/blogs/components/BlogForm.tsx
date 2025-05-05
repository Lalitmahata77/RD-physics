"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BlogSchema } from "../schema/blogs";
import { createBlog, updateBlog } from "../actions/blogs";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export function BlogForm({
  blog,
}: {
  blog?: { id: string; category: string; author: string; title: string; excerpt: string };
}) {
  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: blog ?? {
      category: "",
      title: "",
      excerpt: "",
      author: "",
    },
  });

  async function onSubmit(values: z.infer<typeof BlogSchema>) {
    const action = blog ? updateBlog.bind(null, blog.id) : createBlog;
    const data = await action(values);
    toast.success(data.message);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
      >
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-gray-700">Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog title"
                  {...field}
                  className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-gray-700">Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog category"
                  {...field}
                  className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author Field */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-gray-700">Author</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter author name"
                  {...field}
                  className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Excerpt Field */}
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-gray-700">Contant</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter blog excerpt"
                  {...field}
                  className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
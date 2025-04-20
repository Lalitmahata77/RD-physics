"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { courseSchema } from "../schemas/courses"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RequiredLabelIcon } from "@/components/RequiredLabelIcon"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createCourse, updateCourse } from "../actions/courses"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function CourseForm({
  course,
}: {
  course?: {
    id: string
    name: string
    description: string
  }
}) {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: course ?? {
      name: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof courseSchema>) {
    const action = course ? updateCourse.bind(null, course.id) : createCourse
    const data = await action(values)
    toast.success(data.message)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground/90">
                <RequiredLabelIcon />
                Course Name
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Advanced Web Development"
                  className="w-full bg-background rounded-lg border-border/50 
                    focus-visible:ring-2 focus-visible:ring-primary/50
                    px-3 py-2 sm:px-4 sm:py-3
                    text-sm sm:text-base"
                />
              </FormControl>
              <FormMessage className="text-destructive text-sm font-medium" />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground/90">
                <RequiredLabelIcon />
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="A comprehensive course covering modern web development techniques..."
                  className="w-full bg-background rounded-lg border-border/50 
                    focus-visible:ring-2 focus-visible:ring-primary/50 
                    min-h-[140px] sm:min-h-[120px]
                    px-3 py-2 sm:px-4 sm:py-3
                    text-sm sm:text-base"
                />
              </FormControl>
              <FormMessage className="text-destructive text-sm font-medium" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex flex-col md:flex-row justify-end gap-4 mt-6 md:mt-10">
          <Button 
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full md:w-auto px-4 py-2 sm:px-6 sm:py-3 
              text-sm sm:text-base font-medium 
              transition-all hover:bg-primary/90
              active:scale-95"
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
            ) : (
              course ? "Update Course" : "Create Course"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

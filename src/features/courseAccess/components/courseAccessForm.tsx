"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Button } from "@/components/ui/button"

import { MultiSelect } from "@/components/ui/custom/multi-select"
import { toast } from "sonner"
import { CourseAccesSchema } from "../schema/courseAccess"
import { createCourseAccess, updateCourseAccess } from "../actions/courseAccess"

export function CourseAccessForm({
    courseAccess,
    courses,
    users,
  }: {
    courseAccess?: {
      id: string;
      courseId: string; // Single course ID
      userId: string; // Single user ID
    };
    courses: {
      id: string;
      name: string;
    }[];
    users: Array<{
      id: string;
      name: string;
    }>;
  }) {
    const form = useForm<z.infer<typeof CourseAccesSchema>>({
      resolver: zodResolver(CourseAccesSchema),
      defaultValues: courseAccess ?? {
        courseId: "",
        userId: "",
      },
    });
  
    async function onSubmit(values: z.infer<typeof CourseAccesSchema>) {
      const action =
        courseAccess == null
          ? createCourseAccess
          : updateCourseAccess.bind(null, courseAccess.id);
      const data = await action(values);
      toast.success(data.message);
    }
  
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-6 flex-col m-5"
        >
          {/* User ID Field */}
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <RequiredLabelIcon />
                  User
                </FormLabel>
                <FormControl>
                  <MultiSelect
                    selectPlaceholder="Select a user"
                    searchPlaceholder="Search users"
                    options={users}
                    getLabel={(u) => u.name}
                    getValue={(u) => u.id}
                    selectedValues={field.value ? [field.value] : []} // Ensure single selection
                    onSelectedValuesChange={(selected) =>
                      field.onChange(selected[0] || "") // Update with the first selected value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Course ID Field */}
          <FormField
            control={form.control}
            name="courseId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course</FormLabel>
                <FormControl>
                  <MultiSelect
                    selectPlaceholder="Select a course"
                    searchPlaceholder="Search courses"
                    options={courses}
                    getLabel={(c) => c.name}
                    getValue={(c) => c.id}
                    selectedValues={field.value ? [field.value] : []} // Ensure single selection
                    onSelectedValuesChange={(selected) =>
                      field.onChange(selected[0] || "") // Update with the first selected value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Submit Button */}
          <div className="self-end">
            <Button disabled={form.formState.isSubmitting} type="submit">
              Save
            </Button>
          </div>
        </form>
      </Form>
    );
  }
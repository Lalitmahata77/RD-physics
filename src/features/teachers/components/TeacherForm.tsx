"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeacherSchema } from '../schema/teachers'
import { z } from 'zod'
import { createTeacher, updateTeacher } from '../actions/teachers'
import { toast } from 'sonner'
const TeacherForm = ({teachers}:{teachers?: {id:string, name:string, role:string, image:string}}) => {
    const form = useForm<z.infer<typeof TeacherSchema>>({
        resolver: zodResolver(TeacherSchema),
        defaultValues: teachers ?? {
            name: "",
            role: "",
            image: ""
        }
    })
    async function onSubmit(values: z.infer<typeof TeacherSchema>){
const action = teachers == null ? createTeacher : updateTeacher.bind(null, teachers.id)
const data = await action(values)
toast.success(data.message)
    }
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter teacher name ..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter teacher role ..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}

export default TeacherForm
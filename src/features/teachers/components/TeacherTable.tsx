import { ActionButton } from "@/components/ActionButton"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Trash2Icon } from "lucide-react"
 import React from 'react'
import { deleteTeacher } from "../actions/teachers"
import Link from "next/link"
 
 export function TeacherTable ({
    teachers
 }: {
    teachers: {
        id: string
        name: string
        role: string
        image: string
    }[]
 }){
   return (
    <Table>
    <TableHeader>
      <TableRow>
        
        <TableHead>Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead >Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {
            teachers?.map((teacher)=>(

      <TableRow key={teacher.id}>
        <TableCell className="font-medium">{teacher?.name}</TableCell>
        <TableCell>{teacher.role}</TableCell>
        <TableCell>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href={`/admin/teachers/${teacher.id}/edit`}>Edit</Link>
                </Button>
                <ActionButton
                  variant="destructiveOutline"
                  requireAreYouSure
                  action={deleteTeacher.bind(null, teacher.id)}
                >
                  <Trash2Icon />
                  <span className="sr-only">Delete</span>
                </ActionButton>
              </div>
            </TableCell>
      </TableRow>
            ))
        }
    </TableBody>
  </Table>
  
   )
 }
 

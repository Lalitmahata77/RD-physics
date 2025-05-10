import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { db } from '@/drizzle/db'
import { TeacherTable as TeacherTableDB } from '@/drizzle/schema'
import { TeacherTable } from '@/features/teachers/components/TeacherTable'
import { getTeacherGlobalTag } from '@/features/teachers/db/cache'
import { cacheTag } from 'next/dist/server/use-cache/cache-tag'
import Link from 'next/link'
import React from 'react'

const TeacherPage = async() => {
    const teachers = await getTeachers()
  return (
    <div className="container my-6 m-14">
    <PageHeader title="Teachers">
      <Button asChild className="w-fit mr-24">
        <Link href="/admin/teachers/new">New Teacher</Link>
      </Button>
    </PageHeader>
    <TeacherTable teachers={teachers}/>
    </div>
  )
}

async function getTeachers(){
    "use cache"
    cacheTag(
        getTeacherGlobalTag()
    )

    return db
    .select({
        id: TeacherTableDB.id,
        name: TeacherTableDB.name,
        role: TeacherTableDB.role,
        image: TeacherTableDB.image

        
    })
    .from(TeacherTableDB)
}
export default TeacherPage
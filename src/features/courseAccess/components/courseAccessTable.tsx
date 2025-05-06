import { ActionButton } from "@/components/ActionButton";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { deleteCourseAccess } from "../actions/courseAccess";

export function CourseAccessTable({
  coursesAccess,
}: {
  coursesAccess: {
    courseId: string;
    userId: string;
    courseName?: string; // Optional: Display course name if available
    userName?: string; // Optional: Display user name if available
  }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course</TableHead>
          <TableHead>Student</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coursesAccess.map((access) => (
          <TableRow key={access.courseId}>
            {/* Course Column */}
            <TableCell>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">{access.courseName || access.courseId}</div>
                <div className="text-muted-foreground text-sm">
                  Course ID: {access.courseId}
                </div>
              </div>
            </TableCell>

            {/* Student Column */}
            <TableCell>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">{access.userName || access.userId}</div>
                <div className="text-muted-foreground text-sm">
                  User ID: {access.userId}
                </div>
              </div>
            </TableCell>

            {/* Actions Column */}
            <TableCell>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href={`/admin/courseAccess/${access.userId}/edit`}>Edit</Link>
                </Button>
                <ActionButton
                  variant="destructiveOutline"
                  requireAreYouSure
                  action={deleteCourseAccess.bind(null, access.userId)}
                >
                  <Trash2Icon />
                  <span className="sr-only">Delete</span>
                </ActionButton>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
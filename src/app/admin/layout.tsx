import { Badge } from "@/components/ui/badge"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function Navbar() {
    return (
      <header className="flex h-16 shadow bg-gray-100 z-10">
        <nav className="flex items-center justify-between container mx-auto px-4">
          {/* Logo and Admin Badge */}
          <div className="flex items-center gap-4">
            <Link className="flex items-center" href="/admin">
              <Image
                src={"/logo3.png"}
                alt="logo"
                width={80}
                height={80}
                className="w-16 h-16 rounded-full"
              />
            </Link>
            <Badge >
              Admin
            </Badge>
          </div>
  
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded transition-colors duration-200"
              href="/admin/courses"
            >
              Courses
            </Link>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded transition-colors duration-200"
              href="/admin/products"
            >
              Products
            </Link>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded transition-colors duration-200"
              href="/admin/sales"
            >
              Sales
            </Link>
          </div>
  
          {/* User Button */}
          <div className="w-10 h-10">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: "100%", height: "100%" },
                },
              }}
            />
          </div>
        </nav>
      </header>
    );
  }
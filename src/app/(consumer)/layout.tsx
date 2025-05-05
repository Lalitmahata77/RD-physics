import { Button } from "@/components/ui/button"
import { canAccessAdminPages } from "@/permissions/general"
import { getCurrentUser } from "@/services/clerk"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ReactNode, Suspense } from "react"






// export default function ConsumerLayout({
//     children,
//   }: Readonly<{ children: ReactNode }>) {
//     return (
//       <>
//         <Navbar />
//         {children}
//       </>
//     )
//   }
  
//   function Navbar() {
//     return (
//       <header className="flex h-22 shadow z-10 bg-gray-300">
//         <nav className="flex items-center justify-between container mx-auto px-4">
//           {/* Logo */}
//           <Link
//             className="flex items-center text-lg hover:underline ml-12"
//             href="/"
//           >
//             <Image
//             src={"/logo3.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-20 h-20 mr2 rounded-full"
//             />
//           </Link>
  
//           {/* Navigation Links */}
//           <div className="flex items-center gap-6 font-semibold">
//             <Suspense>
//               <SignedIn>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/about"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/courses"
//                 >
//                   My Courses
//                 </Link>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/purchases"
//                 >
//                   Purchase History
//                 </Link>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/blog"
//                 >
//                   Blog
//                 </Link>
//                 <Link
//                   className="hover:text-green-500 px-3 py-2 rounded transition-colors duration-200"
//                   href="/contact"
//                 >
//                   Contact Us
//                 </Link>
//                 <AdminLink />

//                 <div className="w-8 h-8">
//                   <UserButton
//                     appearance={{
//                       elements: {
//                         userButtonAvatarBox: { width: "100%", height: "100%" },
//                       },
//                     }}
//                   />
//                 </div>
//               </SignedIn>
//             </Suspense>
//             <Suspense>
//               <SignedOut>
//                 <Button className="self-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors duration-200" asChild>
//                   <SignInButton>Sign In</SignInButton>
//                 </Button>
//               </SignedOut>
//             </Suspense>
//           </div>
//         </nav>
//       </header>
//     );
//   }


//   async function AdminLink() {
//     const user = await getCurrentUser()
//     if (!canAccessAdminPages(user)) return null
  
//     return (
//       <Link className="hover:bg-accent/10 flex items-center px-2" href="/admin">
//         Admin
//       </Link>
//     )
//   }





export default function ConsumerLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 h-16 shadow z-10 bg-background">
      <nav className="flex items-center justify-between container mx-auto px-4 h-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <Image
            src="/logo3.png"
            alt="Company Logo"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <CommonLinks />
          
          <Suspense fallback={<AuthSkeleton />}>
            <SignedIn>
              <AuthenticatedLinks />
              <UserAvatar />
            </SignedIn>
            
            <SignedOut>
              <SignInButton>
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </Suspense>
        </div>
      </nav>
    </header>
  )
}

function CommonLinks() {
  return (
    <>
      {[
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hidden md:inline text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

function AuthenticatedLinks() {
  return (
    <>
      <Link
        href="/courses"
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
      >
        My Courses
      </Link>
      <Link
        href="/purchases"
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
      >
        Purchase History
      </Link>
      <Suspense fallback={null}>
        <AdminLink />
      </Suspense>
    </>
  )
}

function UserAvatar() {
  return (
    <div className="w-10 h-10 rounded-full border-2 border-muted overflow-hidden">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "w-full h-full",
            userButtonTrigger: "w-full h-full",
          }
        }}
        afterSignOutUrl="/"
      />
    </div>
  )
}

async function AdminLink() {
  const user = await getCurrentUser()
  if (!canAccessAdminPages(user)) return null

  return (
    <Link 
      href="/admin"
      className="text-sm font-medium text-destructive hover:text-destructive/80 transition-colors px-3 py-2"
    >
      Admin
    </Link>
  )
}

function AuthSkeleton() {
  return <div className="w-24 h-10 bg-muted rounded animate-pulse" />
}
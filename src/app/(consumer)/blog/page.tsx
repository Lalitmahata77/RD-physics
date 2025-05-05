import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Blog from "./components/Blog";

const Page = () => {
  return (
    <div className="container mx-auto my-8 px-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blogs</h1>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
          <Link href="/blog/new">New Blog</Link>
        </Button>
      </div>

      {/* Blog List */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <Blog />
      </div>
    </div>
  );
};

export default Page;
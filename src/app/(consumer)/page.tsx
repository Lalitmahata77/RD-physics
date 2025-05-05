import { db } from "@/drizzle/db"
import { ProductTable } from "@/drizzle/schema"
import { ProductCard } from "@/features/products/components/ProductCard"
import { getProductGlobalTag } from "@/features/products/db/cache"
import { wherePublicProducts } from "@/features/products/permissions/products"
import { asc } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import Home from "./_components/home"
import Above from "./_components/above"
import PremiumExperience from "./_components/PremiumExperience"
import Testimonials from "./_components/Testimonials"
import Features from "./_components/features"
import MentorsSection from "./_components/mector"
import {BlogSection} from "./_components/blogs"
import ContactSection from "./_components/contact"
import Footer from "./_components/footer"

export default async function HomePage() {
  const products = await getPublicProducts()

  return (
    <>
      <Home/>
      <Above/>
      <PremiumExperience/>
    <div className="container my-6">
      <h1 className=" font-bold text-5xl ml-32 mr-32">Explore Our Courses</h1>
      <p className=" ml-32 mr-32 mb-7 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed tincidunt velit. Donec bibendum turpis vitae maximus bibendum.</p>
      <div className="grid grid-cols-3 gap-4 ml-32 mr-32">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>

    <Testimonials/>
    <Features/>
    <MentorsSection/>
    <BlogSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

async function getPublicProducts() {
  "use cache"
  cacheTag(getProductGlobalTag())

  return db.query.ProductTable.findMany({
    columns: {
      id: true,
      name: true,
      description: true,
      priceInDollars: true,
      imageUrl: true,
    },
    where: wherePublicProducts,
    orderBy: asc(ProductTable.name),
  })
}
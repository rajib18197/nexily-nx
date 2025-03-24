import BlogSection from "@/components/blogs/Blogs";
import Footer from "@/components/footer";
import { Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AllBlogs from "@/components/blogs/AllBlogs";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300"
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="./Logo.webp"
                alt="Nexily Logo"
                style={{ width: "220px", height: "40px", aspectRatio: "4:3" }}
              />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="pt-32 pb-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blogs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, news, and resources to help you stay ahead in the
              digital world
            </p>
          </div>
        </div>
        <AllBlogs />
      </main>
      <Footer />
    </div>
  );
}

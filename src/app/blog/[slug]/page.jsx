import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Blog from "@/models/Blog";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { cn } from "@/lib/utils";

// This would normally come from a CMS or API
const getBlogPost = (slug) => {
  return {
    title: "10 Ways Digital Transformation Can Boost Your Business Growth",
    excerpt:
      "Discover how implementing digital transformation strategies can revolutionize your business operations and drive substantial growth in today's competitive market.",
    content: `
      <p>Digital transformation is revolutionizing how businesses operate in today's fast-paced market. By leveraging cutting-edge technologies, companies can streamline operations, enhance customer experiences, and drive unprecedented growth.</p>
      
      <h2>1. Enhanced Customer Experience</h2>
      <p>Digital transformation enables businesses to create personalized, seamless customer journeys across all touchpoints. By analyzing customer data, companies can anticipate needs and deliver tailored solutions that drive satisfaction and loyalty.</p>
      
      <h2>2. Data-Driven Decision Making</h2>
      <p>With digital tools, businesses can collect and analyze vast amounts of data to inform strategic decisions. This data-driven approach minimizes risks and maximizes opportunities for growth and innovation.</p>
      
      <h2>3. Operational Efficiency</h2>
      <p>Automation and digital workflows eliminate manual processes, reducing errors and freeing up valuable resources. This efficiency translates to cost savings and faster time-to-market for new products and services.</p>
      
      <h2>4. Agile Business Models</h2>
      <p>Digital transformation enables businesses to adapt quickly to changing market conditions. Flexible, scalable systems allow companies to pivot strategies and capitalize on emerging opportunities.</p>
      
      <h2>5. Expanded Market Reach</h2>
      <p>Digital channels break down geographical barriers, allowing businesses to reach global audiences. E-commerce platforms, social media, and digital marketing create new avenues for customer acquisition and revenue growth.</p>
    `,
    category: "Digital Transformation",
    author: "Sarah Johnson",
    authorRole: "Digital Strategist",
    authorBio:
      "Sarah is a digital transformation expert with over 10 years of experience helping businesses leverage technology to drive growth and innovation.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Mar 15, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: [
      "Digital Transformation",
      "Business Growth",
      "Innovation",
      "Technology",
      "Strategy",
    ],
  };
};

export default async function BlogPostPage({ params }) {
  await connectToDatabase();
  const { slug } = await params;
  console.log(slug, 1010, params);
  const blogData = await Blog.findById(slug).populate({
    path: "user",
    model: "User",
    strictPopulate: false,
  });
  const post = JSON.parse(JSON.stringify(blogData));
  console.log(post);
  const userData = await User.findById(post.author);
  const user = JSON.parse(JSON.stringify(userData));
  console.log(user);

  // const post = getBlogPost(params.slug);

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
        <article className="pt-32 pb-20">
          {/* Header */}
          <div className="container mx-auto px-4 max-w-4xl mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                Category:{" "}
                <span
                  style={{
                    background: "orangered",
                    display: "inline-block",
                    padding: "4px 8px",
                    borderRadius: "100px",
                  }}
                >
                  {post.category}
                </span>
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  {/* <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar> */}
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.role}</p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="container mx-auto px-4 max-w-4xl mb-12 h-[400px] md:h-[500px]">
            <img
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-contains"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 max-w-3xl">
            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full"
                    style={{ background: "orangered", color: "white" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

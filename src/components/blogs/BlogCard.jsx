"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function BlogCard({ post, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
        <div className="absolute top-4 left-4">
          <span
            className="inline-block bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: "#101d28",
              color: "#fff",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          <span className="mr-3">{post.date}</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/blog/${post?._id}`}>
          <Button
            variant="ghost"
            style={{
              background: `hsl(221.2 83.2% 53.3%)`,
              color: "white",
              cursor: "pointer",
            }}
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

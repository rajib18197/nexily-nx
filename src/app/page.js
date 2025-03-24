import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import BlogSection from "@/components/blogs/Blogs";
import ContactFormSection from "@/components/Contact";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Loading</h2>}>
        <ServicesSection />
      </Suspense>
      <WorkingProcess />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}

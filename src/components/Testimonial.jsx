import TestimonialClient from "./TestimonialClient";
import TestimonialBox from "./TestimonialBox";
import { MotionHeading } from "./Motion";
import connectToDatabase from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

// const testimonials = [
//   {
//     quote:
//       "Nexily transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations. Working with Nexily was a game-changer for our company. Their strategic approach and technical expertise helped us achieve our goals faster than we thought possible.",
//     author: "Sarah Johnson",
//     position: "CEO, TechVision",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     initials: "SJ",
//   },
//   {
//     quote:
//       "Working with Nexily was a game-changer for our company. Their strategic approach and technical expertise helped us achieve our goals faster than we thought possible.",
//     author: "Michael Chen",
//     position: "CTO, InnovateCorp",
//     avatar:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     initials: "MC",
//   },
//   {
//     quote:
//       "The team at Nexily delivered exceptional results. Their attention to detail and commitment to quality made them the perfect partner for our digital transformation journey.",
//     author: "Emily Rodriguez",
//     position: "Marketing Director, GrowthLabs",
//     avatar:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     initials: "ER",
//   },
// ];

export default async function Testimonials() {
  await connectToDatabase();

  const testimonialsRes = await Testimonial.find({ isActive: true }).sort({
    order: 1,
  });

  const testimonials = JSON.parse(JSON.stringify(testimonialsRes));

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionHeading>
            <h2 className="heading-sub">What Our Clients Say</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              Don't just take our word for it. Here's what our clients have to
              say about working with Nexily.
            </p>
          </MotionHeading>
        </div>
      </div>

      <TestimonialClient testimonials={testimonials}>
        <TestimonialBox testimonials={testimonials} />
      </TestimonialClient>
    </section>
  );
}

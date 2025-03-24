import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialBox({ testimonials }) {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <Card className="border-none bg-card">
            <CardContent className="p-8 md:p-10">
              <p
                className="text-lg md:text-xl mb-8"
                style={{ lineHeight: "1.7" }}
              >
                "{testimonial?.quote}"
              </p>
              <div
                className="flex items-center"
                style={{
                  width: "max-content",
                  margin: "60px 0 0 0",
                }}
              >
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage
                    src={testimonial?.authorImage}
                    alt={testimonial?.author}
                  />
                  <AvatarFallback>{testimonial?.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial?.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.position}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}

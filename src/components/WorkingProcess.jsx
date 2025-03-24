import { Lightbulb } from "lucide-react";
import { Motion, MotionHeading } from "./Motion";
import connectToDatabase from "@/lib/mongodb";
import Process from "@/models/Process";
import { Fragment } from "react";

export default async function WorkingProcess() {
  await connectToDatabase();

  const processes = await Process.find({ isActive: true }).sort({ order: 1 });
  const steps = JSON.parse(JSON.stringify(processes));
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionHeading>
            <h2 className="heading-sub">Working Process</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              We follow a structured approach to deliver exceptional results for
              our clients.
            </p>
          </MotionHeading>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <Fragment key={step._id}>
                <Motion
                  index={index}
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    key={step._id}
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-16 lg:pr-24"
                        : "md:pl-16 lg:pl-24"
                    } md:text-${index % 2 === 0 ? "right" : "left"}`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4`}
                      style={{
                        color: "hsl(12 76% 61%)",
                        background: "hsl(12 76% 61% / 0.1)",
                      }}
                    >
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="hidden md:block md:w-0 relative">
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 bg-chart-1/10 text-chart-1 border-chart-1/20bg-background z-10 flex items-center justify-center`}
                      style={{
                        color: "hsl(12 76% 61%)",
                        background: "hsl(12 76% 61% / 0.1)",
                      }}
                    >
                      <span className="font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="md:w-1/2" />
                </Motion>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

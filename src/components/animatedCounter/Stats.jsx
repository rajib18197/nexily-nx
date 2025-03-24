"use client";

import { motion } from "framer-motion";
import { Users, Award, Building, Globe } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection({
  clients,
  yearsOfExperience,
  projects,
  countriesServed,
}) {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: clients,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: yearsOfExperience,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      value: projects,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: countriesServed,
      label: "Countries Served",
      suffix: "+",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold mb-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  delay={300}
                  easing="easeOut"
                  className="text-[hsl(221.2 83.2% 53.3%)]"
                />
              </h3>
              <p className="text-muted-foreground text-[11px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import AnimatedHeroContent from "./hero/AnimatedHeroContent";
import AnimatedHeroImage from "./hero/AnimatedHeroImage";
import connectToDatabase from "@/lib/mongodb";
import Hero from "@/models/Hero";

export default async function HeroSection() {
  await connectToDatabase();
  const heroRes = await Hero.findOne({ isActive: true });
  const heroData = JSON.parse(JSON.stringify(heroRes));
  console.log(heroData, 111);
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <AnimatedHeroContent heroData={heroData} />
          </div>

          <AnimatedHeroImage images={heroData.images} />
        </div>
      </div>
    </section>
  );
}

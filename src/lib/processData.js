const url = `https://nexily.vercel.app/api/process`;
// const url = `http://localhost:3000/api/process`;

export async function getProcessData() {
  try {
    // Use relative URL for API calls from server components
    const response = await fetch("url", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch hero data");
    }
    const data = await response.json();
    console.log(data, 1212);
    return data;
  } catch (error) {
    console.error("Error fetching hero data:", error);

    // Return default data if fetch fails
    // return [
    //   {
    //     title: "Discovery",
    //     description:
    //       "We start by understanding your business needs, goals, and challenges through in-depth consultations.",
    //     icon: Search,
    //     color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
    //     colorbg: "hsl(12 76% 61% / 0.1)",
    //     colorText: "hsl(12 76% 61%)",
    //   },
    //   {
    //     title: "Strategy",
    //     description:
    //       "Our team develops a comprehensive strategy tailored to your specific requirements and objectives.",
    //     icon: Lightbulb,
    //     color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    //     colorbg: "hsl(173 58% 39% / 0.1)",
    //     colorText: "hsl(173 58% 39%)",
    //   },
    //   {
    //     title: "Development",
    //     description:
    //       "We bring your vision to life with cutting-edge technology and industry best practices.",
    //     icon: Code,
    //     color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    //     colorbg: "hsl(197 37% 24%/ 0.1)",
    //     colorText: "hsl(197 37% 24%)",
    //   },
    //   {
    //     title: "Launch & Support",
    //     description:
    //       "We ensure a smooth launch and provide ongoing support to help your business thrive.",
    //     icon: Rocket,
    //     color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    //     colorbg: "hsl(43 74% 66% / 0.1)",
    //     colorText: "hsl(43 74% 66%)",
    //   },
    // ];
  }
}

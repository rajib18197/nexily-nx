const url = `https://nexily.vercel.app/api/testimonials`;
// const url = `http://localhost:3000/api/testimonials`;

export async function getTestimonialsData() {
  try {
    // Use relative URL for API calls from server components
    const response = await fetch(url, {
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
  }
}

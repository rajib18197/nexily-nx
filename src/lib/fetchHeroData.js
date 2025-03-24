const url = `https://nexily.vercel.app/api/hero`;
// const url = `http://localhost:3000/api/hero`;

export async function fetchHeroData(url) {
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
    return {
      title: "Transform Your Business with",
      highlightedText: "Nexily",
      description:
        "We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and create exceptional customer experiences.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Learn More",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    };
  }
}

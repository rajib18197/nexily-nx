const url = `https://nexily.vercel.app/api/services`;
// const url = `http://localhost:3000/api/services`;

export async function getServicesData() {
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
    //     id: 1,
    //     icon: (
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    //           fill="white"
    //           fillOpacity="0.2"
    //         />
    //         <path
    //           d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
    //           fill="white"
    //         />
    //       </svg>
    //     ),
    //     title: "Start Up Consultancy",
    //     description:
    //       "We provide expert guidance in business planning, funding, legal compliance, marketing, operations, technology, and growth strategy to accelerate startup",
    //     bulletPoints: [
    //       "Inbound Sales",
    //       "Outbound Sales & Business Development",
    //       "Account Based Sales",
    //     ],
    //     buttonText: "Get Started",
    //   },
    //   {
    //     id: 2,
    //     icon: (
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
    //           fill="white"
    //         />
    //       </svg>
    //     ),
    //     title: "Sales Consultancy",
    //     description:
    //       "We provide expert guidance in sales strategy, training, process optimisation, CRM, efficiency, and performance analysis to boost sales effectiveness and revenue growth.",
    //     bulletPoints: [
    //       "Inbound Sales",
    //       "Outbound Sales & Business Development",
    //       "Account Based Sales",
    //     ],
    //     buttonText: "Get Started",
    //   },
    //   {
    //     id: 3,
    //     icon: (
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M7 15H5V17H7V15Z" fill="white" />
    //         <path d="M19 15H17V17H19V15Z" fill="white" />
    //         <path d="M11 7H13V9H11V7Z" fill="white" />
    //         <path d="M19 7H17V9H19V7Z" fill="white" />
    //         <path d="M7 7H5V9H7V7Z" fill="white" />
    //         <path d="M15 11H13V13H15V11Z" fill="white" />
    //         <path d="M19 11H17V13H19V11Z" fill="white" />
    //         <path d="M7 11H5V13H7V11Z" fill="white" />
    //         <path d="M11 11H9V13H11V11Z" fill="white" />
    //         <path d="M11 15H9V17H11V15Z" fill="white" />
    //         <path d="M15 15H13V17H15V15Z" fill="white" />
    //       </svg>
    //     ),
    //     title: "Marketing Consultancy",
    //     description:
    //       "We offer expert guidance in marketing strategy, branding, digital marketing, market research, campaign management, and customer analytics to drive brand awareness and maximize ROI",
    //     bulletPoints: [
    //       "Inbound Sales",
    //       "Outbound Sales & Business Development",
    //       "Account Based Sales",
    //     ],
    //     buttonText: "Get Started",
    //   },
    // ];
  }
}

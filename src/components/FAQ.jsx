import "./FAQ.css";
import FAQClient from "./FAQClient";
import { FAQHidden, FAQTop } from "./FAQContents";
import { getFAQData } from "@/lib/FAQData";
import { MotionHeading } from "./Motion";
import connectToDatabase from "@/lib/mongodb";
import FAQ from "@/models/FAQ";
// const faqs = [
//   {
//     id: 1,
//     question: "Do You Ship to countries Outside the Asia?",
//     answer:
//       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
//   },
//   {
//     id: 2,
//     question: "Do You Ship to countries Outside the Asia?",
//     answer:
//       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
//   },
//   {
//     id: 3,
//     question: "Do You Ship to countries Outside the Asia?",
//     answer:
//       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
//   },
//   {
//     id: 4,
//     question: "Do You Ship to countries Outside the Asia?",
//     answer:
//       "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
//   },
//   // Add more questions here
// ];

export default async function FAQSection() {
  await connectToDatabase();

  const faqsRes = await FAQ.find({ isActive: true }).sort({ order: 1 });
  const faqs = JSON.parse(JSON.stringify(faqsRes));

  return (
    <section id="faq" className="py-20 md:py-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionHeading>
            <h2 className="heading-sub">Have Question in Mind?</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              Check them all to see if it's already compiled in here
            </p>
          </MotionHeading>
        </div>
        <FAQClient
          faqs={faqs}
          topPart={faqs.map(({ _id, question }, i) => (
            <FAQTop question={question} i={i} key={_id} />
          ))}
          hiddenPart={faqs.map(({ _id, answer }) => (
            <FAQHidden answer={answer} key={_id} />
          ))}
        />
      </section>
    </section>
  );
}

// <div
//   key={id}
//   className="border-b border-gray-300 py-4 cursor-pointer"
//   onClick={() => toggleQuestion(id)}
// >
//   <div className="flex justify-between items-center">
//     <p className="font-semibold text-lg">{question}</p>
//     <button className="p-2">
//       <PlusIcon
//         className={`w-5 h-5 transition-transform ${
//           openQuestion === id ? "rotate-45" : ""
//         }`}
//       />
//     </button>
//   </div>
//   {openQuestion === id && (
//     <p className="mt-2 text-gray-700">{answer}</p>
//   )}
// </div>

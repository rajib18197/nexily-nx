"use client";
import { useState } from "react";
import "./FAQ.css";

export default function FAQClient({ faqs, topPart, hiddenPart }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    console.log(id);
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="" style={{ width: "80%", margin: "0 auto" }}>
      {faqs.map(({ _id, question, answer }, i) => (
        <div
          className={`question ${openQuestion === _id ? "open" : undefined}`}
          key={_id}
          onClick={() => toggleQuestion(_id)}
        >
          {topPart[i]}
          {openQuestion === _id && hiddenPart[i]}
        </div>
      ))}
    </div>
  );
}

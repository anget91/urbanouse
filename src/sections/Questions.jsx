import { useState } from "react";
import { FAQ } from "../components/FAQ";

export function Questions() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      question: "How do I start searching for a property with Urbanouse?",
      answer:
        "You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features. Once you find a property you're interested in, simply click 'View Details' to learn more or schedule a visit.",
    },
    {
      question: "What services does Urbanouse offer for first-time homebuyers?",
      answer:
        "Urbanouse offers a variety of services to help first-time homebuyers, including property search, viewing details, scheduling a visit, and more. We also provide resources and support to help you navigate the homebuying process.",
    },
    {
      question: "Can Urbanouse help me sell my property?",
      answer:
        "Yes, Urbanouse can help you sell your property by providing a variety of services, including property search, viewing details, scheduling a visit, and more. We also provide resources and support to help you navigate the homebuying process.",
    },
    {
      question: "What types of properties does Urbanouse specialize in?",
      answer:
        "Urbanouse specializes in providing a wide range of services to help first-time homebuyers, including property search, viewing details, scheduling a visit, and more. We also provide resources and support to help you navigate the homebuying process.",
    },
    {
      question: "Can I schedule a visit to view properties?",
      answer:
        "Yes, you can schedule a visit to view properties with Urbanouse. Simply click on the 'Schedule a Visit' button on the property details page and follow the prompts to schedule a visit.",
    },
  ];
  return (
    <section className=" w-full px-10 md:px-20 my-24 flex flex-col items-center gap-20 ">
      <div className=" flex flex-col items-center gap-6 ">
        <h2 className="text-3xl md:text-5xl font-medium text-primary text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-black/60 font-medium text-xl whitespace-pre-line text-center">
          Have questions about buying, selling, or renting with Urbanouse?
          We&apos;ve got the answers {"\n"}to help guide you through the
          process.
        </p>
      </div>
      <div className="flex flex-col gap-5  w-full md:w-2/3">
        {faqData.map((faq, index) => (
          <FAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === index}
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

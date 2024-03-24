import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFAQ() {
  const qa = [
    {
      question: "What is JSON?",
      answer:
        "JSON, or JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
    },
    {
      question: "How is JSON used?",
      answer:
        "JSON is commonly used for transmitting data between a server and web application, as an alternative to XML. It is also used for configuration files and storing complex data in a human-readable format.",
    },
    {
      question: "What are the advantages of using JSON?",
      answer:
        "Some advantages of using JSON include its simplicity, lightweight nature, and compatibility with various programming languages. It is also easily readable and writable by both humans and machines.",
    },
    {
      question: "How do you parse JSON data?",
      answer:
        "JSON data can be parsed using built-in functions in most programming languages, such as JSON.parse() in JavaScript. This allows the data to be converted into a native data structure for easy manipulation.",
    },
    {
      question: "Can JSON handle complex data structures?",
      answer:
        "Yes, JSON supports nested arrays and objects, allowing for the representation of complex data structures with ease. This makes it suitable for a wide range of data storage and interchange needs.",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="mt-[10rem]  text-2xl font-bold tracking-tight duration-1000 animate-in slide-in-from-bottom-6 lg:text-3xl">
        Questions & Answers
      </h2>
      <p className=" text-[16px] leading-7 text-muted-foreground">
        Json Translate Q&A
      </p>

      <Accordion type="single" collapsible className="">
        {qa.map((qa) => (
          <AccordionItem key={qa.question} value={qa.question}>
            <AccordionTrigger>{qa.question}</AccordionTrigger>
            <AccordionContent>{qa.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

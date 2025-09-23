// <== IMPORTS ==>
import type { ReactNode } from "react";

// <== SECTION PROPS ==>
type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = "Sub-Heading", children }: SectionProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-col bg-gray-200 pb-6">
      <h2 className="font-semibold text-2xl text-red-500 italic">{title}</h2>
      <p className="font-semibold text-3xl text-gray-500 underline underline-offset-8">
        {children}
      </p>
    </section>
  );
};

export default Section;

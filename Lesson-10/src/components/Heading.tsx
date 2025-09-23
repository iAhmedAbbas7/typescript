// <== IMPORTS ==>
import type { ReactElement } from "react";

// <== HEADING TYPE ==>
type HeadingProps = { title: string };

const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1 className="w-full py-4 text-4xl font-sans font-semibold text-center text-sky-400 bg-gray-200">
      {title}
    </h1>
  );
};

export default Heading;

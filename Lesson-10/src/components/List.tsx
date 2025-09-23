// <== IMPORTS ==>
import type { ReactNode } from "react";

// <== LIST PROPS ==>
interface ListProps<T> {
  title: string;
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, title, render }: ListProps<T>) => {
  return (
    <>
      <section className="w-full bg-gray-200 flex items-center justify-center flex-col gap-4 pb-6">
        <h2 className="font-semibold text-3xl text-purple-500">
          My {title} List
        </h2>
        <ul className="flex items-center justify-center gap-12">
          {items.map((item, i) => (
            <li className="text-2xl font-semibold text-amber-500" key={i}>
              {render(item)}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default List;

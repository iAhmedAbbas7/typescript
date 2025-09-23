// <== IMPORTS ==>
import List from "./components/List";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

const App = () => {
  return (
    <section className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col">
      <Heading title="TypeScript" />
      <Section title="Lesson-10">React Vite with TypeScript</Section>
      <Counter />
      <List
        title="Favorites"
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="">{item}</span>}
      />
    </section>
  );
};

export default App;

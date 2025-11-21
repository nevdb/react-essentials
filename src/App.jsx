import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <section>
          <h2>Core Concepts</h2>
          <ul class="flex gap-4">
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id="examples" class="my-20">
          <h2>Examples</h2>
          <menu class="flex justify-center">
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </div>
    </>
  );
}

export default App;

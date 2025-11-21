import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

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

        <h2>Core Concepts</h2>
        <ul class="flex gap-4">
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
        </ul>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Essentials</h1>
      <p>{description} React concepts</p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img class="w-100" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
          <CoreConcept
            img={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
          <CoreConcept
            img={CORE_CONCEPTS[1].image}
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
          />
          <CoreConcept
            img={CORE_CONCEPTS[2].image}
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
          />
        </ul>
      </div>
    </>
  );
}

export default App;

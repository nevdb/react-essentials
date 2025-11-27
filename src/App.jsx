import "./App.css";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      <div>
        <CoreConcepts />
        <Examples />
      </div>
    </>
  );
}

export default App;

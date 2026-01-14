import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="font-avenir text-white min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="font-avenir text-white min-h-screen m-auto max-w-[1440px]">
      {/* Hero Section Container - exactly 100svh */}
      <section className="h-svh flex flex-col mb-5">
        <Header />
        <main className="flex-1 flex flex-col mt-[150px]">
          <Hero />
        </main>
      </section>
      {/* App Features Section */}
      <Features />
    </div>
  );
}

export default App;

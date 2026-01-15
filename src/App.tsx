import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <div className="font-avenir text-white min-h-screen">

      {/* Header Hero */}
      <div className="bg-app-bg">
        <section className="h-svh flex flex-col m-auto px-10 max-w-[1440px]">
          <Header />
          <main className="flex-1 flex flex-col mt-[150px]">
            <Hero />
          </main>
        </section>
      </div>
      {/* Features */}
      <div className="bg-app-bg">
        <Features />
      </div>
      {/* Testimonials */}
      <div className="bg-linear-to-b from-app-bg from-50% to-white to-50%">
        <Testimonials />
      </div>
      {/* CTA Section */}
      <div className="bg-linear-to-b from-white from-50% to-app-bg to-50%">
        <CTA />
      </div>

      {/* Footer */}
      <div className="bg-app-bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import SocialReviews from "./components/SocialReviews/SocialReviews";
import { useState } from "react";

function App() {
  const [headerFinished, setHeaderFinished] = useState<boolean>(false)
  return (
    <div className="font-avenir text-white min-h-screen">
      {/* Header Hero */}
      <div className="bg-app-bg">
        <section className="h-svh flex flex-col m-auto px-10 max-w-[1440px]">
          <Header onComplete={() => setHeaderFinished(true)} />
          <main className="flex-1 flex flex-col mt-[150px]">
            <Hero isReady={headerFinished} />
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
      {/* Social Reviews */}
      <SocialReviews />
      {/* CTA Section */}
      <div className="bg-linear-to-b from-white from-50% to-app-bg to-50%">
        <CTA />
        <div className="border border-white"></div>
      </div>
      {/* Footer */}
      <div className="bg-app-bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;

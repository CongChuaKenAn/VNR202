import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import HeroSection from "../component/homepage/HeroSection";
import Overview from "../component/homepage/Overview";
import Context from "../component/homepage/Context";
import InteractiveTimeline from "../component/homepage/InteractiveTimeline";
import Damage from "../component/homepage/Damage";
import Result from "../component/homepage/Result";
import Meaning from "../component/homepage/Meaning";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <Overview />
        <Context />
        <InteractiveTimeline />
        <Damage />
        <Result />
        <Meaning />
      </main>
      <Footer />
    </div>
  );
}

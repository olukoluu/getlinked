import Faqs from "../component/Faqs";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Partners from "../component/Partners";
import Policy from "../component/Policy";
import Rewards from "../component/Rewards";
import Section from "../component/Section";
import Timeline from "../component/Timeline";

const Home = () => {
  return (
    <main className=" w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Section />
      <Faqs />
      <Timeline />
      <Rewards />
      <Partners />
      <Policy />
      <Footer />
    </main>
  );
};

export default Home;

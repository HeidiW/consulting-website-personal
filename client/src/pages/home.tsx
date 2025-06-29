import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Consult from "@/components/consult";
import Blog from "@/components/blog";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
          <Services />
          {/* <Testimonials /> */}
        </section>
        <section id="consult">
          <Consult />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

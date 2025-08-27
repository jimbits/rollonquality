import Services from "@/components/page/Services";
import Hero from "@/components/page/Hero";
import WhyChooseUs from "@/components/page/WhyChooseUs";
import AppBar from "@/components/page/AppBar";
import Preview from "@/components/page/Preview";
import Reviews from "@/components/page/Reviews";

export default function Home() {
  return (
    <>
      <AppBar className="mb-4 px-4 py-2" />
      <Hero className="mb-2" />

      <main>
        <Services />
        <WhyChooseUs />
        {/*<Preview />
        <Reviews /> */}
      </main>
    </>
  );
}

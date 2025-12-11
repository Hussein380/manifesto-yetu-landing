import { Helmet } from "react-helmet-async";
import QRSection from "@/components/QRSection";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Manifesto Yetu - National Youth Manifesto 2025</title>
        <meta
          name="description"
          content="Download the National Youth Manifesto 2025 - 1st Edition. A vision for Kenyan youth empowerment and national development."
        />
        <meta property="og:title" content="Manifesto Yetu - National Youth Manifesto 2025" />
        <meta
          property="og:description"
          content="Download the National Youth Manifesto 2025 - 1st Edition. A vision for Kenyan youth empowerment."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Side - QR Code Section */}
        <section
          className="relative flex min-h-[50vh] flex-1 items-center justify-center bg-kenya-gradient lg:min-h-screen lg:max-w-md xl:max-w-lg"
          aria-label="QR Code Download Section"
        >
          <QRSection />
        </section>

        {/* Right Side - Hero/Cover Section */}
        <section
          className="relative flex-[2] min-h-[50vh] lg:min-h-screen"
          aria-label="Manifesto Cover"
        >
          <HeroSection />
        </section>
      </main>
    </>
  );
};

export default HomePage;

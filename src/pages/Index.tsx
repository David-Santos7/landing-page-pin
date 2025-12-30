import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import FloorPlans from "@/components/FloorPlans";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vila Sônia Residence | Apartamentos de Alto Padrão em São Paulo</title>
        <meta
          name="description"
          content="Apartamentos de 2 quartos em Vila Sônia, São Paulo. Alto padrão com varanda gourmet, piscina, quadra esportiva e localização privilegiada. Agende sua visita."
        />
        <meta
          name="keywords"
          content="apartamentos vila sônia, imóveis são paulo, apartamento 2 quartos, alto padrão, varanda gourmet, piscina"
        />
        <link rel="canonical" href="https://vilasonia.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vila Sônia Residence | Apartamentos de Alto Padrão" />
        <meta
          property="og:description"
          content="Apartamentos de 2 quartos em Vila Sônia, São Paulo. Alto padrão com infraestrutura completa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vila Sônia Residence",
            description: "Apartamentos de alto padrão em Vila Sônia, São Paulo",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Professor Francisco Morato, 1500",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            telephone: "+55-11-99999-9999",
            email: "contato@vilasonia.com.br",
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Gallery />
        <Video />
        <Features />
        <FloorPlans />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;

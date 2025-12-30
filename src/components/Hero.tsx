import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Gallery/fachada.gif"; 

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6 rounded-full border border-gold/40 px-5 py-2 text-sm text-[#8dc63f] font-bold tracking-wider text-sm uppercase"
        >
          Lançamento Exclusivo em Vila Sônia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6"
        >
          Viva o Melhor com o Lugar
          <span className="block text-gradient-gold mt-2">
            Mais Completo da Região
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-10"
        >
         Studios, 1 e 2 dormitórios ao lado do metrô Vila Sônia
        Lazer de alto padrão, diferenciais exclusivos e financiamento pela Caixa (Minha Casa MinhaVida)
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground
                         hover:bg-gold-dark shadow-gold
                         px-8 py-6 text-base"
            >
              Quero receber informações
            </Button>
          </motion.div>

        {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
className="inline-block mb-8 mt-4 border-green-400/50 px-5 py-2 text-lg text-green-400" 
>
  {[
    { title: "Localização estratégica", size: "Rua Grauçá, 200 – Vila Sônia - A apenas 500m do metrô Vila Sônia - 10 min do Shopping Butantã - 20 min do Estádio MorumBIS."},
    { size: ""},

    
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="text-lg md:text-xl font-semibold text-gold leading-tight">
        {item.title}
      </div>
      <div className="text-sm text-primary-foreground/70">
        {item.size}
      </div>
    </div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default Hero;

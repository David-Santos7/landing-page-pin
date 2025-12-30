import { motion } from "framer-motion";
import {
  Zap,
  Snowflake,
  Lock,
  Cpu,
  Thermometer,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Infraestrutura para gerador de energia",
    description:
      "Infraestrutura preparada para gerador, garantindo fornecimento de energia em áreas essenciais do condomínio.",
  },
  {
    icon: Snowflake,
    title: "Ponto para ar-condicionado",
    description:
      "Pontos estratégicos para instalação de ar-condicionado, proporcionando conforto térmico em todos os ambientes.",
  },
  {
    icon: Lock,
    title: "Fechadura digital",
    description:
      "Sistema de fechadura digital que oferece mais segurança, praticidade e controle de acesso no dia a dia.",
  },
  {
    icon: Cpu,
    title: "Apartamentos com automação Alexa",
    description:
      "Automação integrada com Alexa, permitindo controle inteligente de iluminação, dispositivos e rotinas.",
  },
  {
    icon: Thermometer,
    title: "Chuveiro a gás",
    description:
      "Sistema de aquecimento a gás que garante mais conforto, eficiência energética e pressão constante de água.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-[#cfeac3]"
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-accent font-bold tracking-wider text-sm uppercase">
            Diferenciais
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Tudo que Você Precisa em um Só Lugar
          </h2>

          <p className="text-muted-foreground font-bold leading-relaxed">
            Conheça os diferenciais que fazem do Vila Sônia Residence o lugar
            ideal para viver com conforto, tecnologia e segurança.
          </p>
        </motion.div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;

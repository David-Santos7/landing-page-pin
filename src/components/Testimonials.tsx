import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* ======================================================
   IMAGENS
   ====================================================== */
import imagemFundo from "@/assets/Gallery/fachada.gif"; 
import apartamento from "@/assets/apartamento.png";
import logoCaixa from "@/assets/caixa-logo.png";
import logoMcmv from "@/assets/minha-casa-minha-vida.png";

const logos = [
  { src: logoCaixa, alt: "Caixa Econômica Federal" },
  { src: logoMcmv, alt: "Minha Casa Minha Vida" },
];

const Testimonials = () => {
  return (
    <section 
      id="financiamento" 
      className="relative overflow-hidden min-h-[700px] flex items-center"
    >
      
      {/* ======================================================
          BACKGROUND (Imagem cobrindo tudo + Sombra Escura)
      ====================================================== */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={imagemFundo} 
          alt="Imagem de Fundo"
          className="
            w-full 
            h-full 
            object-cover 
            object-center
          "
        />
        
        {/* Overlay Escuro para destacar o texto branco */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      {/* ======================================================
          CONTEÚDO
      ====================================================== */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LADO ESQUERDO: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Texto Pequeno em Verde e NEGRITO */}
            <span className="text-[#8dc63f] font-bold tracking-wider text-sm uppercase">
              Financiamento Facilitado
            </span>

            {/* Título */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              Seu apartamento próprio com o{" "}
              <span className="text-[#8dc63f]">Minha Casa Minha Vida</span>
            </h2>

            {/* Descrição */}
            <p className="text-gray-200 font-bold text-lg mb-8 leading-relaxed">
              Realize o sonho da casa própria com condições especiais,
              parcelas acessíveis e subsídios do governo.
            </p>

            {/* Lista com Checks Estilizados */}
            <ul className="space-y-4">
              {[
                "Entrada facilitada",
                "Parcelas que cabem no seu bolso",
                "Uso do FGTS",
                "Financiamento pela Caixa Econômica Federal"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-[#8dc63f]/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-[#8dc63f]" />
                  </div>
                  <span className="text-white/90 font-bold">{item}</span>
                </li>
              ))}
            </ul>
           </motion.div>

          {/* LADO DIREITO: CARD BRANCO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-[2rem] p-8 lg:p-10 shadow-2xl"
          >
            {/* Foto da Família */}
            <div className="mb-8 overflow-hidden rounded-2xl shadow-sm h-[300px] lg:h-[340px]">
              <img
                src={apartamento}
                alt="Família"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Logos com Efeito de Zoom */}
            <div className="flex items-center justify-between gap-8 px-2">
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center w-full">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="
                      h-20 lg:h-20 
                      object-contain 
                      transition 
                      duration-300 
                      transform 
                      hover:scale-110 
                      cursor-pointer
                    "
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
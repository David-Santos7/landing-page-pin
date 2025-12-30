import {
  Home,
  Star,
  Image,
  LayoutGrid,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

import logoVilaSonia from "@/assets/Logo-Estacao-pin-Vila-Sonia.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center text-center">

          {/* BRAND + NAVEGAÇÃO */}
          <div className="lg:col-span-3 flex flex-col items-center">

            {/* LOGO + TÍTULO */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={logoVilaSonia}
                alt="Vila Sônia Residence"
                className="h-10 w-auto"
              />

              <h4 className="font-display font-semibold text-lg">
                         Informações
              </h4>
            </div>

            {/* QUICK LINKS */}
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6">
              {[
                { name: "Início", href: "#hero", icon: Home },
                { name: "Diferenciais", href: "#features", icon: Star },
                { name: "Galeria", href: "#gallery", icon: Image },
                { name: "Plantas", href: "#floor-plans", icon: LayoutGrid },
                { name: "Depoimentos", href: "#testimonials", icon: MessageSquare },
                { name: "Contato", href: "#contact", icon: PhoneCall },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* COLUNA DE EQUILÍBRIO */}
          <div />
        </div>

        {/* BOTTOM BAR — CENTRALIZADA */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex justify-center text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear}  © 2025 Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { Link as RouterLink, NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  href?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    // Se não houver 'to', usa o 'href'
    const targetPath = to ? (typeof to === "string" ? to : to.pathname) : href;
    const isAnchor = typeof targetPath === "string" && targetPath.startsWith("#");

    // Se for um link de âncora (#id)
    if (isAnchor) {
      return (
        <a
          ref={ref}
          href={targetPath as string}
          // ALTERAÇÃO AQUI: Adicionado "font-bold" para deixar o texto negrito
          className={cn("font-bold", className)} 
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {props.children}
        </a>
      );
    }

    // Caso contrário, usa o RouterNavLink para navegação entre páginas
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          // ALTERAÇÃO AQUI: Adicionado "font-bold" no início da lista de classes
          cn(
            "font-bold", 
            className, 
            isActive && activeClassName, 
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
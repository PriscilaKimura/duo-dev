import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <span className="font-display text-lg font-semibold text-foreground">
            dev<span className="text-gradient">duo</span>
          </span>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Soluções digitais com estrutura e estratégia para empresas que desejam crescer.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Navegação</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "Sobre Nós" },
              { to: "/servicos", label: "Serviços" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Contato</h4>
          <p className="text-sm text-muted-foreground">contato@devduo.com.br</p>
        </div>
      </div>
      <div className="glow-line mt-10 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} devduo. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;

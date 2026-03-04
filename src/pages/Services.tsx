import { Layout, Plug, Server, Database } from "lucide-react";
import LayoutWrapper from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Layout,
    title: "Criação de sistemas e sites personalizados",
    titleBreak: true,
    desc: "Desenvolvemos sistemas e sites feitos sob medida para facilitar a gestão e melhorar os processos do seu negócio.",
  },
  {
    icon: Plug,
    title: "Integração entre sistemas",
    desc: "Conectamos diferentes sistemas e plataformas para que as informações circulem automaticamente, reduzindo retrabalho e aumentando a eficiência.",
  },
  {
    icon: Server,
    title: "Estrutura e organização do sistema",
    desc: "Criamos a base tecnológica necessária para que o sistema funcione de forma estável, segura e preparado para evoluir junto com o projeto.",
  },
  {
    icon: Database,
    title: "Organização e gerenciamento de dados",
    desc: "Estruturamos e organizamos os dados para garantir segurança, agilidade e facilidade na gestão das informações.",
  },
];

const Services = () => (
  <LayoutWrapper>
    <section className="relative overflow-hidden">
      <div className="gradient-radial absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 py-32 md:py-40 relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Serviços</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            O que <span className="text-gradient">fazemos</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Soluções digitais estruturadas para facilitar a gestão e o crescimento do seu negócio.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="glow-line" />

    <section className="container mx-auto px-6 py-24 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((item, i) => (
          <AnimatedSection key={`service-${i}`} delay={i * 0.08} className="min-w-0">
            <div className="group relative h-full rounded-xl border border-border/60 bg-card/90 p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)] hover:-translate-y-0.5">
              <item.icon size={26} className="text-primary mb-5 shrink-0" strokeWidth={1.5} />
              <h3 className="font-display text-base font-semibold text-foreground mb-3 leading-snug">
                {item.titleBreak ? (
                  <>
                    Criação de sistemas e sites
                    <br />
                    personalizados
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-tight">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </LayoutWrapper>
);

export default Services;

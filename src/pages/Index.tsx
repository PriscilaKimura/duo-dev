import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Target, Layout, Plug, Server, Database } from "lucide-react";
import Layout from "@/components/Layout";
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

const differentials = [
  { icon: Shield, title: "Segurança & Estrutura", desc: "Soluções robustas pensadas para escalar com seu negócio." },
  { icon: Zap, title: "Agilidade & Prazos", desc: "Compromisso com entregas pontuais e comunicação transparente." },
  { icon: Target, title: "Foco em Resultado", desc: "Cada decisão técnica é orientada ao impacto real no negócio." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="gradient-radial absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 py-32 md:py-44 relative">
        <AnimatedSection className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
            Soluções digitais com{" "}
            <span className="text-gradient">estrutura e estratégia.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Sistemas, sites e organização digital para negócios, profissionais e projetos que buscam estrutura e eficiência.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Conheça nossos serviços <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/+5585997968284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:border-primary/60"
            >
              Agendar conversa
            </a>
          </div>
        </AnimatedSection>
      </div>
      <div className="glow-line" />
    </section>

    {/* About snippet */}
    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Sobre nós</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
          Duas desenvolvedoras. Uma missão.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Unimos visão estratégica e execução técnica para transformar desafios empresariais em sistemas organizados, funcionais e escaláveis.
        </p>
        <Link to="/sobre" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Saiba mais <ArrowRight size={14} />
        </Link>
      </AnimatedSection>
    </section>

    <div className="glow-line" />

    {/* Services highlight */}
    <section className="container mx-auto px-6 py-24 w-full">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Serviços</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">O que fazemos</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((s, i) => (
          <AnimatedSection key={`service-${i}`} delay={i * 0.08} className="min-w-0">
            <div className="group relative h-full rounded-xl border border-border/60 bg-card/90 p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)] hover:-translate-y-0.5">
              <s.icon size={26} className="text-primary mb-5 shrink-0" strokeWidth={1.5} />
              <h3 className="font-display text-base font-semibold text-foreground mb-3 leading-snug">
                {s.titleBreak ? (
                  <>
                    Criação de sistemas e sites
                    <br />
                    personalizados
                  </>
                ) : (
                  s.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-tight">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Differentials */}
    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Diferenciais</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">Por que trabalhar conosco</h2>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {differentials.map((d, i) => (
          <AnimatedSection key={d.title} delay={i * 0.1}>
            <div className="flex gap-4 p-6 rounded-xl border border-border/30 bg-card">
              <d.icon size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <div className="glow-line" />

    {/* CTA */}
    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
          Pronta para estruturar seu crescimento digital?
        </h2>
        <p className="mt-4 text-muted-foreground">Entre em contato e vamos conversar sobre seu projeto.</p>
        <a
          href="https://wa.me/+5585997968284"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Fale conosco <ArrowRight size={16} />
        </a>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Index;

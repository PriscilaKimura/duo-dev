import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Target, Code, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Code, title: "Desenvolvimento", desc: "Sistemas web, APIs e integrações sob medida para sua operação." },
  { icon: BarChart3, title: "Organização & Processos", desc: "Mapeamento, otimização e automação de fluxos de trabalho." },
  { icon: Target, title: "Estratégia Digital", desc: "Planejamento técnico de presença online e melhorias digitais." },
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
            Desenvolvimento de sistemas, organização de processos e planejamento digital para empresas que desejam crescer com base sólida.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Conheça nossos serviços <ArrowRight size={16} />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Agendar conversa
            </Link>
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
    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Serviços</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">O que fazemos</h2>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group rounded-xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-hover">
              <s.icon size={28} className="text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Fale conosco <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Index;

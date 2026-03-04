import { Code, Database, Plug, Server, GitBranch, Workflow, Cog, Globe, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  {
    title: "Desenvolvimento",
    description: "Construímos a base técnica do seu negócio digital.",
    items: [
      { icon: Code, name: "Sistemas web personalizados", desc: "Aplicações sob medida que atendem às necessidades específicas da sua operação." },
      { icon: Plug, name: "APIs & Integrações", desc: "Conexão entre sistemas e serviços para uma operação fluida e automatizada." },
      { icon: Server, name: "Backend estruturado", desc: "Arquitetura robusta e escalável para suportar o crescimento do negócio." },
      { icon: Database, name: "Banco de dados", desc: "Modelagem e gestão de dados com segurança e performance." },
    ],
  },
  {
    title: "Organização & Processos",
    description: "Organizamos o que existe e otimizamos o que pode melhorar.",
    items: [
      { icon: GitBranch, name: "Mapeamento de fluxos", desc: "Análise detalhada dos processos atuais para identificar pontos de melhoria." },
      { icon: Workflow, name: "Otimização de processos", desc: "Reestruturação de workflows para maior eficiência operacional." },
      { icon: Cog, name: "Automação de tarefas", desc: "Eliminação de tarefas repetitivas com soluções automatizadas inteligentes." },
    ],
  },
  {
    title: "Estratégia Digital",
    description: "Planejamos o caminho digital do seu negócio.",
    items: [
      { icon: Globe, name: "Estruturação de presença online", desc: "Planejamento técnico para uma presença digital sólida e profissional." },
      { icon: TrendingUp, name: "Planejamento de melhorias digitais", desc: "Roadmap estratégico de evolução tecnológica para seu negócio." },
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="gradient-radial absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 py-32 md:py-40 relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Serviços</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Soluções completas para seu <span className="text-gradient">negócio digital</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Do desenvolvimento à estratégia, cobrimos todas as etapas da transformação digital.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="glow-line" />

    {categories.map((cat, ci) => (
      <section key={cat.title} className="container mx-auto px-6 py-24">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-2">{`0${ci + 1}`}</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{cat.title}</h2>
          <p className="mt-2 text-muted-foreground">{cat.description}</p>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {cat.items.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div className="group rounded-xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-hover h-full">
                <item.icon size={24} className="text-primary mb-4" />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {ci < categories.length - 1 && <div className="glow-line mt-24" />}
      </section>
    ))}
  </Layout>
);

export default Services;

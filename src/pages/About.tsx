import { CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import priscilaPhoto from "@/assets/priscila-kimura.jpg";
import edivaniaPhoto from "@/assets/edivania-duarte.jpg";

const values = [
  "Organização",
  "Clareza",
  "Compromisso com prazos",
  "Foco em solução prática",
  "Pensamento estratégico",
];

const team = [
  {
    name: "Edivania Duarte",
    role: "Desenvolvedora & Estrategista Digital",
    image: edivaniaPhoto,
  },
  {
    name: "Priscila Kimura",
    role: "Desenvolvedora & Organização Digital",
    image: priscilaPhoto,
  },
];

const About = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="gradient-radial absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 py-32 md:py-40 relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Sobre nós</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Tecnologia com <span className="text-gradient">propósito</span>
          </h1>
        </AnimatedSection>
      </div>
    </section>

    <div className="glow-line" />

    {/* Team photos */}
    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Nosso time</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">Quem está por trás</h2>
      </AnimatedSection>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={i * 0.15}>
            <div className="group relative rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)] w-64">
              <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-xl border border-border/30 bg-surface transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <div className="glow-line" />

    <section className="container mx-auto px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2 items-start">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Quem somos</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Somos duas desenvolvedoras com foco em soluções digitais eficientes e bem estruturadas.
            </p>
            <p>
              Unimos visão estratégica e execução técnica para transformar desafios empresariais em sistemas organizados, funcionais e escaláveis.
            </p>
            <p>
              Acreditamos que tecnologia precisa ser clara, organizada e alinhada ao crescimento do negócio.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Nossos valores</h2>
          <div className="space-y-4">
            {values.map((v, i) => (
              <AnimatedSection key={v} delay={0.2 + i * 0.08} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-foreground font-medium">{v}</span>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="glow-line" />

    <section className="container mx-auto px-6 py-24">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">Nossa abordagem</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Antes de desenvolver, analisamos.<br />
            Antes de implementar, organizamos.
          </p>
          <p>
            Acreditamos que tecnologia precisa ter propósito e estrutura.<br />
            Por isso, cada solução nasce de um entendimento claro da necessidade e é construída com método.
          </p>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;

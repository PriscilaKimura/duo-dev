import { CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  "Organização",
  "Clareza",
  "Compromisso com prazos",
  "Foco em solução prática",
  "Pensamento estratégico",
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
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Cada projeto começa com uma compreensão profunda do negócio. A partir disso, desenhamos a solução técnica ideal — sem excessos, sem complexidade desnecessária. Apenas o que importa, feito com excelência.
        </p>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;

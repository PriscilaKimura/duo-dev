import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="gradient-radial absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6 py-32 md:py-40 relative">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Contato</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Vamos estruturar o crescimento digital da{" "}
              <span className="text-gradient">sua empresa?</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="glow-line" />

      <section className="container mx-auto px-6 py-24">
        <AnimatedSection className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
              { name: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
              { name: "company", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Conte-nos sobre seu projeto..."
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"} <Send size={16} />
            </button>
          </form>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Contact;

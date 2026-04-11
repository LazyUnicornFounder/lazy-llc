import { Building2, Globe, CreditCard, TrendingUp, Check, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WaitlistForm from "@/components/WaitlistForm";

const scrollToWaitlist = () => {
  document.getElementById("waitlist-hero")?.scrollIntoView({ behavior: "smooth" });
};

const services = [
  {
    icon: Building2,
    title: "Business Registration",
    desc: "LLC registration with the Ministry of Industry & Trade. We handle the paperwork, legal requirements, and government filings.",
  },
  {
    icon: Globe,
    title: "Website & Online Presence",
    desc: "A professional website for your business — designed, built, and launched. Custom domain, mobile-ready, Arabic + English.",
  },
  {
    icon: CreditCard,
    title: "Accept Payments Online",
    desc: "Connect online payments directly to your Jordanian bank account. Credit cards, debit cards, and local payment methods.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    desc: "Google Business profile, social media setup, SEO basics, and a marketing starter kit to get your first customers.",
  },
];

const steps = [
  { num: "1", title: "Tell us about your business", desc: "Answer a few questions. We'll figure out the right setup." },
  { num: "2", title: "We do the heavy lifting", desc: "Registration, website, payments — handled." },
  { num: "3", title: "You're open for business", desc: "Start selling online with money going straight to your bank." },
];

const audiences = [
  "First-time entrepreneurs in Jordan who want to go legit",
  "Freelancers ready to register and invoice properly",
  "Small businesses that need an online presence yesterday",
  "Diaspora Jordanians starting a business back home remotely",
];

const pricing = [
  {
    name: "Starter",
    price: "250 JOD",
    best: "Best for freelancers & solo founders",
    features: ["LLC registration", "Basic one-page website", "Google Business setup"],
  },
  {
    name: "Business",
    price: "500 JOD",
    best: "Best for small businesses",
    features: ["LLC registration", "Full multi-page website", "Payment gateway connected to your bank", "Social media setup"],
  },
  {
    name: "Premium",
    price: "1,000 JOD",
    best: "Best for serious growth",
    features: ["Everything in Business", "Arabic + English website", "SEO setup", "Marketing starter kit", "3 months support"],
  },
];

const faqs = [
  {
    q: "How long does LLC registration take in Jordan?",
    a: "Typically 1–2 weeks. We handle all the paperwork with the Ministry of Industry & Trade, Companies Control Department, and municipality.",
  },
  {
    q: "Which payment providers work with Jordanian banks?",
    a: "We set up providers that connect directly to your Jordanian bank account — no need for a foreign account.",
  },
  {
    q: "Do I need to be in Jordan?",
    a: "No. We can handle everything remotely. Perfect for Jordanians living abroad who want to start a business back home.",
  },
  {
    q: "Can I get an Arabic website?",
    a: "Yes. Our Business and Premium plans include full Arabic + English bilingual websites.",
  },
  {
    q: "What do I need to get started?",
    a: "Just your national ID (or passport for non-Jordanians), your business idea, and 15 minutes to fill out our form.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">LazyLLC</span>
          <div className="flex items-center gap-5">
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="https://www.linkedin.com/in/saadsahawneh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://x.com/SoloUnicorn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <button
              onClick={scrollToWaitlist}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight text-foreground">
            Register your business in Jordan. Launch online. Get paid.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            We handle everything — company registration, website, payments connected to your Jordanian bank account. You focus on your business.
          </p>
          <WaitlistForm id="waitlist-hero" />
          <p className="text-sm text-muted-foreground">🇯🇴 Built for Jordan. Coming soon.</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-12 text-foreground">What we do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-background rounded-xl p-8 border border-border">
                <s.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-medium mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-12 text-foreground">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-medium text-primary">{s.num}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-12 text-foreground">Who is this for?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-background rounded-xl p-6 border border-border">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-dark-DEFAULT text-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-12">Simple pricing. No surprises.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.name} className="bg-[#1e1e1c] rounded-xl p-8 border border-[#2a2a28] flex flex-col">
                <h3 className="font-serif text-xl font-medium mb-1">{p.name}</h3>
                <p className="text-2xl font-serif font-medium text-primary mb-1">Starting at {p.price}</p>
                <p className="text-sm text-[#87867f] mb-6">{p.best}</p>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[#c4c3be]">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-[#87867f] mt-8 text-sm">
            Final pricing depends on your specific needs. Join the waitlist for early-bird rates.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-12 text-foreground">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-serif text-3xl font-medium text-foreground">Be the first to launch with LazyLLC</h2>
          <p className="text-muted-foreground leading-relaxed">
            Join the waitlist. Early members get priority access and discounted rates.
          </p>
          <WaitlistForm />
          <p className="text-sm text-muted-foreground">We'll email you when we launch. No spam.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-medium text-foreground">About LazyLLC</h2>
          <p className="text-muted-foreground leading-relaxed">
            LazyLLC is part of{" "}
            <a href="https://lazyfounderventures.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
              Lazy Founder Ventures
            </a>
            , building tools that make it effortless to start and grow a business in Jordan.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-lg font-medium text-foreground">LazyLLC</span>
            <span className="text-sm text-muted-foreground">Amman, Jordan</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-xs text-muted-foreground">
              Part of{" "}
              <a href="https://lazyfounderventures.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors">
                Lazy Founder Ventures
              </a>
            </span>
            <span className="text-xs text-muted-foreground">© 2026 LazyLLC. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

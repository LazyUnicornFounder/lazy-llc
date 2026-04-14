import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const { error } = await supabase.from("waitlist").insert({ email });
      if (error && error.code === "23505") {
        setStatus("success"); // already signed up
      } else if (error) {
        throw error;
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-border/20 py-12 px-6 lg:px-20">
      <div className="max-w-md">
        <h3 className="text-foreground text-sm font-bold uppercase tracking-wider mb-2">Stay in the loop</h3>
        <p className="text-muted-foreground text-sm mb-4">Get updates on new features and launches.</p>
        {status === "success" ? (
          <p className="text-green-500 text-sm font-semibold">You're in!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && <p className="text-red-500 text-xs mt-2">Something went wrong. Try again.</p>}
      </div>
    </section>
  );
};

export default NewsletterSignup;

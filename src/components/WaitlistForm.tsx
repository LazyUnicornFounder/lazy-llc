import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

interface WaitlistFormProps {
  id?: string;
}

const WaitlistForm = ({ id }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const { count: c } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });
      if (c !== null) setCount(c);
    };
    fetchCount();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setErrorMsg(result.error.errors[0].message);
      return;
    }

    setStatus("loading");

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: result.data });

    if (error) {
      if (error.code === "23505") {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div id={id} className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 animate-check-in">
          <Check className="w-7 h-7 text-primary" />
        </div>
        <p className="text-lg font-serif font-medium text-foreground">You're in!</p>
        <p className="text-muted-foreground">We'll email you when we launch.</p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div id={id} className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
          <Check className="w-7 h-7 text-primary" />
        </div>
        <p className="text-lg font-serif font-medium text-foreground">You're already on the list!</p>
        <p className="text-muted-foreground">We'll email you when we launch.</p>
      </div>
    );
  }

  return (
    <div id={id} className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 rounded-lg bg-card border-border text-foreground placeholder:text-muted-foreground"
          required
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 px-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/85 font-medium"
        >
          {status === "loading" ? "Joining..." : "Join the Waitlist"}
        </Button>
      </form>
      {errorMsg && <p className="text-sm text-destructive">{errorMsg}</p>}
    </div>
  );
};

export default WaitlistForm;

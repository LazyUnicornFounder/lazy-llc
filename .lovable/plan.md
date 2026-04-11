

## LazyLLC — Coming Soon Landing Page

A single-page marketing site with warm, premium design and a Supabase-powered email waitlist.

### Design System Setup
- Update CSS variables and Tailwind config with the LazyLLC palette: cream background (#f5f4ed), terracotta brand (#c96442), dark section (#141413), warm text tones
- Georgia serif for headings (font-medium, never bold), Inter sans for body
- Border radius: 8px standard, 16px cards, generous spacing throughout

### Page Sections (single Index page)
1. **Nav** — "LazyLLC" serif logo + "Join Waitlist" scroll button
2. **Hero** — Headline, subhead, inline email+button waitlist form, 🇯🇴 tagline
3. **What We Do** — 2×2 card grid (Registration, Website, Payments, Growth) with Lucide icons
4. **How It Works** — 3 horizontal steps with numbering
5. **Who Is This For** — 2×2 grid with checkmark text cards
6. **Pricing Preview** — Dark section, 3 tier cards (Starter 250 JOD, Business 500 JOD, Premium 1,000 JOD)
7. **FAQ** — Accordion with 5 Q&As
8. **Final CTA** — Repeat waitlist form with social proof counter
9. **Footer** — Logo, Amman, social links, "Part of Lazy Sands", copyright

### Waitlist Backend (Supabase)
- Create `waitlist` table (id, email unique, created_at) with RLS policy allowing anonymous inserts
- Email validation, duplicate detection ("You're already on the list!"), success state with confetti animation
- Live waitlist count displayed as social proof ("Join X others on the waitlist")

### Components
- `WaitlistForm` — reusable email form with validation, Supabase insert, duplicate handling, success animation, and live counter
- Section components for each page block
- Fully responsive, mobile-first layout


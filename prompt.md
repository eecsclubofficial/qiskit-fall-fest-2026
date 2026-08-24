# Prompt for Antigravity CLI — IBM Qiskit Fall Fest 2026 (IISER Bhopal) Website

Copy everything below into Antigravity as the task/spec.

---

## 1. Project brief

Build a professional, production-quality marketing/registration website for **IBM Qiskit Fall Fest 2026**, hosted at **IISER Bhopal**, co-organized by the **EECS Club** and the **Physics Club**. The event takes place in **October 2026 (exact date TBD — use a placeholder)**.

This is a real event website, not a demo. Treat it like a client deliverable for a university tech fest with an established brand (Qiskit / IBM Quantum), not a generic AI-generated landing page. Every design decision should be intentional and defensible.

Use the installed skills for every step of this build — don't skip them:
- **UI/UX Pro Max**
- **Design Taste**
- **Design Motion Principles**
- **Vercel Web Design Guidelines**

Apply them to layout decisions, spacing/type scale, motion choices, and accessibility/performance, not just as a final polish pass.

## 2. Reference sites — what to take from each

Primary structural reference (**follow this site's sitemap and content architecture closely**):
- https://fallfest.qiskit.london/ — use this for section order and content model: Hero → "Learn / Build / Collaborate" value props → Programme/Schedule table → "Open to curious minds" feature strip → Registration form → FAQ → Footer (Privacy / Accessibility / Code of Conduct / Contact). Match this information architecture, not the exact visual skin.

Secondary references (look for layout/interaction ideas, patterns, and gaps — do not copy any of them wholesale):
- https://qiskit.cs.uwindsor.ca/
- https://qiskit-fall-fest-bw.com/
- https://ibm-qiskit-fall-fest2025.vercel.app/
- https://ibm-qff-25.netlify.app/

Cross-reference all of these to identify a common, credible "Qiskit Fall Fest" visual language (dark/deep-space quantum aesthetic, confident large type, restrained iconography) and build something that fits that family without looking like a template clone of any single one.

## 3. Brand system — pull from the attached Qiskit Fall Fest 2026 PPT template

The attached PowerPoint (`Qiskit_Fall-Fest_2026_Template.pptx`) is the actual brand kit for this event. Extract and reuse its design tokens directly — do not invent a new palette or type system:

- **Color:** IBM Carbon spot-color system. Default text/spot color is **Blue 60**; approved accent swaps are **Purple 60** and **Magenta 50** (used in the sample slides to feel more "on brand"). Use these three as the core accent palette against a dark/near-black or deep-navy background (consistent with the quantum/space visual language of the reference sites). Avoid rainbow gradients — if a gradient is used at all, keep it to a single subtle two-stop blend within this palette (e.g. Blue 60 → Purple 60), used sparingly (hero background or one section max), never as a default treatment on every card/button.
Strictly follow these colors given colors-
COLOR SCHEME - 
#343A3F + #F4F4F4 → foundation
#A46DFF + #FF7EB6 → Qiskit/Fall Fest identity
#4589FF → technology/quantum accent
#EE5396 → CTA/highlight
#BE95FF + #DAE5FC → decorative/background colors


all the usable color -
#F4F4F4
#FFFFFF
#343A3F
#000000
#FF7EB6
#EE5396
#A46DFF
#BE95FF
#4589FF
#DAE5FC
#BDCDEF
#E0E0E0
#4D5257

- **Type scale (from the deck, reuse as your web type scale):**
  - Display: 172pt equivalent — big, simple, minimal-word statements (hero headline treatment)
  - H1: 86pt / 64pt — 1–3 lines max, sentence case
  - H2/section: 64pt
  - Body/stat: 44pt / 36pt / 28pt — 3–5 lines max, sentence case
  - Eyebrow labels: 24/28pt
- Headlines are **sentence case**, not title case — keep this convention on the website.
- **Stat callouts** use a large number/percentage with a superscript citation marker; the source is listed in small print at the section bottom (pattern: "claim¹" + "Source: 1. ..." footer line). Reuse this pattern for any credibility stats (e.g. past attendance, number of universities, workshops) once real numbers are available — leave as placeholders otherwise.
- **Section divider** slides are large, short (max 3 lines), high-contrast statements — mirror this as full-bleed "chapter break" sections between major page sections (e.g. before Schedule, before Registration).
- **Digital stickers / Fall Fest badge:** the deck includes a 2026 Fall Fest badge mark and a set of small digital stickers meant to be sprinkled onto content sparingly, not as decoration on every element. Use the badge as a small trust/branding mark (e.g. near the footer or a corner of the hero), and use stickers only where they add meaning (e.g. next to a workshop card), never more than 1–2 per viewport.

## 4. Explicit "no AI slop" constraints

- **No more than one soft gradient on the whole page**, and never a purple-pink-blue rainbow mesh gradient. Solid dark backgrounds with precise accent color usage are preferred.
- No glassmorphism-everywhere, no floating 3D blob shapes, no generic "abstract particle network" hero unless it's restrained, low-opacity, and clearly quantum-circuit/qubit inspired (not stock).
- No mismatched icon sets — pick one icon language (line icons, consistent stroke width) and stick to it.
- No centered-everything layout. Use a real grid with asymmetry where it earns its keep (per Design Taste / UI/UX Pro Max skills).
- Typography does the heavy lifting — big, confident, sentence-case headlines per the deck's own scale, not decorative fonts.
- Buttons/CTAs: one primary style, one secondary/ghost style. No more than 2 button treatments site-wide.
- Every animation must be purposeful (see §6) — nothing spins, bounces, or auto-plays just to look "alive."

## 5. Site map (mirrors fallfest.qiskit.london's IA, adapted for this event)

1. **Header / Nav** — Qiskit + IBM Quantum + IISER Bhopal + EECS Club + Physics Club logos (from `/assets`); sticky nav: About, Schedule, Organizers, Venue, FAQ, Register.
2. **Hero** — "IBM Qiskit Fall Fest 2026" + one-line tagline (placeholder copy, e.g. "Quantum computing, built together at IISER Bhopal."), event window "October 2026 · Date to be announced", primary CTA "Register interest", secondary CTA "Explore the schedule". Optional subtle animated background (see §6).
3. **Learn / Build / Collaborate** — three value-prop cards, same pattern as the reference site (01/02/03 numbered).
4. **About the Fest** — short paragraph on what Qiskit Fall Fest is globally + this chapter's context (IISER Bhopal, EECS Club × Physics Club collaboration). Placeholder for a group photo / campus photo from `/assets`.
5. **Programme / Schedule** — table or timeline component (Date · Session · Format · Level · Location · Status) — populate with **[TBD]** placeholder rows since the schedule isn't finalized; make the component ready to accept real rows later.
6. **Organizers** — EECS Club and Physics Club as co-organizers, with logos and one-line descriptions (placeholder copy), plus IBM Quantum / Qiskit as the presenting partner.
7. **Venue** — IISER Bhopal, with a placeholder for an embedded map / address / directions and a campus photo.
8. **Open to everyone** — feature strip: Beginner friendly / In-person at IISER Bhopal / Free to attend (mirror the reference site's 3-column pattern, adapt copy).
9. **Registration** — form: Full name, Email, Institution/Organisation, Role (Student / Recent graduate / PhD researcher / Faculty or staff / Industry professional / Other), Accessibility/dietary requirements (optional), consent checkbox linking to a placeholder privacy notice. Wire the form to a placeholder submit handler (console log / TODO comment for real backend — e.g. Google Form, Formspree, or custom API — clearly marked as **[INTEGRATION NEEDED]**).
10. **FAQ** — accordion; seed with the same four questions as the reference site, adapted (who can take part, experience needed, cost, when dates confirm) plus one IISER Bhopal-specific placeholder (e.g. accommodation/travel info — mark **[TBD]**).
11. **Footer** — logos repeated, tagline, links: Privacy, Accessibility, Code of Conduct, Contact (placeholder mailto), social links placeholders (Instagram/LinkedIn/X), "Made by EECS Club × Physics Club, IISER Bhopal" credit line.

## 6. Motion (apply Design Motion Principles skill)

- Scroll-triggered reveal on section entry: small, fast (150–250ms), opacity + 8–12px translate — nothing showier.
- Hero: one restrained ambient animation only (e.g. a slow-drifting low-opacity qubit/circuit-line SVG, or a gentle particle field at very low density) — must be able to pause/reduce under `prefers-reduced-motion`.
- Nav: smooth scroll to anchor sections; subtle underline/color transition on hover, not a full button morph.
- Cards (value props, organizer cards, FAQ items): subtle lift + border/accent-color shift on hover, 150ms ease.
- Stat callouts: number can count up once on scroll into view (one-time, not looping).
- Respect `prefers-reduced-motion: reduce` everywhere — this is a hard requirement, not optional polish.

## 7. Technical requirements

- Stack: your choice, but prefer **Next.js + TypeScript + Tailwind CSS** (or a comparably modern static-friendly setup) so it can be deployed on Vercel/Netlify easily.
- Fully responsive: mobile, tablet, desktop breakpoints; nav collapses to a mobile menu.
- Accessibility (per Vercel Web Design Guidelines skill): semantic HTML, proper heading hierarchy, focus states, sufficient color contrast against the dark background, form labels/ARIA, skip-to-content link (as in the reference site).
- Performance: optimize/lazy-load images, avoid layout shift, keep animation GPU-friendly (transform/opacity only).
- Pull all logos/badges/stickers/photos from the local `/assets` folder — do not fabricate or hotlink external images. If an asset referenced in this brief doesn't exist yet in `/assets`, leave a clearly labeled placeholder component instead of inventing artwork.

## 8. Placeholders to leave explicitly marked (do not invent real data)

- Exact event date in October 2026
- Full schedule/session list, speaker names and bios
- Registration form backend/integration
- Venue map embed and exact directions/address details
- Sponsor/partner logos beyond Qiskit, IBM Quantum, IISER Bhopal, EECS Club, Physics Club
- Contact email and social media handles
- Any attendance/impact stats used in stat-callout components
- Privacy notice / Code of Conduct page content (link the footer to stub pages)

Mark every placeholder in code with a `// TODO:` or `[TBD]` label so it's easy to find and fill in later.

---

the logos, svg and images are stored in assets folder, leave placeholder for logo and any other image if required, example club logo or institute logo


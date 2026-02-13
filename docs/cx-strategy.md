# Medical Stop Loss — CX Strategy & User Journeys

*Prepared by Sage 🎯 | February 2026*

---

## 1. CX Vision

**Design principle:** Every visitor should know within 5 seconds what we do, who we serve, and what to do next. The site should feel like talking to the smartest, calmest person in stop loss — not reading an insurance brochure.

**Bel's design direction:** Simple. Plain. White background. Clean. No fancy effects.

**CX translation:** Content-forward, whitespace-heavy, clear typography hierarchy. Let the words do the work. Every element earns its place or gets cut.

---

## 2. Audience Personas & Intent Mapping

### Persona A: The CFO / HR Leader (Employer)
- **Mindset:** "I'm self-funded (or thinking about it) and I need to understand my risk."
- **Knowledge level:** Low to moderate on stop loss specifics
- **Primary intent:** Education → confidence → quote request
- **Trust triggers:** Clear explanations, real numbers, no jargon, fast response promise
- **Anxiety:** "Will I get burned by a $2M claim?" / "Is this carrier legit?"

### Persona B: The Benefits Broker
- **Mindset:** "I need a competitive market for my client, fast."
- **Knowledge level:** High — they know stop loss. Don't over-explain.
- **Primary intent:** Quick quote → evaluate competitiveness → place business
- **Trust triggers:** Speed, claims reliability, broker portal, responsive underwriter
- **Anxiety:** "Will this carrier embarrass me by denying my client's claim?"

### Persona C: The TPA Operations Leader
- **Mindset:** "I need a carrier that integrates and doesn't slow me down."
- **Knowledge level:** High — operational focus, not sales
- **Primary intent:** Evaluate integration → partnership conversation
- **Trust triggers:** API-first language, reimbursement speed stats, dedicated support
- **Anxiety:** "Will my employers blame me when the carrier is slow?"

---

## 3. User Journeys

### Journey A: Employer — "I Need to Understand and Protect"

```
Google search / broker referral / LinkedIn ad
    ↓
HOMEPAGE (5 sec: "Oh, this is stop loss for self-funded employers")
    ↓
Clicks "I'm a Self-Funded Employer" path
    ↓
FOR EMPLOYERS PAGE
    ├── Reads "How It Works" → gets clarity on specific vs. aggregate
    ├── Scans benefits grid → sees budget certainty, fast claims, transparency
    ├── Scrolls to risk stats → feels urgency ($2M gene therapy, GLP-1 costs)
    └── Sees CTA: "Get a Quote — 5 minutes, pricing in 48 hours"
            ↓
QUOTE PAGE (simple form, minimal fields)
    ↓
Confirmation: "We'll be in touch within 48 hours" + "Download: Self-Funding 101"
    ↓
Email nurture sequence (education → case studies → renewal check-in)
```

**Key CX moments:**
1. **Homepage → Employer path** — Must be instant recognition. "This is for me."
2. **How It Works section** — This is where trust is built or lost. If it's confusing, they bounce.
3. **Quote form** — Must feel lightweight. Too many fields = drop-off. Ask only what underwriting needs for an indicative quote.

**Conversion goal:** Quote request
**Secondary goal:** Guide download (captures email for nurture)

---

### Journey B: Broker — "I Need a Quote, Fast"

```
Direct URL / Google "stop loss quotes" / industry referral
    ↓
HOMEPAGE (already knows what stop loss is — scanning for credibility signals)
    ↓
Clicks "I'm a Benefits Broker" path
    ↓
FOR BROKERS PAGE
    ├── Scans value props → "Quotes in hours" ← this is what they care about
    ├── Sees broker toolkit → portal, templates, dashboards
    ├── Reads testimonial → "This broker sounds like me"
    └── Sees dual CTA: "Become a Partner" / "Get a Quick Quote"
            ↓
    Option A: QUOTE PAGE (fast path — census upload + basics)
    Option B: BROKER APPLICATION (deeper partnership)
    ↓
Fast follow-up: "Your quote is being prepared" / "Welcome to the partner program"
```

**Key CX moments:**
1. **Homepage → Broker path** — Brokers are impatient. The path must be obvious in the nav AND the audience section.
2. **Speed messaging** — "Quotes in hours" should be the first thing they see. It's the #1 differentiator.
3. **Portal/tools preview** — Show a screenshot or feature list. Brokers want to know what they're getting before they sign up.
4. **Quote form** — Census upload should be prominent. Brokers have the data ready; don't make them fill out 15 fields.

**Conversion goal:** Quote request or partner application
**Secondary goal:** Download broker toolkit / proposal template

---

### Journey C: TPA — "Can This Carrier Integrate with Us?"

```
Industry event follow-up / peer referral / direct outreach
    ↓
HOMEPAGE → Clicks "I'm a TPA" path
    ↓
FOR TPAs PAGE
    ├── Reads integration section → API, SFTP, automated notifications
    ├── Sees reimbursement speed stats → "fastest in the market"
    ├── Values "your clients, your relationship" positioning
    └── CTA: "Schedule a Demo" / "Explore TPA Partnership"
            ↓
CONTACT/DEMO FORM (TPA-specific)
    ↓
Follow-up: Integration discovery call scheduled
```

**Key CX moments:**
1. **Integration section** — This is the make-or-break. TPAs evaluate partners on operational fit first, pricing second.
2. **"Your relationship" messaging** — TPAs are protective of their employer relationships. We need to reassure we're behind-the-scenes.
3. **Demo CTA** — TPAs want to *see* the integration, not read about it. "Schedule a Demo" is stronger than "Contact Us."

**Conversion goal:** Demo/partnership inquiry
**Secondary goal:** Integration documentation download

---

## 4. Site Flow & Information Architecture

### Recommended Site Map

```
Homepage
├── For Employers
│   └── [CTA → Get a Quote]
├── For Brokers
│   └── [CTA → Get a Quote / Become a Partner]
├── For TPAs
│   └── [CTA → Schedule a Demo / Partner Inquiry]
├── About
│   ├── Our Story
│   ├── Team
│   └── Values
├── Resources
│   ├── Guides & Whitepapers
│   ├── Blog
│   ├── Webinars
│   └── Tools & Calculators
├── Get a Quote ← (always in nav as primary button)
└── Contact
```

### Navigation UX Rules

1. **"Get a Quote" is always visible** — primary button in nav, sticky on mobile
2. **Audience paths in main nav** — For Employers | For Brokers | For TPAs (not buried in dropdowns)
3. **No mega-menus** — keep it flat and simple per Bel's direction
4. **Mobile:** Hamburger menu with audience paths first, quote button sticky at bottom

---

## 5. Page-Level CX Recommendations

### Homepage

| Element | CX Recommendation |
|---------|-------------------|
| **Hero** | One headline, one subhead, two CTAs. Nothing else above the fold except nav. White background, big clean typography. |
| **Trust bar** | Only include if we have real numbers. Fake/aspirational stats hurt credibility. If no real data yet, skip this section entirely for launch. |
| **Value props** | 3 columns max. Icon + headline + one sentence. Don't overwrite. |
| **Audience paths** | Card-style with clear labels. "I'm a..." framing works well — it's self-selecting and reduces cognitive load. |
| **Social proof** | Real testimonials only. If unavailable at launch, replace with a "trusted by" logo bar (broker firms, TPAs) or skip. |
| **Stats section** | Same rule as trust bar — real numbers only. |

### For Employers

| Element | CX Recommendation |
|---------|-------------------|
| **Problem section** | Lead with specific dollar amounts — $2M gene therapy, $500K cancer treatment. Concrete > abstract. This creates urgency without being fear-mongering. |
| **How It Works** | This is the most important section on the site for employers. Use a clear visual flow (Step 1 → 2 → 3). Consider a simple diagram Pixel can build. Keep explanations to 2-3 sentences each. |
| **Benefits grid** | 6 items max. Don't bury "fast claims payment" — for employers, cash flow impact of slow reimbursement is a top pain point. Move it to position 1 or 2. |
| **CTA** | "Get a Quote — takes 5 minutes" is stronger than "Request a Quote." Lower the perceived effort. |

### For Brokers

| Element | CX Recommendation |
|---------|-------------------|
| **Hero** | "Your Unfair Advantage" — strong headline. Keep it. Brokers respond to competitive positioning. |
| **Speed first** | Reorder value props: Speed → Claims reliability → Competitive rates → Tools. Speed is the #1 differentiator brokers cited in research. |
| **Toolkit section** | Consider a visual preview (screenshot mockup) of the broker portal. Brokers want to see what they're getting. Even a placeholder "coming soon" preview builds anticipation. |
| **Dual CTAs** | Good instinct having both "Get a Quick Quote" and "Become a Partner." Quick quote is the low-friction entry; partner app is the commitment path. |

### For TPAs

| Element | CX Recommendation |
|---------|-------------------|
| **Integration section** | Make this visual. A simple diagram showing: TPA System ↔ API ↔ Our Platform. TPAs think in systems and workflows. |
| **"Your clients, your relationship"** | Emphasize this more. It should be a standalone callout, not buried in body copy. This is the #1 anxiety for TPAs evaluating a new carrier. |
| **Demo CTA** | Primary CTA should be "Schedule a Demo," not "Contact Us." Demos are tangible; "contact us" feels like a black hole. |

### Quote Page

| Element | CX Recommendation |
|---------|-------------------|
| **Form length** | MVP: 7 fields max for indicative quote. Company name, contact, email, role type, employee count, effective date, census upload (optional). Everything else can come later. |
| **Progress indicator** | Not needed for a single-page form this short. If the form grows, add one. |
| **Social proof on form page** | Add one stat or testimonial next to the form: "Average quote turnaround: 48 hours" or a broker quote about speed. Reduces form abandonment. |
| **Confirmation** | Don't just show "thanks." Offer: (1) expected timeline, (2) a resource download, (3) "add to calendar" for follow-up. Keep engagement alive. |
| **Mobile** | Form must be fully mobile-optimized. Brokers often forward quote requests from their phones. |

---

## 6. Conversion Optimization Framework

### Primary Conversions (by audience)

| Audience | Primary Conversion | Secondary Conversion |
|----------|-------------------|---------------------|
| Employers | Quote request | Guide/whitepaper download |
| Brokers | Quote request or partner application | Toolkit download |
| TPAs | Demo/partnership inquiry | Integration docs download |

### CTA Hierarchy (Global)

1. **Primary:** "Get a Quote" — appears in nav, hero sections, page bottoms, sticky mobile bar
2. **Secondary:** Audience-specific actions (partner app, demo request, resource downloads)
3. **Tertiary:** Newsletter signup, social follow, blog subscription

### Friction Reducers

| Tactic | Where |
|--------|-------|
| "Takes 5 minutes" on quote CTA | Quote page, all CTAs linking to it |
| "No obligation" language | Quote page subheading |
| "Pricing in 48 hours" promise | Quote page, For Brokers, For Employers |
| Minimal required fields | Quote form |
| Census upload optional (not required) | Quote form |
| Phone number visible | Quote page, footer, contact page |
| Live chat (Phase 2) | Global — bottom right |

### Trust Builders

| Element | Placement |
|---------|-----------|
| Real testimonials with name/title | Homepage, audience pages |
| Specific performance metrics (when real) | Homepage trust bar, stats section |
| Team photos and bios | About page |
| Partner logos (brokers, TPAs) | Homepage, audience pages |
| Security/compliance badges | Footer, quote page |
| "Published" content (blog, whitepapers) | Resources page, linked from audience pages |

---

## 7. Content Gaps & Recommendations for Nova

1. **FAQ section needed** — Common questions by audience: "What's a specific deductible?" / "How fast do you pay claims?" / "What's the minimum group size?" Suggest adding to each audience page.

2. **"How we're different" comparison** — A simple table comparing our approach vs. traditional carriers. Not naming competitors, but "Traditional Carrier" vs. "Us" side-by-side.

3. **Process timeline visual** — "From quote to coverage in X days" — shows the entire journey from first contact to bound coverage. Builds confidence in the process.

4. **Case study templates** — Even before real case studies exist, create the structure: Challenge → Solution → Result. Ready to populate.

5. **Error/empty states** — If resources page is thin at launch, don't show empty categories. Only display categories with content. A sparse resources page hurts credibility.

---

## 8. Technical CX Requirements for Pixel

### Performance
- **Target:** < 2 second page load (largest contentful paint)
- Minimal JavaScript — content-forward site doesn't need heavy frameworks
- Optimize images (WebP, lazy loading)
- No animations or transitions per Bel's direction — clean fade-ins at most

### Accessibility
- WCAG 2.1 AA minimum
- Semantic HTML (proper heading hierarchy, landmarks)
- Sufficient color contrast (especially on white backgrounds)
- Form labels and error messages accessible to screen readers
- Keyboard navigable — all interactive elements reachable via tab

### Responsive
- Mobile-first approach — design for mobile, enhance for desktop
- Sticky "Get a Quote" button on mobile (bottom bar)
- Touch-friendly tap targets (minimum 44x44px)
- No horizontal scrolling on any breakpoint

### Forms
- Inline validation (real-time, not on-submit)
- Clear error messages ("Please enter a valid email" not "Error")
- Auto-format phone numbers
- File upload for census data with drag-and-drop
- Progress save (if form gets complex in Phase 2)

---

## 9. Measurement Plan

### KPIs to Track

| Metric | Target | Tool |
|--------|--------|------|
| Quote form submissions | Baseline → +20% QoQ | GA4 + CRM |
| Time on audience pages | > 2 minutes | GA4 |
| Audience path click-through (homepage → segment page) | > 30% of visitors | GA4 |
| Form abandonment rate | < 40% | GA4 / Hotjar |
| Mobile conversion rate | Within 80% of desktop | GA4 |
| Page load time (LCP) | < 2 seconds | Lighthouse / Web Vitals |
| Bounce rate (homepage) | < 50% | GA4 |

### Tracking Setup
- GA4 events on all CTAs (quote, partner, demo, download)
- Form field drop-off tracking (which field causes abandonment)
- Scroll depth on long pages (For Employers especially)
- UTM parameters for all campaigns (LinkedIn, Google, email)
- Heatmaps on homepage and audience pages (Hotjar or similar — Phase 2)

---

## 10. Launch Priorities (What to Build First)

### Must-Have for Launch (Phase 1)
1. Homepage with audience paths
2. For Employers page
3. For Brokers page
4. Get a Quote page
5. Basic About page
6. Navigation + footer
7. Mobile responsive
8. Basic analytics (GA4)

### Nice-to-Have (Phase 1.5)
9. For TPAs page
10. Resources page (with at least 2-3 pieces of content)
11. Contact page (if separate from quote)

### Phase 2
12. Broker/TPA portal login
13. Live chat
14. Blog
15. Interactive tools/calculators
16. Heatmap tracking

**Rationale:** Employers and brokers are the primary revenue drivers. TPAs are important but typically come through relationship development, not website conversion. Launch lean with the pages that drive quotes, then build out.

---

*Next steps: Review with Pixel for layout/UX execution and Nova for content gap fills.*

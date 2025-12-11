export const capabilities = [
  "Lead Qualification & First Connect",
  "High-Intent Lead Nurturing",
  "Appointment Setting & Demo Confirmation",
  "Cold Calling & Market Outreach",
  "Payment Reminder & Renewal Calling",
  "Customer Engagement & Re-Activation",
  "Upsell / Cross-Sell Telecalling",
  "Feedback / NPS / Survey Calling",
];

export const inclusions = [
  "Dedicated telecaller(s)",
  "AI-powered CRM (Bitrix24)",
  "GSM dialer (Runo)",
  "Daily reporting",
  "QC monitoring & performance tracking",
  "Backup telecaller to ensure continuity",
];

export const packages = [
  {
    id: "flexicall",
    name: "FlexiCall — Pay-As-You-Go Telecalling",
    perfectFor: "Pilot campaigns, flexible call volumes, seasonal demand surges",
    summary:
      "India’s most flexible model — no long-term commitment, no monthly lock-ins. You pay only for what you use with cost protection.",
    whatYouGet: [
      "Dedicated telecaller (client-approved)",
      "AI-powered CRM & GSM dialer included",
      "Script creation/optimization support",
      "Daily balance statement",
      "QC sampling & performance improvement",
      "Backup telecaller during emergencies",
    ],
    billing: [
      "Seat Cost: ₹7,999/month",
      "Talk Time Recharge: Recharge only when required",
      "Connected Calls: ₹10/min",
      "Short Calls (< 1 min): ₹5/call",
      "Not Connected Calls: ₹1/call",
      "Billing protection: After ₹25,000/month, billing freezes while calling continues",
    ],
    badge: "Pay-as-you-go",
  },
  {
    id: "ultracall",
    name: "UltraCall — Unlimited Calling. Zero Restrictions.",
    perfectFor: "Real estate, EdTech, insurance, and any high-volume lead flow",
    summary:
      "A premium all-inclusive package with unlimited calling — no recharges, no per-call billing, no hidden add-ons.",
    whatYouGet: [
      "Unlimited calls",
      "Dedicated bilingual telecaller",
      "Full CRM + dialer setup",
      "Daily & weekly performance reports",
      "Script writing, refinement & training",
      "Deep QC monitoring",
      "Priority support from TL & Ops team",
    ],
    billing: ["Predictable cost", "High call velocity", "Consistent lead follow-ups", "₹34,999/month"],
    badge: "Unlimited",
  },
  {
    id: "smartreach",
    name: "SmartReach — High-Intent Lead Nurturing Engine",
    perfectFor: "Brands with organic inbound leads or qualification-heavy cycles",
    summary:
      "Built for teams that generate good-quality leads and need dedicated nurturing to convert them with focused follow-ups.",
    whatYouGet: [
      "Dedicated trained telecaller",
      "Focused follow-up strategy",
      "Daily lead updates & call outcomes",
      "AI-powered CRM dashboard",
      "Script optimization for high-intent conversations",
      "QC + weekly improvement calls",
    ],
    billing: ["Lead policy: 450 unique leads/month", "Max 20 new leads per day", "₹14,999/month"],
    badge: "Nurture",
  },
  {
    id: "coldpro",
    name: "ColdPro — The Ultimate Cold Calling Machine",
    perfectFor: "DSAs, franchise growth, dealer recruitment, SaaS appointment setting",
    summary:
      "Purpose-built for high-volume cold calling to penetrate new markets, expand geographies, or activate cold databases.",
    whatYouGet: [
      "Dedicated cold-calling expert",
      "Unlimited calling",
      "Aggressive pitch training",
      "Cold-specific script creation",
      "Basic QC monitoring",
      "Daily reports & follow-up lists",
    ],
    billing: [
      "Price: ₹24,999/month",
      "Optimized for cold outreach (no Bitrix24 social media integration)",
    ],
    badge: "Cold outreach",
  },
];

export const steps = [
  {
    title: "Discovery call",
    description: "We align on your business, audience, objectives, and calling expectations to set a clear brief.",
  },
  {
    title: "Script support & optimization",
    description: "Refine your script or create one from scratch to improve conversions and consistency.",
  },
  {
    title: "CRM & dialer setup (free)",
    description: "Bitrix24 + Runo integration with lead pipelines, auto-segmentation, and agent assignment.",
  },
  {
    title: "Lead import & mapping",
    description: "Upload, segment, and map leads for targeted calling flows.",
  },
  {
    title: "Telecaller training",
    description: "Agent trained on pitch, communication style, product knowledge, and objection handling.",
  },
  {
    title: "QC parameter setup",
    description: "Quality benchmarks defined to monitor performance from day one.",
  },
  {
    title: "Mock calls",
    description: "Supervised practice to validate script, tone, and objection handling before go-live.",
  },
  {
    title: "Go live & daily calling",
    description: "Campaign runs with real-time CRM visibility and daily balance statements.",
  },
  {
    title: "Weekly optimization",
    description: "Analysis, call feedback, and script refinements to continually improve results.",
  },
];

export const allocation = [
  "You approve the telecaller.",
  "Backup agent ready for leave or resignation.",
  "14-day improvement program before replacement.",
];

export const quality = [
  "Weekly call sampling",
  "Call recordings shared",
  "QC & TL feedback loops",
  "Performance scorecards",
  "Daily productivity updates",
];

export const compliance = [
  "5/6 days a week (min. 23 working days in a month)",
  "9 AM – 9 PM as per TRAI rules (8-hour shift)",
  "No business loss on emergencies (backup caller auto-activated)",
];

export const crm = ["Lead routing", "Deal tracking", "Campaign dashboards", "Automated workflows"];

export const dialer = ["High connectivity", "Better pickup compared to VoIP", "Real-time call logs"];

export const analytics = [
  "Performance insights",
  "Lead behavior trends",
  "Agent productivity tracking",
  "Conversion optimization recommendations",
];
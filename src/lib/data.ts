export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Sovereign Suites", href: "#solutions" },
  { label: "R&D & Solar", href: "#solutions" },
  { label: "Terminal", href: "#terminal" },
];

export const TELEMETRY_FEED = [
  {
    id: "agent-legal",
    agent: "Agent 02 • Legal Intelligence",
    action: "Ingested 48-page commercial lease deed",
    metric: "0 compliance breaches • Verified in 410ms",
    status: "OPTIMAL",
    tagColor: "#D4FF00",
  },
  {
    id: "local-inference",
    agent: "Neural Core • Local RAG Engine",
    action: "200B Parameter Model Inference Active",
    metric: "0 B Cloud Egress • 100% On-Premise Air-Gapped",
    status: "SOVEREIGN",
    tagColor: "#0066FF",
  },
  {
    id: "agent-naaas",
    agent: "Agent 07 • NAAAS Infrastructure",
    action: "Automated 1,200 tenant maintenance tickets",
    metric: "Zero human triage required • 100% Resolved",
    status: "EXECUTED",
    tagColor: "#FF5500",
  },
];

export const AGITATION_COMPARISON = [
  {
    category: "The Cloud API Trap",
    subtitle: "Public Cloud Endpoints (OpenAI / Anthropic Direct)",
    badge: "High Bleed & Liability",
    badgeColor: "border-red-500/30 text-red-400 bg-red-500/10",
    points: [
      {
        title: "Runaway Token Billing",
        desc: "Every document query, CAD scan, and agent loop bills your balance. Operational costs compound exponentially with scale.",
      },
      {
        title: "Data Privacy Exposure",
        desc: "Proprietary tenant records, financial ledgers, and trade secrets transit public internet servers outside your physical firewall.",
      },
      {
        title: "Latency & Rate-Limit Delays",
        desc: "Third-party cloud queue throttling and unexpected outages paralyze mission-critical enterprise workflows in real-time.",
      },
    ],
  },
  {
    category: "The Brittle DIY Hack",
    subtitle: "Ad-hoc Python Scripts & Fragile MCP Wrappers",
    badge: "Operational Drift",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    points: [
      {
        title: "Frequent System Hangs",
        desc: "When staff depart or APIs change, in-house developer scripts break silently, leaving entire corporate departments dead in the water.",
      },
      {
        title: "Ungoverned Permission Drift",
        desc: "Unchecked agent tools and prompt hallucinations create un-auditable operational risks and irreversible database errors.",
      },
      {
        title: "Zero Integrated OS",
        desc: "A chaotic mess of disconnected tools with no central audit logging, no role-based permission tiers, and no SLAs.",
      },
    ],
  },
  {
    category: "The OceanBlu Sovereign Standard",
    subtitle: "Blu Box™ Autonomous Enterprise Neural Appliance",
    badge: "The Sovereign Fix",
    badgeColor: "border-[#D4FF00]/40 text-[#D4FF00] bg-[#D4FF00]/10",
    highlighted: true,
    points: [
      {
        title: "Zero Recurring Token Fees",
        desc: "A fixed capital asset. Run unlimited inference loops, 24/7/365, on high-speed dedicated local neural silicon.",
      },
      {
        title: "100% Air-Gapped Data Privacy",
        desc: "Your proprietary corporate IP and documents never touch the public web. Hardware-isolated perimeter security.",
      },
      {
        title: "Sub-Millisecond Determinism",
        desc: "Dedicated high-bandwidth unified memory with a native Agent OS designed for reliable, instant cognitive execution.",
      },
    ],
  },
];

export const BLU_BOX_PILLARS = [
  {
    step: "01",
    title: "Immune to Model Obsolescence",
    specs: "Up to 200B Parameters • Decoupled Inference Harness",
    desc: "Foundational LLMs update monthly. Blu Box features a swappable neural harness. Seamlessly upgrade or fine-tune local models without altering business workflows or rewriting software.",
  },
  {
    step: "02",
    title: "Autonomous Multi-Modal Execution",
    specs: "Documents • CAD Blueprints • Invoices • Automated Webhooks",
    desc: "Blu Box is not a simple chat assistant. It ingests 500-page contracts, evaluates architectural blueprints, generates marketing assets, and triggers ERP operations with zero human supervision.",
  },
  {
    step: "03",
    title: "Local Deterministic RAG",
    specs: "Laser Context Routing • Zero Hallucinations",
    desc: "Proprietary retrieval-augmented generation routes context with cryptographic accuracy. Every output and decision is 100% grounded in your company’s internal verified records.",
  },
  {
    step: "04",
    title: "'Plug, Train, and Relax'",
    specs: "Turnkey Deployment in < 48 Hours • Zero DevOps Required",
    desc: "Connect Blu Box to your local corporate LAN, point it to your data vaults, configure department permission tiers, and let your autonomous workforce execute operations immediately.",
  },
];

export const BLU_BOX_MODELS = [
  {
    name: "Blu Box Studio",
    tier: "Compact Appliance",
    capacity: "Up to 50 Concurrent Autonomous Agents",
    target: "Boutique Real Estate, Dental & Medical Clinics, Law Practices, Mid-Market Leaders",
    features: [
      "Unified High-Speed Neural Silicon",
      "Standard Local Document RAG",
      "Plug-and-play Ethernet Deployment",
      "Department-level Access Control",
    ],
  },
  {
    name: "Blu Box Enterprise",
    tier: "High-Density Rackmount",
    capacity: "Up to 500 Concurrent Agents • 200B Parameter Support",
    target: "Commercial Conglomerates, Large Hospitals, Universities, Logistics Fleets",
    badge: "Most Deployed",
    features: [
      "Dual Neural Accelerators + Ultra-Bandwidth VRAM",
      "Multi-Department Context Segmentation",
      "Continuous Automated Local Fine-Tuning",
      "Full ERP & Webhook Bi-Directional Bridge",
    ],
  },
  {
    name: "Blu Box Sovereign",
    tier: "Air-Gapped Hardened Chassis",
    capacity: "Unlimited Air-Gapped Isolated Execution",
    target: "National Infrastructure, Defense Contractors, Banking & Confidential R&D Labs",
    features: [
      "Hardware-Level Cryptographic Isolation",
      "Zero External Uplink Dependency",
      "Military-Spec Tamper-Evident Chassis",
      "Sovereign Fine-Tuned Custom Weights",
    ],
  },
];

export const SECTOR_SUITES = [
  {
    id: "real-estate",
    title: "Real Estate, Construction & NAAAS",
    code: "SECTOR 01",
    bottleneck: "Property valuation, multi-party leasing deeds, lead screening, and CAD inspections consume weeks of manual triage.",
    solution: "Autonomous Real Estate OS. Evaluates CAD blueprints, verifies deed compliance, handles tenant inquiries via WhatsApp, and drafts binding contracts in seconds.",
    flagship: "NAAAS Urban & Property Ecosystem (Web, Native Mobile, & Enterprise Engine)",
    metrics: "85% Faster Contract Turnaround • 40% Reduction in Tenant Onboarding Time",
  },
  {
    id: "hospitality",
    title: "Commerce, Restaurants & Hospitality",
    code: "SECTOR 02",
    bottleneck: "Front-desk staff turnover, exorbitant delivery aggregator fees, and slow customer responses bleed operational margins.",
    solution: "Omnichannel Restaurant POS & WhatsApp Booking Agents. Takes orders, handles table reservations, dispatches kitchen tickets, and drives automated repeat sales.",
    flagship: "Autonomous Hospitality Engine",
    metrics: "0% Aggregator Commission on Direct WhatsApp Orders • 24/7 Table Booking",
  },
  {
    id: "healthcare",
    title: "Clinical Healthcare & Dental Diagnostics",
    code: "SECTOR 03",
    bottleneck: "Clinicians spend up to 40% of their workday typing notes, filling diagnostic charts, and manually booking procedures.",
    solution: "Local Clinical Suite. Summarizes patient charts, prepares diagnostic summaries, and schedules appointments under strict, HIPAA-grade local privacy.",
    flagship: "Dental & Clinical Assistant Appliance",
    metrics: "40% Reduction in Clinical Administrative Burden • 100% Offline Patient Privacy",
  },
  {
    id: "education",
    title: "Higher Education & Workforce LMS",
    code: "SECTOR 04",
    bottleneck: "Skyrocketing student acquisition budgets, manual admission triage, and outdated, fragmented student portals.",
    solution: "Campus Intelligence OS. Automates student admission inquiries, cuts recruitment marketing spend by 40%, and delivers personalized 24/7 AI tutoring.",
    flagship: "Autonomous University LMS & Admission Gateway",
    metrics: "40% Lower Student Acquisition Cost • 24/7 Interactive Student Guidance",
  },
  {
    id: "logistics",
    title: "Supply Chain, Retail & Fleet Logistics",
    code: "SECTOR 05",
    bottleneck: "Warehouse stockouts, manual order-to-cash reconciliation, and erratic route dispatching increase fuel and labor costs.",
    solution: "Autonomous ERP & Fleet Telematics. Connects warehouse inventory with algorithmic dispatch, dynamically recalculating transit routes and automating purchase orders.",
    flagship: "Autonomous Enterprise Supply OS",
    metrics: "24% Fuel & Transit Optimization • Automated Multi-Supplier Restocking",
  },
];

export const STRATEGIC_RND = [
  {
    id: "railway",
    title: "Bangladesh Railway Digitalization Architecture",
    category: "National Infrastructure",
    desc: "Algorithmic train dispatching, automated locomotive telemetry, anti-fraud digital ticketing verification, and predictive track maintenance systems to eliminate systemic transit bottlenecks.",
    status: "DPP Framework Completed",
  },
  {
    id: "semiconductor",
    title: "Semiconductor Feasibility & Sovereign Compute",
    category: "Deep-Tech Manufacturing",
    desc: "Strategic feasibility analysis for domestic semiconductor packaging, testing, and hardware acceleration appliances tailored specifically for localized AI inference.",
    status: "Feasibility Study Active",
  },
  {
    id: "solar",
    title: "Blu Solar: Rooftop Photovoltaic & Micro-Drip System",
    category: "Climate Tech & Clean Energy",
    desc: "Autonomous smart rooftop solar harvesting combined with IoT micro-drip irrigation and thermal cooling pipes, maximizing solar cell efficiency while enabling urban agricultural micro-gardens.",
    status: "Telemetry & Pilot Deployed",
  },
  {
    id: "nsda",
    title: "NSDA Global Labor Competency Mapping",
    category: "Workforce & Talent Export",
    desc: "Algorithmic standardization aligning domestic vocational skill standards with international high-wage demand, accelerating structured talent export and diaspora economic security.",
    status: "Standards Registry In Progress",
  },
];

export const VENTURE_FLYWHEEL = {
  concord: {
    title: "OceanBlu Concord",
    subtitle: "The Elite Talent & Startup Foundry",
    model: "Y Combinator Incubation Model",
    desc: "Capturing the top 1% of creative engineering and mathematical talent from premier universities. We incubate, mentor, and fund mission-driven ventures solving international enterprise challenges and Smart Bangladesh initiatives.",
    clubs: ["AI & Autonomous Systems", "Law & Strategic Policy", "Cinema & Media Arts", "Engineering Hardware"],
  },
  solar: {
    title: "Blu Solar Systems",
    subtitle: "Sustainable Compute & Rooftop Generation",
    model: "Rooftop Photovoltaics + Micro-Drip Cooling",
    desc: "Autonomous renewable energy generation engineered for commercial complexes and industrial campuses. Integrates high-efficiency photovoltaic panels with automated sensor-driven micro-drip cooling to maintain peak thermodynamic efficiency and sustain rooftop vegetation.",
    features: ["28% Higher Solar Panel Efficiency via Micro-Cooling", "Zero-Waste Rooftop Agricultural Irrigation", "Direct Off-Grid Compute Powering Blu Box"],
  },
};
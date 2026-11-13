import type { LabeledItem } from "./types";

export type Category = "web3" | "system" | "data" | "frontend";

export type Project = {
  title: string;
  image: string;
  url: string;
  category: Category;
  tags: LabeledItem[];
  /** Full description, shown on the portfolio page. */
  description: string;
  /** Short description, shown on the home page. */
  summary?: string;
};

export const categories: { id: Category; label: string }[] = [
  {
    id: "web3",
    label: "Web3",
  },
  {
    id: "system",
    label: "Systems & Web Apps",
  },
  {
    id: "data",
    label: "Data & BI",
  },
  {
    id: "frontend",
    label: "Frontend",
  },
];

/** Ordered from the most complex project to the simplest. */
export const projects: Project[] = [
  {
    title: "Covar",
    image: "/img/opt/covar.webp",
    url: "https://covar.vercel.app/",
    category: "web3",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "TypeScript",
        logos: [
          {
            id: "i-typescript",
            color: "#3178C6",
          },
        ],
      },
      {
        label: "Solidity",
        logos: [
          {
            id: "i-solidity",
          },
        ],
      },
      {
        label: "Hardhat",
        logos: [
          {
            id: "g-hardhat",
            color: "#E0A800",
          },
        ],
      },
      {
        label: "Ethers.js",
        logos: [
          {
            id: "i-ethers",
            color: "#2535A0",
          },
        ],
      },
      {
        label: "Prisma",
        logos: [
          {
            id: "i-prisma",
          },
        ],
      },
      {
        label: "Robinhood Chain",
        logos: [
          {
            id: "i-robinhood",
            color: "#00C805",
          },
        ],
      },
    ],
    description:
      "Covar turns a conversation into a validated trading strategy, backtests it on real history, runs it in practice mode, and lets investors fund a versioned on-chain vault. Vaults on Robinhood Chain.",
    summary:
      "Strategy agents with published rules — describe a trade idea, backtest it, and run it in practice.",
  },
  {
    title: "FYAT Agent",
    image: "/img/opt/fyat.webp",
    url: "https://fyat-agent.vercel.app/",
    category: "web3",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "TypeScript",
        logos: [
          {
            id: "i-typescript",
            color: "#3178C6",
          },
        ],
      },
      {
        label: "Rust",
        logos: [
          {
            id: "i-rust",
          },
        ],
      },
      {
        label: "Anchor",
        logos: [
          {
            id: "g-anchor",
            color: "#3E7BFA",
          },
        ],
      },
      {
        label: "Solana web3.js",
        logos: [
          {
            id: "i-solana",
            color: "#9945FF",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
      {
        label: "Neon Postgres",
        logos: [
          {
            id: "i-postgresql",
            color: "#4169E1",
          },
        ],
      },
    ],
    description:
      "FYAT builds complete Solana agent transaction flows with mandate authorization built into the execution path: actions are collected, planned, verified against the owner's mandate, and simulated before anything is signed.",
    summary:
      "Transaction builder for autonomous agents on Solana, with mandate authorization built in.",
  },
  {
    title: "Vetto",
    image: "/img/opt/vetto.webp",
    url: "https://vetto-six.vercel.app/",
    category: "web3",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "TypeScript",
        logos: [
          {
            id: "i-typescript",
            color: "#3178C6",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
      {
        label: "viem",
        logos: [
          {
            id: "g-zap",
            color: "#E0A800",
          },
        ],
      },
      {
        label: "Uniswap v4",
        logos: [
          {
            id: "i-uniswap",
            color: "#FF007A",
          },
        ],
      },
      {
        label: "WalletConnect",
        logos: [
          {
            id: "i-walletconnect",
            color: "#3B99FC",
          },
        ],
      },
      {
        label: "PostgreSQL",
        logos: [
          {
            id: "i-postgresql",
            color: "#4169E1",
          },
        ],
      },
    ],
    description:
      "Vetto is a natural-language DeFi assistant on Robinhood Chain. It reads your intent, quotes real routes only, runs safety checks and simulates the exact transaction — and nothing moves without your signature.",
    summary:
      "Your DeFi banker — natural-language DeFi on Robinhood Chain with safety checks first.",
  },
  {
    title: "VATE",
    image: "/img/opt/vate.webp",
    url: "https://vate-ecru.vercel.app/",
    category: "web3",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "TypeScript",
        logos: [
          {
            id: "i-typescript",
            color: "#3178C6",
          },
        ],
      },
      {
        label: "Solidity",
        logos: [
          {
            id: "i-solidity",
          },
        ],
      },
      {
        label: "Foundry",
        logos: [
          {
            id: "g-hammer",
          },
        ],
      },
      {
        label: "wagmi",
        logos: [
          {
            id: "i-wagmi",
          },
        ],
      },
      {
        label: "viem",
        logos: [
          {
            id: "g-zap",
            color: "#E0A800",
          },
        ],
      },
      {
        label: "TanStack Query",
        logos: [
          {
            id: "i-reactquery",
            color: "#FF4154",
          },
        ],
      },
    ],
    description:
      "VATE is a non-custodial interface for comparing curated USDG lending vaults on Robinhood Chain. VATE Ranking scores each vault by live yield, deposit depth and withdrawable liquidity; you deposit and withdraw directly from your own wallet.",
    summary:
      "A non-custodial interface for comparing curated USDG lending vaults on Robinhood Chain.",
  },
  {
    title: "Clutch Disc Production Monitoring",
    image: "/img/opt/clutch.webp",
    url: "https://clutch-tech.vercel.app/",
    category: "system",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "TypeScript",
        logos: [
          {
            id: "i-typescript",
            color: "#3178C6",
          },
        ],
      },
      {
        label: "PostgreSQL",
        logos: [
          {
            id: "i-postgresql",
            color: "#4169E1",
          },
        ],
      },
      {
        label: "Supabase",
        logos: [
          {
            id: "i-supabase",
            color: "#3ECF8E",
          },
        ],
      },
      {
        label: "Recharts",
        logos: [
          {
            id: "g-chart",
            color: "#22B5BF",
          },
        ],
      },
      {
        label: "JWT Auth",
        logos: [
          {
            id: "i-jsonwebtokens",
          },
        ],
      },
    ],
    description:
      "A web-based Production Monitoring Dashboard that gives real-time visibility into production targets, actual output, and operational performance across Preforming, Drilling, Hotpress and PMC areas. Built with Next.js, TypeScript and PostgreSQL, with secure login and per-machine Actual vs Target charts that present production data clearly.",
    summary:
      "Web-based production monitoring dashboard with real-time visibility into targets, output and performance.",
  },
  {
    title: "TimelessTales",
    image: "/img/opt/timelesstales.webp",
    url: "https://cilukba.vercel.app/",
    category: "system",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
      {
        label: "Node.js",
        logos: [
          {
            id: "i-nodedotjs",
            color: "#5FA04E",
          },
        ],
      },
    ],
    description:
      "Developed for the GAYATAMA International Web Design Competition by Universitas Negeri Surabaya. The website lets users upload and share meaningful moments from their lives. I was responsible for UI/UX design and frontend development, and integrated the admin panel with the main website.",
    summary:
      "A life-journey website for sharing meaningful moments, built for the GAYATAMA International Web Design Competition.",
  },
  {
    title: "DariKamiUntukmu",
    image: "/img/opt/dku.webp",
    url: "https://dari-kami-untukmu.vercel.app/",
    category: "system",
    tags: [
      {
        label: "Next.js",
        logos: [
          {
            id: "i-nextdotjs",
          },
        ],
      },
      {
        label: "React",
        logos: [
          {
            id: "i-react",
            color: "#149ECA",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
      {
        label: "Supabase",
        logos: [
          {
            id: "i-supabase",
            color: "#3ECF8E",
          },
        ],
      },
      {
        label: "Framer Motion",
        logos: [
          {
            id: "i-framer",
            color: "#0055FF",
          },
        ],
      },
      {
        label: "Radix UI",
        logos: [
          {
            id: "i-radixui",
          },
        ],
      },
    ],
    description:
      "A web-based Digital Wedding Invitation platform developed as an entrepreneurship course project with fellow students. Users can create, customize, and share wedding invitations in a practical, interactive way across devices.",
  },
  {
    title: "Northwind Executive Summary Dashboard",
    image: "/img/opt/tableau-northwind.webp",
    url: "https://public.tableau.com/app/profile/m.alfiansyah/viz/NorthwindExecutiveSummaryDashboard_17638724615530/ExecutiveSummaryNorthwind",
    category: "data",
    tags: [
      {
        label: "Tableau",
        logos: [
          {
            id: "i-tableau",
            color: "#E97627",
          },
        ],
      },
      {
        label: "Business Intelligence",
        logos: [
          {
            id: "g-pie",
            color: "#1b82d6",
          },
        ],
      },
    ],
    description:
      "An Executive Summary Dashboard built with Tableau Public on the Northwind dataset. It presents key metrics such as sales volume, revenue, growth, and performance trends as a concise executive-level overview to support strategic decision-making.",
  },
  {
    title: "Customer Complaint Dashboard",
    image: "/img/opt/tableau-complaint.webp",
    url: "https://public.tableau.com/app/profile/m.alfiansyah/viz/complaint_customer_17639233597850/ComplaintCustomer",
    category: "data",
    tags: [
      {
        label: "Tableau",
        logos: [
          {
            id: "i-tableau",
            color: "#E97627",
          },
        ],
      },
      {
        label: "Data Analysis",
        logos: [
          {
            id: "g-chart",
            color: "#1b82d6",
          },
        ],
      },
    ],
    description:
      "A Customer Complaint Dashboard built with Tableau Public to analyze complaint data interactively — complaint frequency, issue categories, time trends, and customer segmentation — helping identify service-related problems.",
  },
  {
    title: "Music Store Revenue Optimization Dashboard",
    image: "/img/opt/tableau-music.webp",
    url: "https://public.tableau.com/app/profile/m.alfiansyah/viz/StrategiOptimalisasiPendapatanTokoMusicGlobalDashboard/DASHBOARD",
    category: "data",
    tags: [
      {
        label: "Tableau",
        logos: [
          {
            id: "i-tableau",
            color: "#E97627",
          },
        ],
      },
      {
        label: "Data Analysis",
        logos: [
          {
            id: "g-chart",
            color: "#1b82d6",
          },
        ],
      },
    ],
    description:
      "A Revenue Optimization Strategy Dashboard built with Tableau Public on the Chinook database. It covers key revenue metrics, sales trends over time, genre performance, and country-level insights to support revenue growth strategies.",
  },
  {
    title: "Music4Lyfe",
    image: "/img/opt/music4lyfe.webp",
    url: "https://music4lyfe.vercel.app/",
    category: "frontend",
    tags: [
      {
        label: "React",
        logos: [
          {
            id: "i-react",
            color: "#61DAFB",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
      {
        label: "Figma",
        logos: [
          {
            id: "i-figma",
            color: "#F24E1E",
          },
        ],
      },
    ],
    description:
      "Music4Lyfe is a modern and responsive music streaming web app landing page, designed with a sleek, immersive UI using React.js and Tailwind CSS.",
  },
  {
    title: "Carify",
    image: "/img/opt/carify.webp",
    url: "https://carify-gamma.vercel.app/",
    category: "frontend",
    tags: [
      {
        label: "React",
        logos: [
          {
            id: "i-react",
            color: "#61DAFB",
          },
        ],
      },
      {
        label: "Tailwind CSS",
        logos: [
          {
            id: "i-tailwindcss",
            color: "#06B6D4",
          },
        ],
      },
    ],
    description:
      "Carify is a sleek and responsive car rental landing page that highlights popular vehicles and key services like airport pickup and professional drivers.",
  },
  {
    title: "Rubik Cube Game",
    image: "/img/opt/rubik.webp",
    url: "https://strvntrl.github.io/Rubik-Cube-Game/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
      {
        label: "JS",
        logos: [
          {
            id: "i-javascript",
            color: "#F7DF1E",
          },
        ],
      },
    ],
    description:
      "A Rubik's cube game called \"The Cube\". With this game, you can play and also practice mastering Rubik's cubes without owning a real one.",
  },
  {
    title: "Surabaya Museum",
    image: "/img/opt/surabaya-museum.webp",
    url: "https://strvntrl.github.io/Surabaya-Museum/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
      {
        label: "JS",
        logos: [
          {
            id: "i-javascript",
            color: "#F7DF1E",
          },
        ],
      },
    ],
    description:
      "A simple website showcasing several museums located in Surabaya, East Java, Indonesia, created as part of a 2-week fundamental course by RevoU.",
  },
  {
    title: "Dibimbing FE Final Project",
    image: "/img/opt/dibimbing.webp",
    url: "https://strvntrl.github.io/Dibimbing-FE-Portofolio/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
      {
        label: "JS",
        logos: [
          {
            id: "i-javascript",
            color: "#F7DF1E",
          },
        ],
      },
    ],
    description:
      "A personal website created as the final project after completing the Front-End Development class by Dibimbing.id — my first practical step toward becoming a front-end developer.",
  },
  {
    title: "Solar System",
    image: "/img/opt/solar-system.webp",
    url: "https://strvntrl.github.io/Solar-System/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
    ],
    description:
      "A website that displays our solar system, from the shape of each planet to information about it.",
  },
  {
    title: "Memory Game",
    image: "/img/opt/memory.webp",
    url: "https://strvntrl.github.io/Memory-Game/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
      {
        label: "JS",
        logos: [
          {
            id: "i-javascript",
            color: "#F7DF1E",
          },
        ],
      },
    ],
    description:
      "A lightweight memory training game built to challenge users with visual and pattern-based tasks.",
  },
  {
    title: "Word Counter",
    image: "/img/opt/word-counter.webp",
    url: "https://strvntrl.github.io/Word-Counter/",
    category: "frontend",
    tags: [
      {
        label: "HTML",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
        ],
      },
      {
        label: "CSS",
        logos: [
          {
            id: "i-css3",
            color: "#1572B6",
          },
        ],
      },
      {
        label: "JS",
        logos: [
          {
            id: "i-javascript",
            color: "#F7DF1E",
          },
        ],
      },
    ],
    description:
      "Counts the words that have been typed; suitable when there is a typing task with a minimum word requirement.",
  },
];

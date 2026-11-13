import type { IconName } from "@/components/Icon";
import type { LabeledItem } from "./types";

export type SkillGroup = { icon: IconName; title: string; items: LabeledItem[] };

export const skillGroups: SkillGroup[] = [
  {
    icon: "code",
    title: "Software Development",
    items: [
      {
        label: "HTML5, CSS3, JavaScript",
        logos: [
          {
            id: "i-html5",
            color: "#E34F26",
          },
          {
            id: "i-css3",
            color: "#1572B6",
          },
          {
            id: "i-javascript",
            color: "#E8C000",
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
        label: "React.js & Next.js",
        logos: [
          {
            id: "i-react",
            color: "#149ECA",
          },
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
        label: "GSAP & Framer Motion",
        logos: [
          {
            id: "i-gsap",
            color: "#0AE448",
          },
          {
            id: "i-framer",
            color: "#0055FF",
          },
        ],
      },
      {
        label: "PHP & Laravel",
        logos: [
          {
            id: "i-php",
            color: "#777BB4",
          },
          {
            id: "i-laravel",
            color: "#FF2D20",
          },
        ],
      },
      {
        label: "Prisma ORM & Supabase",
        logos: [
          {
            id: "i-prisma",
          },
          {
            id: "i-supabase",
            color: "#3ECF8E",
          },
        ],
      },
      {
        label: "Software Requirements Specification (SRS)",
        logos: [
          {
            id: "g-file",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "UML: Use Case, Activity, Sequence",
        logos: [
          {
            id: "g-uml",
            color: "#1b82d6",
          },
        ],
      },
    ],
  },
  {
    icon: "box",
    title: "Web3 & Blockchain",
    items: [
      {
        label: "Solidity Smart Contracts",
        logos: [
          {
            id: "i-solidity",
          },
        ],
      },
      {
        label: "Rust & Anchor (Solana Programs)",
        logos: [
          {
            id: "i-rust",
          },
          {
            id: "g-anchor",
            color: "#3E7BFA",
          },
        ],
      },
      {
        label: "Hardhat & Foundry",
        logos: [
          {
            id: "g-hardhat",
            color: "#E0A800",
          },
          {
            id: "g-hammer",
          },
        ],
      },
      {
        label: "Ethers.js, viem & wagmi",
        logos: [
          {
            id: "i-ethers",
            color: "#2535A0",
          },
          {
            id: "g-zap",
            color: "#E0A800",
          },
          {
            id: "i-wagmi",
          },
        ],
      },
      {
        label: "Solana web3.js & SPL Token",
        logos: [
          {
            id: "i-solana",
            color: "#9945FF",
          },
        ],
      },
      {
        label: "Ethereum / EVM & Robinhood Chain",
        logos: [
          {
            id: "i-ethereum",
            color: "#627EEA",
          },
          {
            id: "i-robinhood",
            color: "#00C805",
          },
        ],
      },
      {
        label: "Wallet Integration (WalletConnect, Phantom, Solflare)",
        logos: [
          {
            id: "i-walletconnect",
            color: "#3B99FC",
          },
          {
            id: "g-wallet",
            color: "#AB9FF2",
          },
        ],
      },
      {
        label: "Uniswap v4 SDK & Meteora",
        logos: [
          {
            id: "i-uniswap",
            color: "#FF007A",
          },
          {
            id: "g-waves",
            color: "#F2541B",
          },
        ],
      },
      {
        label: "DeFi: Vaults, Swaps & Lending",
        logos: [
          {
            id: "g-defi",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Transaction Simulation & Safety Checks",
        logos: [
          {
            id: "g-shield",
            color: "#1b82d6",
          },
        ],
      },
    ],
  },
  {
    icon: "chart",
    title: "Data Analysis & Visualization",
    items: [
      {
        label: "Python (Pandas, NumPy)",
        logos: [
          {
            id: "i-python",
            color: "#3776AB",
          },
        ],
      },
      {
        label: "SQL & PostgreSQL",
        logos: [
          {
            id: "i-postgresql",
            color: "#4169E1",
          },
        ],
      },
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
        label: "Power BI",
        logos: [
          {
            id: "i-powerbi",
            color: "#E0B000",
          },
        ],
      },
      {
        label: "Excel & Google Sheets",
        logos: [
          {
            id: "i-microsoftexcel",
            color: "#217346",
          },
          {
            id: "i-googlesheets",
            color: "#34A853",
          },
        ],
      },
      {
        label: "Data Cleaning & Validation",
        logos: [
          {
            id: "g-filter",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "EDA",
        logos: [
          {
            id: "g-search",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "ETL (CSV, Excel, Google Forms)",
        logos: [
          {
            id: "g-etl",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Validity & Reliability Testing (SPSS)",
        logos: [
          {
            id: "i-ibm",
            color: "#052FAD",
          },
        ],
      },
      {
        label: "Interactive Dashboards",
        logos: [
          {
            id: "g-dashboard",
            color: "#1b82d6",
          },
        ],
      },
    ],
  },
  {
    icon: "check",
    title: "Quality Assurance & Testing",
    items: [
      {
        label: "Black Box & White Box Testing",
        logos: [
          {
            id: "g-boxcheck",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Test Scenario & Test Case Development",
        logos: [
          {
            id: "g-list",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Test Execution",
        logos: [
          {
            id: "g-play",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Bug Reporting & Testing Documentation",
        logos: [
          {
            id: "g-bug",
            color: "#1b82d6",
          },
        ],
      },
      {
        label: "Automated Testing (Playwright & Vitest)",
        logos: [
          {
            id: "i-playwright",
            color: "#2EAD33",
          },
          {
            id: "i-vitest",
            color: "#6E9F18",
          },
        ],
      },
    ],
  },
  {
    icon: "tool",
    title: "Tools & Deployment",
    items: [
      {
        label: "Git & GitHub",
        logos: [
          {
            id: "i-git",
            color: "#F05032",
          },
          {
            id: "i-github",
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
      {
        label: "Visual Studio Code",
        logos: [
          {
            id: "i-visualstudiocode",
            color: "#007ACC",
          },
        ],
      },
      {
        label: "Postman",
        logos: [
          {
            id: "i-postman",
            color: "#FF6C37",
          },
        ],
      },
      {
        label: "SQL Server Management",
        logos: [
          {
            id: "i-microsoftsqlserver",
            color: "#CC2927",
          },
        ],
      },
      {
        label: "Jupyter Notebook",
        logos: [
          {
            id: "i-jupyter",
            color: "#F37626",
          },
        ],
      },
      {
        label: "pnpm",
        logos: [
          {
            id: "i-pnpm",
            color: "#F69220",
          },
        ],
      },
      {
        label: "Vercel & Railway",
        logos: [
          {
            id: "i-vercel",
          },
          {
            id: "i-railway",
          },
        ],
      },
    ],
  },
];

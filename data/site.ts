import type { IconName } from "@/components/Icon";

export const site = {
  name: "Alfianzyh",
  author: "Muhammad Alfiansyah",
  description:
    "Muhammad Alfiansyah — Undergraduate Student of Information Systems | Full-Stack Web2, Web3, & System Developer | Data Analyst & Business Intelligence | Information Systems Management & Digital Humanism.",
  email: "muhammad.alfiansyah2805@gmail.com",
  location: "Surabaya, Indonesia",
  formEndpoint: "https://formspree.io/f/xyzjgvjl",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const socials: { href: string; label: string; icon: IconName }[] = [
  { href: "https://www.linkedin.com/in/muhalfisyah", label: "LinkedIn", icon: "linkedin" },
  { href: "https://github.com/strvntrl", label: "GitHub", icon: "github" },
  { href: "https://www.instagram.com/alfianzyh", label: "Instagram", icon: "instagram" },
];

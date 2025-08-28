import { Globe, MapPin, Phone, Send } from "lucide-react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareUpwork, FaXTwitter } from "react-icons/fa6";

export const menuItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export const contactInfo = [
  {
    label: "Address",
    value: "Lagos, Nigeria",
    href: "",
    Icon: MapPin,
  },
  {
    label: "Phone Number",
    value: "+234-704-654-6892",
    href: "tel:+2347045646892",
    Icon: Phone,
  },
  {
    label: "Email",
    value: "devpaul3000@gmail.com",
    href: "mailto:devpaul3000@gmail.com",
    Icon: Send,
  },
  {
    label: "Website",
    value: "https://devpaul.vercel.com",
    href: "https://devpaul.vercel.com",
    Icon: Globe,
  },
];

export const socialLinks = [
  {
    Icon: FaLinkedinIn,
    title: "LinkedIn",
    description: "Connect with me",
    href: "#",
  },
  {
    Icon: FaSquareUpwork,
    title: "Upwork",
    description: "Hire me",
    href: "#",
  },
  {
    Icon: FaFacebookF,
    title: "Facebook",
    description: "Let's be friends",
    href: "#",
  },
  {
    Icon: FaXTwitter,
    title: "X/Twitter",
    description: "Follow me",
    href: "#",
  },
];

export const testimonials = [
  {
    message:
      "I was looking for a Web professional who would create and evolve my website. Paul delivers exactly what I want. It’s always a pleasure working and seeing him. I enjoy meeting him as he is reliable and after every project, I always end up with a spring in my step and a smile on my face.",
    name: "Better Andrew",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "CEO, Philland Engineering Services",
  },
  {
    message:
      "Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy. In my experience, no project is too much trouble, and with Paul you really get a rare entity – someone that can simplify what can be a very complex industry at times.",
    name: "Patrick Amaka",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "CEO, PAMAK Careline Ventures",
  },
  {
    message:
      "From the start of the project, through to completion, Paul supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. ",
    name: "Dare Joshua",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Marketing Manager",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript/TypeScript",
      "React",
      "React Native",
      "Next.js",
      "TailwindCSS",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express JS",
      "Restful APIs",
      "GraphQL",
      "MongoDB",
      "Firebase",
      "AppWrite",
      "Supabase",
      "Socket.io",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Copywriting",
      "Time management",
      "Leadership",
      "Adaptability",
    ],
  },
];

"use client";

import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export default function SkillBadge({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  return (
    <motion.span
      key={skill}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: (index + 1) * 0.2,
      }}
    >
      <Badge>{skill}</Badge>
    </motion.span>
  );
}

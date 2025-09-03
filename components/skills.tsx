import {motion} from "motion/react"
import Section from "./shared/section";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { skillCategories } from "@/constants";
import SkillBadge from "./skill-badge";

export default function Skills() {
  return (
    <div id="skills">
      <Section
        heading="My Skills"
        subheading="SKILLS"
        secondary="As a fullstack web and mobile developer, I have developed expertise in the skills listed below. This is my core stack."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map(({ title, skills }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 flex-wrap justify-center items-center">
                  {skills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index}/>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

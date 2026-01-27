import htmlSkill from "@/assets/images/skillImg/htmlSkill.svg";
import cssSkill from "@/assets/images/skillImg/cssSkill.svg";
import javascriptSkill from "@/assets/images/skillImg/javascriptSkill.svg";
import springSkill from "@/assets/images/skillImg/springSkill.svg";
import vueSkill from "@/assets/images/skillImg/vueSkill.svg";
import tailwindSkill from "@/assets/images/skillImg/tailwindSkill.svg";
import figmaSkill from "@/assets/images/skillImg/figmaSkill.svg";
import vscodeSkill from "@/assets/images/skillImg/vscodeSkill.svg";
import githubSkill from "@/assets/images/skillImg/githubSkill.svg";

interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "HTML", icon: htmlSkill },
  { name: "CSS", icon: cssSkill },
  { name: "JavaScript", icon: javascriptSkill },
  { name: "SpringBoot", icon: springSkill },
  { name: "Vue", icon: vueSkill },
  { name: "Tailwind", icon: tailwindSkill },
  { name: "Figma", icon: figmaSkill },
  { name: "VSCode", icon: vscodeSkill },
  { name: "GitHub", icon: githubSkill },
];

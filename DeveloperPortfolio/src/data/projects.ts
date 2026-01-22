import SunCode from "@/assets/images/profileImg/SunCode.svg";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  repository?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "pigfinance",
    title: "PigFinance",
    category: "Financeiro",
    description:
      "Sistema de controle de finanças pessoais. Ele permite visualizar, adicionar, editar e remover transações financeiras de forma intuitiva e responsiva",
    image: SunCode,
    technologies: ["Vue.js", "Golang", "MySQL", "Figma", "Lucidchart"],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://pigfinance.vercel.app",
  },
  {
    id: "artsaboaria",
    title: "Artsaboaria",
    category: "e-commerce",
    description:
      "ARTSABOARIA é um e-commerce especializado na venda de sabonetes artesanais, com foco em qualidade, sustentabilidade e experiência do usuário. O design clean e elegante, aliado a uma navegação intuitiva, traduz a essência artesanal da marca e proporciona uma experiência de compra diferenciada. Este projeto foi criado para atender à solicitação de demonstração de um cliente real.",
    image: SunCode,
    technologies: ["Vue.js", "Spring Boot", "MySQL", "Figma", "Postman"],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://artsaboaria-website.vercel.app",
  },
];

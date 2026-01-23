import SunCodeImg from "@/assets/images/profileImg/SunCode.svg";
import ArtsaboariaImg from "@/assets/images/projectsImg/ArtsaboariaImg.png";
import PigFinanceImg from "@/assets/images/projectsImg/PigFinanceImg.png";

interface Technology {
  title: string;
  color: string;
}
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: Technology[];
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
    image: PigFinanceImg,
    technologies: [
      {
        title: "Vue.js",
        color: "#41B883",
      },
      {
        title: "Figma",
        color: "#A259FF",
      },
      {
        title: "MySQL",
        color: "#F29111",
      },
      {
        title: "Lucidchart",
        color: "#FF6C02",
      },
      {
        title: "Postman",
        color: "#FF6C38",
      },
      {
        title: "Golang",
        color: "#08B1DA",
      },
    ],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://pigfinance.vercel.app",
  },
  {
    id: "artsaboaria",
    title: "Artsaboaria",
    category: "e-commerce",
    description:
      "Artsaboaria é um e-commerce especializado na venda de sabonetes artesanais, com foco em qualidade, sustentabilidade e experiência do usuário. O design clean e elegante, aliado a uma navegação intuitiva, traduz a essência artesanal da marca e proporciona uma experiência de compra diferenciada. Este projeto foi criado para atender à solicitação de demonstração de um cliente real.",
    image: ArtsaboariaImg,
    technologies: [
      {
        title: "Vue.js",
        color: "#41B883",
      },
      {
        title: "Figma",
        color: "#A259FF",
      },
      {
        title: "Spring Boot",
        color: "#6DB33F",
      },
      {
        title: "MySQL",
        color: "#F29111",
      },
      {
        title: "Postman",
        color: "#FF6C38",
      },
    ],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://artsaboaria-website.vercel.app",
  },
  {
    id: "artsaboaria",
    title: "Artsaboaria",
    category: "e-commerce",
    description:
      "Artsaboaria é um e-commerce especializado na venda de sabonetes artesanais, com foco em qualidade, sustentabilidade e experiência do usuário. O design clean e elegante, aliado a uma navegação intuitiva, traduz a essência artesanal da marca e proporciona uma experiência de compra diferenciada. Este projeto foi criado para atender à solicitação de demonstração de um cliente real.",
    image: ArtsaboariaImg,
    technologies: [
      {
        title: "Vue.js",
        color: "#41B883",
      },
      {
        title: "Figma",
        color: "#A259FF",
      },
      {
        title: "Spring Boot",
        color: "#6DB33F",
      },
      {
        title: "MySQL",
        color: "#F29111",
      },
      {
        title: "Postman",
        color: "#FF6C38",
      },
    ],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://artsaboaria-website.vercel.app",
  },
  {
    id: "artsaboaria",
    title: "Artsaboaria",
    category: "e-commerce",
    description:
      "Artsaboaria é um e-commerce especializado na venda de sabonetes artesanais, com foco em qualidade, sustentabilidade e experiência do usuário. O design clean e elegante, aliado a uma navegação intuitiva, traduz a essência artesanal da marca e proporciona uma experiência de compra diferenciada. Este projeto foi criado para atender à solicitação de demonstração de um cliente real.",
    image: ArtsaboariaImg,
    technologies: [
      {
        title: "Vue.js",
        color: "#41B883",
      },
      {
        title: "Figma",
        color: "#A259FF",
      },
      {
        title: "Spring Boot",
        color: "#6DB33F",
      },
      {
        title: "MySQL",
        color: "#F29111",
      },
      {
        title: "Postman",
        color: "#FF6C38",
      },
    ],
    repository: "https://github.com/seuuser/pigfinance",
    liveDemo: "https://artsaboaria-website.vercel.app",
  },
];

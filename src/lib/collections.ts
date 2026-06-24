export type Category = {
  slug: string;
  name: string;
  image: string;
  count: number;
  description: string;
  subcategories: string[];
};

import colchoes from "@/assets/cat-colchoes.jpg";
import estofados from "@/assets/cat-estofados.jpg";
import salaJantar from "@/assets/cat-sala-jantar.jpg";
import homeOffice from "@/assets/cat-home-office.jpg";
import dormitorio from "@/assets/cat-dormitorio.jpg";
import decoracao from "@/assets/cat-decoracao.jpg";
import iluminacao from "@/assets/cat-iluminacao.jpg";

export const categories: Category[] = [
  {
    slug: "colchoes",
    name: "Colchões",
    image: colchoes,
    count: 42,
    description: "Fabricação própria. Densidade, ergonomia e descanso profundo.",
    subcategories: ["Molas Ensacadas", "Espuma D45", "Híbridos", "Box Baú", "Travesseiros"],
  },
  {
    slug: "estofados",
    name: "Estofados",
    image: estofados,
    count: 36,
    description: "Sofás, poltronas e chaises sob medida, com acabamento de fábrica.",
    subcategories: ["Sofás", "Poltronas", "Chaises", "Recamiers", "Puffs"],
  },
  {
    slug: "sala-de-jantar",
    name: "Sala de Jantar",
    image: salaJantar,
    count: 28,
    description: "Mesas, cadeiras e buffets em madeira maciça e composições atemporais.",
    subcategories: ["Mesas", "Cadeiras", "Buffets", "Aparadores", "Cristaleiras"],
  },
  {
    slug: "dormitorio",
    name: "Dormitório",
    image: dormitorio,
    count: 31,
    description: "Camas, cabeceiras e criados pensados para o ritual do descanso.",
    subcategories: ["Camas", "Cabeceiras", "Criados-mudos", "Cômodas", "Roupeiros"],
  },
  {
    slug: "home-office",
    name: "Home Office",
    image: homeOffice,
    count: 18,
    description: "Escrivaninhas, cadeiras e estantes para um ambiente de trabalho refinado.",
    subcategories: ["Escrivaninhas", "Cadeiras", "Estantes", "Acessórios"],
  },
  {
    slug: "iluminacao",
    name: "Iluminação",
    image: iluminacao,
    count: 22,
    description: "Luminárias que esculpem ambientes — do ambiente intimista ao impacto autoral.",
    subcategories: ["Pendentes", "Arandelas", "Abajures", "Luminárias de Piso"],
  },
  {
    slug: "decoracao",
    name: "Decoração",
    image: decoracao,
    count: 64,
    description: "Objetos curados que dão alma ao cenário — cerâmicas, têxteis e arte.",
    subcategories: ["Vasos", "Quadros", "Tapetes", "Almofadas", "Espelhos"],
  },
];

export type Piece = {
  id: string;
  name: string;
  category: string;
  image: string;
  tag?: string;
  detail: string;
  description?: string;
};

const placeholder = (img: string) => img;

export const pieces: Piece[] = [
  // Estofados
  {
    id: "p1",
    name: "Sofá Vilanova 3 lugares",
    category: "estofados",
    image: placeholder(estofados),
    tag: "Fabricação própria",
    detail: "Linho italiano · 240 cm",
    description:
      "Sofá de três lugares com estrutura em madeira maciça e revestimento em linho italiano. Conforto ergonômico e design atemporal.",
  },
  {
    id: "p2",
    name: "Poltrona Ravello",
    category: "estofados",
    image: placeholder(estofados),
    detail: "Bouclé natural",
    description:
      "Poltrona de leitura com encosto alto e assento profundo. Revestimento em bouclé natural que envelhece com graça.",
  },
  {
    id: "p3",
    name: "Chaise Maré",
    category: "estofados",
    image: placeholder(estofados),
    tag: "Novo",
    detail: "Veludo cotelê terra",
    description:
      "Chaise longue com curva suave e base em madeira escura. Veludo cotelê na tonalidade terra que aquece qualquer ambiente.",
  },
  // Colchões
  {
    id: "p4",
    name: "Colchão Suite Casa Ambiente",
    category: "colchoes",
    image: placeholder(colchoes),
    tag: "Fabricação própria",
    detail: "Molas ensacadas · King",
    description:
      "Colchão premium com molas ensacadas individualmente e camada de memory foam. Fabricado em nossa unidade com controle total de qualidade.",
  },
  {
    id: "p5",
    name: "Colchão Permanência D45",
    category: "colchoes",
    image: placeholder(colchoes),
    detail: "Casal · 25 cm",
    description:
      "Densidade D45 para suporte firme e durabilidade superior. Espuma de alta resiliência que mantem a forma por anos.",
  },
  {
    id: "p6",
    name: "Travesseiro Nuvem Pluma",
    category: "colchoes",
    image: placeholder(colchoes),
    detail: "Microfibra siliconada",
    description:
      "Travesseiro de altura média com enchimento em microfibra siliconada que simula a leveza da pluma natural.",
  },
  // Sala de Jantar
  {
    id: "p7",
    name: "Mesa Carvalho Solano",
    category: "sala-de-jantar",
    image: placeholder(salaJantar),
    tag: "Sob medida",
    detail: "Madeira maciça · 2,20 m",
    description:
      "Mesa de jantar em carvalho maciço com acabamento em óleo natural. Disponível sob medida para o seu ambiente.",
  },
  {
    id: "p8",
    name: "Cadeira Tramada Beira",
    category: "sala-de-jantar",
    image: placeholder(salaJantar),
    detail: "Palhinha natural",
    description:
      "Cadeira com encosto tramado em palhinha natural e assento estofado. Leveza visual e conforto no uso diário.",
  },
  {
    id: "p9",
    name: "Buffet Boavista",
    category: "sala-de-jantar",
    image: placeholder(salaJantar),
    detail: "Freijó · 1,80 m",
    description:
      "Buffet com portas de correr em freijó e puxadores em latão escovado. Interior em madeira marítima com divisórias ajustáveis.",
  },
  // Dormitório
  {
    id: "p10",
    name: "Cabeceira Sereno",
    category: "dormitorio",
    image: placeholder(dormitorio),
    tag: "Fabricação própria",
    detail: "Linho cru · King",
    description:
      "Cabeceira estofada em linho cru com costura aparente e estrutura em pinho de Riga. Fabricação própria com garantia estendida.",
  },
  {
    id: "p11",
    name: "Criado Linha Pura",
    category: "dormitorio",
    image: placeholder(dormitorio),
    detail: "Carvalho natural",
    description:
      "Criado-mudo com duas gavetas e pés torneados em carvalho natural. Puxadores entalhados à mão.",
  },
  {
    id: "p12",
    name: "Cama Box Suite",
    category: "dormitorio",
    image: placeholder(dormitorio),
    detail: "Estofada · Queen",
    description:
      "Cama box estofada com base reforçada e revestimento em tecido impermeável. Compatível com todos os nossos colchões.",
  },
  // Home office
  {
    id: "p13",
    name: "Escrivaninha Atelier",
    category: "home-office",
    image: placeholder(homeOffice),
    detail: "Nogueira · 1,40 m",
    description:
      "Escrivaninha com gavetão central e laterais abertas. Madeira de nogueira com acabamento em cera de abelha.",
  },
  {
    id: "p14",
    name: "Cadeira Couro Editor",
    category: "home-office",
    image: placeholder(homeOffice),
    tag: "Novo",
    detail: "Couro caramelo",
    description:
      "Cadeira de escritório com base giratória em alumínio e assento em couro legítimo caramelo. Ergonomia para horas de trabalho.",
  },
  // Iluminação
  {
    id: "p15",
    name: "Luminária Piso Verso",
    category: "iluminacao",
    image: placeholder(iluminacao),
    detail: "Latão escovado",
    description:
      "Luminária de piso com haste articulada e cúpula em latão escovado. Ideal para leitura e para criar pontos de luz cálida.",
  },
  {
    id: "p16",
    name: "Pendente Mantra",
    category: "iluminacao",
    image: placeholder(iluminacao),
    detail: "Linho · cúpula tambor",
    description:
      "Pendente com cúpula tambor revestida em linho cru e difusor em acrílico fosco. Luz ambiente suave e elegante.",
  },
  // Decoração
  {
    id: "p17",
    name: "Vaso Cerâmica Bruta",
    category: "decoracao",
    image: placeholder(decoracao),
    detail: "Peça assinada · 32 cm",
    description:
      "Vaso em cerâmica artesanal com acabamento bruto e queima em redução. Cada peça é única e assinada pelo ceramista.",
  },
  {
    id: "p18",
    name: "Castiçal Talha",
    category: "decoracao",
    image: placeholder(decoracao),
    detail: "Mármore travertino",
    description:
      "Castiçal esculpido em mármore travertino romano. Base pesada para estabilidade e presença monumental.",
  },
  {
    id: "p19",
    name: "Almofada Linho Greca",
    category: "decoracao",
    image: placeholder(decoracao),
    detail: "50 × 50 cm",
    description:
      "Almofada decorativa em linho pesado com bordado greca em fio de algodão. Enchimento em plumas de ganso.",
  },
  {
    id: "p20",
    name: "Tapete Lã Permanência",
    category: "decoracao",
    image: placeholder(decoracao),
    tag: "Novo",
    detail: "Lã tufada · 2,5 × 3 m",
    description:
      "Tapete em lã nova-iorquina tufada à mão. Textura densa e conforto térmico para ambientes de permanência.",
  },
];

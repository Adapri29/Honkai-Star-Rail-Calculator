import { CharacterForm } from "../components/CharacterForm";
import { LightConeForm } from "../components/LightConeForm";

export const characters = [
  {
    name: "Mydei",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1404.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/warrior.webp",
    rarity: 5,
  },
  {
    name: "Luocha",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1203.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/priest.webp",
    rarity: 5,
  },
  {
    name: "Sunday",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1313.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/shaman.webp",
    rarity: 5,
  },
  {
    name: "Cyrene",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1415.webp",
    element: "https://api.hakush.in/hsr/UI/element/ice.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/memory.webp",
    rarity: 5,
  },
  {
    name: "Firefly",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1310.webp",
    element: "https://api.hakush.in/hsr/UI/element/fire.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/warrior.webp",
    rarity: 5,
  },
  {
    name: "Tingyun",
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1202.webp",
    element: "https://api.hakush.in/hsr/UI/element/thunder.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/shaman.webp",
    rarity: 4,
  },
];

export const lightCones = [
  {
    name: "Flame of Blood, Blaze My Path",
    image: "https://api.hakush.in/hsr/UI/lightconemaxfigures/23039.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/warrior.webp",
    rarity: 5,
    stats: {
      hp: 1375,
      atk: 476,
      def: 396,
    },
  },
];

export const CharacterBuilderPage = () => {
  return (
    <div>
      <CharacterForm />;
      <LightConeForm />
    </div>
  );
};

import { CharacterForm } from "./components/CharacterForm";
import "./App.css";

export const characters = [
  {
    name: "Mydei",
    level: 80,
    eidolon: 0,
    ascension: 6,
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1404.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/warrior.webp",
    rarity: 5,
  },
  {
    name: "Luocha",
    level: 60,
    eidolon: 1,
    ascension: 4,
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1203.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/priest.webp",
    rarity: 5,
  },
  {
    name: "Sunday",
    level: 60,
    eidolon: 1,
    ascension: 4,
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1313.webp",
    element: "https://api.hakush.in/hsr/UI/element/imaginary.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/shaman.webp",
    rarity: 5,
  },
  {
    name: "Cyrene",
    level: 60,
    eidolon: 1,
    ascension: 4,
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1415.webp",
    element: "https://api.hakush.in/hsr/UI/element/ice.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/memory.webp",
    rarity: 5,
  },
  {
    name: "Firefly",
    level: 60,
    eidolon: 1,
    ascension: 4,
    image: "https://api.hakush.in/hsr/UI/avatarshopicon/1310.webp",
    element: "https://api.hakush.in/hsr/UI/element/fire.webp",
    path: "https://api.hakush.in/hsr/UI/pathicon/warrior.webp",
    rarity: 5,
  },
];

const App = () => {
  return (
    <div className="content">
      <CharacterForm {...characters[0]} />
      <CharacterForm {...characters[1]} />
      <CharacterForm {...characters[2]} />
      <CharacterForm {...characters[3]} />
      <CharacterForm {...characters[4]} />
    </div>
  );
};

export default App;

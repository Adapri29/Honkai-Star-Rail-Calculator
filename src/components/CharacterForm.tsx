import { characters } from "../App";
import styles from "./CharacterForm.module.css";
import { Select } from "./Select";

interface Props {
  name: string;
  level: number;
  eidolon: number;
  ascension: number;
  image: string;
  element: string;
  path: string;
  rarity: number;
}

export const CharacterForm = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Character</div>
      <div className={styles.form}>
        <div className={styles.imageWrapper}>
          <img className={styles.characterImage} src={props.image} />
          <div className={styles.element}>
            <img src={props.element} />
          </div>
          <div className={styles.path}>
            <img src={props.path} />
          </div>
          <div className={styles.rarity}>
            <span>✦✦✦✦{props.rarity === 5 ? "✦" : ""}</span>
          </div>
        </div>
        <div className={styles.inputs}>
          <Select
            label="Name"
            options={characters.map((character) => ({
              value: character.name,
              label: character.name,
            }))}
          />
          <div className={styles.row}>
            <Select
              label="Level"
              options={[
                { value: 60, label: "60" },
                { value: 61, label: "61" },
                { value: 62, label: "62" },
                { value: 63, label: "63" },
                { value: 64, label: "64" },
                { value: 65, label: "65" },
                { value: 66, label: "66" },
                { value: 67, label: "67" },
                { value: 68, label: "68" },
                { value: 69, label: "69" },
                { value: 70, label: "70" },
              ]}
              slotProps={{ root: { className: styles.level } }}
            />

            <Select
              options={[
                { value: 0, label: "A0" },
                { value: 1, label: "A1" },
                { value: 2, label: "A2" },
                { value: 3, label: "A3" },
                { value: 4, label: "A4" },
                { value: 5, label: "A5" },
                { value: 6, label: "A6" },
              ]}
              slotProps={{ root: { className: styles.ascention } }}
            />

            <Select
              options={[
                { value: 0, label: "E0" },
                { value: 1, label: "E1" },
                { value: 2, label: "E2" },
                { value: 3, label: "E3" },
                { value: 4, label: "E4" },
                { value: 5, label: "E5" },
                { value: 6, label: "E6" },
              ]}
              slotProps={{ root: { className: styles.eidolon } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

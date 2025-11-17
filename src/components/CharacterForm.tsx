import { useState } from "react";
import { characters } from "../pages/CharacterBuilderPage";
import styles from "./CharacterForm.module.css";
import { Select } from "./Select";

interface Character {
  name: string;
  level: number;
  eidolon: number;
  ascention: number;
  image: string;
  element: string;
  path: string;
  rarity: number;
}

const levelOptions = [
  { min: 1, max: 20 },
  { min: 20, max: 30 },
  { min: 30, max: 40 },
  { min: 40, max: 50 },
  { min: 50, max: 60 },
  { min: 60, max: 70 },
  { min: 70, max: 80 },
];

export const CharacterForm = () => {
  const [form, setForm] = useState<Character | null>(null);

  const fetchCharacter = (name: string) => {
    const character = characters.find((c) => c.name === name);

    if (!character) return;
    setForm({
      level: 1,
      ascention: 0,
      eidolon: 0,
      ...character,
    });
  };

  const onChangeAscention = (newAscention: number) => {
    if (!form) return;

    setForm({
      ...form,
      ascention: newAscention,
      level: levelOptions[newAscention].max,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Character</div>
      <div className={styles.form}>
        <div className={styles.imageWrapper}>
          {form && (
            <>
              <img className={styles.characterImage} src={form?.image} />
              <div className={styles.element}>
                <img src={form?.element} />
              </div>
              <div className={styles.path}>
                <img src={form?.path} />
              </div>
              <div className={styles.rarity}>
                <span>✦✦✦✦{form?.rarity === 5 ? "✦" : ""}</span>
              </div>
            </>
          )}
        </div>
        <div className={styles.inputs}>
          <Select
            label="Name"
            value={form?.name}
            placeholder="Select a character"
            onChange={fetchCharacter}
            options={characters.map((character) => ({
              value: character.name,
              label: character.name,
            }))}
          />
          <div className={styles.row}>
            <Select
              label="Level"
              placeholder="1"
              disabled={form === null}
              value={form?.level}
              onChange={(newLevel) =>
                setForm((prev) => ({ ...prev!, level: newLevel }))
              }
              options={
                form
                  ? Array.from(
                      {
                        length:
                          levelOptions[form?.ascention].max +
                          1 -
                          levelOptions[form?.ascention].min,
                      },
                      (_, i) => ({
                        label: `${levelOptions[form?.ascention].max - i}`,
                        value: levelOptions[form?.ascention].max - i,
                      })
                    )
                  : []
              }
              slotProps={{ root: { className: styles.level } }}
            />

            <Select
              value={form?.ascention}
              placeholder="A0"
              disabled={form === null}
              onChange={onChangeAscention}
              options={[
                { value: 6, label: "A6" },
                { value: 5, label: "A5" },
                { value: 4, label: "A4" },
                { value: 3, label: "A3" },
                { value: 2, label: "A2" },
                { value: 1, label: "A1" },
                { value: 0, label: "A0" },
              ]}
              slotProps={{ root: { className: styles.ascention } }}
            />

            <Select
              value={form?.eidolon}
              placeholder="E0"
              disabled={form === null}
              onChange={(newEidolon) =>
                setForm((prev) => ({ ...prev!, eidolon: newEidolon }))
              }
              options={[
                { value: 6, label: "E6" },
                { value: 5, label: "E5" },
                { value: 4, label: "E4" },
                { value: 3, label: "E3" },
                { value: 2, label: "E2" },
                { value: 1, label: "E1" },
                { value: 0, label: "E0" },
              ]}
              slotProps={{ root: { className: styles.eidolon } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

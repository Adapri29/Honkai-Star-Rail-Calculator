import { useMemo, useState } from "react";
import styles from "./LightConeForm.module.css";
import { Select } from "./Select/Select";
import { lightCones } from "../pages/CharacterBuilderPage";

interface LightCone {
  name: string;
  level: number;
  superposition: number;
  ascention: number;
  image: string;
  path: string;
  rarity: number;
  stats: { hp: number; atk: number; def: number };
}

const levelsRange = [
  { min: 1, max: 20 },
  { min: 20, max: 30 },
  { min: 30, max: 40 },
  { min: 40, max: 50 },
  { min: 50, max: 60 },
  { min: 60, max: 70 },
  { min: 70, max: 80 },
];

const ascentionOptions = Array.from({ length: 7 }, (_, i) => ({
  value: 6 - i,
  label: `A${6 - i}`,
}));

const superpositionOptions = Array.from({ length: 5 }, (_, i) => ({
  value: 5 - i,
  label: `S${5 - i}`,
}));

export const LightConeForm = () => {
  const [form, setForm] = useState<LightCone | null>(null);

  const lightConeOptions = useMemo(
    () =>
      lightCones.map((lightcone) => ({
        value: lightcone.name,
        label: lightcone.name,
      })),
    [lightCones]
  );
  const levelOptions: { label: string; value: number }[] = useMemo(
    () =>
      form
        ? Array.from(
            {
              length:
                levelsRange[form?.ascention].max +
                1 -
                levelsRange[form?.ascention].min,
            },
            (_, i) => ({
              label: `${levelsRange[form?.ascention].max - i}`,
              value: levelsRange[form?.ascention].max - i,
            })
          )
        : [],
    [form?.ascention]
  );

  const handleNameChange = (value: string) => {
    const lightCone = lightCones.find((l) => l.name === value);

    if (!lightCone) return;
    setForm({
      level: 1,
      ascention: 0,
      superposition: 1,
      ...lightCone,
    });
  };

  const handleAscentionChange = (value: number) => {
    setForm((prev) => ({
      ...prev!,
      ascention: value,
      level: levelsRange[value].max,
    }));
  };

  const onChange = (value: any, name?: string) => {
    if (!name) return;
    if (name === "name") handleNameChange(value);
    else if (name === "ascention") handleAscentionChange(value);
    else setForm((prev) => ({ ...prev!, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Light Cone</div>
      <div className={styles.form}>
        <div className={styles.imageWrapper}>
          {form && (
            <>
              <img className={styles.characterImage} src={form?.image} />
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
            name="name"
            value={form?.name}
            placeholder="Select a character"
            onChange={onChange}
            options={lightConeOptions}
            slotProps={{ root: { className: styles.name } }}
          />
          <div className={styles.row}>
            <Select
              label="Level"
              name="level"
              placeholder="1"
              disabled={form === null}
              value={form?.level}
              onChange={onChange}
              options={levelOptions}
              slotProps={{ root: { className: styles.level } }}
            />

            <Select
              value={form?.ascention}
              name="ascention"
              placeholder="A0"
              disabled={form === null}
              onChange={onChange}
              options={ascentionOptions}
              slotProps={{ root: { className: styles.ascention } }}
            />

            <Select
              value={form?.superposition}
              name="superposition"
              placeholder="S0"
              disabled={form === null}
              onChange={onChange}
              options={superpositionOptions}
              slotProps={{ root: { className: styles.superposition } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

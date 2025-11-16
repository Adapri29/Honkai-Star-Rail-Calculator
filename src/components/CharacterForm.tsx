import styles from "./CharacterForm.module.css";

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
          <div className={`${styles.inputWrapper} ${styles.name}`}>
            <span>Name</span>
            <input value={props.name} />
          </div>
          <div className={styles.row}>
            <div className={`${styles.inputWrapper} ${styles.level}`}>
              <span>Level</span>
              <input value={props.level} />
            </div>
            <div className={`${styles.inputWrapper} ${styles.ascention}`}>
              <span></span>
              <input value={`A${props.ascension}`} />
            </div>
            <div className={`${styles.inputWrapper} ${styles.eidolon}`}>
              <span></span>
              <input value={`E${props.eidolon}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

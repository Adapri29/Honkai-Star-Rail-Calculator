import { useState } from "react";
import styles from "./Select.module.css";

interface Props {
  label?: string;
  options: { value: any; label: string }[];
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
    label?: React.HTMLAttributes<HTMLSpanElement>;
    trigger?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    listbox?: React.HTMLAttributes<HTMLUListElement>;
    option?: React.LiHTMLAttributes<HTMLLIElement>;
  };
}

export const Select = ({ label, options, slotProps }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(options[0].value ?? "");

  const { className: rootClassName, ...rootProps } = slotProps?.root ?? {};
  const { className: labelClassName, ...labelProps } = slotProps?.label ?? {};
  const { className: triggerClassName, ...triggerProps } =
    slotProps?.trigger ?? {};
  const { className: listboxClassName, ...listboxProps } =
    slotProps?.listbox ?? {};
  const {
    className: optionClassName,
    // onClick: optionOnClick,
    ...optionProps
  } = slotProps?.option ?? {};

  const selectOption = (option: string) => {
    setValue(option);
    setOpen(false);
  };

  return (
    <div className={`${styles.root} ${rootClassName ?? ""}`} {...rootProps}>
      <span
        className={`${styles.label} ${labelClassName ?? ""}`}
        {...labelProps}
      >
        {label}
      </span>
      <button
        className={`${styles.trigger}  ${triggerClassName ?? ""}`}
        onClick={() => setOpen((prev) => !prev)}
        {...triggerProps}
      >
        {options.find((opt) => opt.value === value)?.label}
      </button>
      {open && (
        <ul
          className={`${styles.listbox} ${listboxClassName ?? ""}`}
          {...listboxProps}
        >
          {options.map((opt) => (
            <li
              className={`${styles.option} ${optionClassName ?? ""}`}
              key={opt.value}
              onClick={() => selectOption(opt.value)}
              {...optionProps}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

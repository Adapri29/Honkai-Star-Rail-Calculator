import { useState } from "react";
import styles from "./Select.module.css";

interface Props {
  label?: string;
  value: any;
  disabled?: boolean;
  placeholder?: string;
  options?: { value: any; label: string }[];
  onChange: (value: any) => void;
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
    label?: React.HTMLAttributes<HTMLSpanElement>;
    trigger?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    listbox?: React.HTMLAttributes<HTMLUListElement>;
    option?: React.LiHTMLAttributes<HTMLLIElement>;
  };
}

export const Select = ({
  label,
  value,
  options,
  slotProps,
  placeholder,
  disabled = false,
  onChange,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(value);
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
    onChange(option);
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
        disabled={disabled}
        className={`${styles.trigger}  ${triggerClassName ?? ""} ${
          value === undefined ? styles.placeholder : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
        {...triggerProps}
      >
        {options?.find((opt) => opt.value === value)?.label ?? placeholder}
      </button>
      {open && (
        <ul
          className={`${styles.listbox} ${listboxClassName ?? ""}`}
          {...listboxProps}
        >
          {options &&
            options.map((opt) => (
              <li
                className={`${styles.option} ${optionClassName ?? ""} ${
                  opt.value === value ? styles.selected : ""
                }`}
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

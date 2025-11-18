import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";

interface Props {
  name?: string;
  label?: string;
  value: any;
  disabled?: boolean;
  placeholder?: string;
  options?: { value: any; label: string }[];
  onChange: (value: any, name?: string) => void;
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
    label?: React.HTMLAttributes<HTMLSpanElement>;
    trigger?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    listbox?: React.HTMLAttributes<HTMLUListElement>;
    option?: React.LiHTMLAttributes<HTMLLIElement>;
  };
}

export const Select = ({
  name,
  label,
  value,
  options,
  slotProps,
  placeholder,
  disabled = false,
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const selectOption = (value: string) => {
    onChange(value, name);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`${styles.root} ${rootClassName ?? ""}`}
      {...rootProps}
    >
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
        onClick={() => setIsOpen((prev) => !prev)}
        {...triggerProps}
      >
        {options?.find((opt) => opt.value === value)?.label ?? placeholder}
      </button>
      {isOpen && (
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

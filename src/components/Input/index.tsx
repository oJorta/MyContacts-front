import styles from './input.module.css';

type InputProps = {
  placeholder: string;
}

export default function Input({ placeholder } : InputProps) {
  return (
    <>
      <input type="text" placeholder={placeholder || "Placeholder"} className={styles.input} />
    </>
  )
}

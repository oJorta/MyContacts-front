import styles from './select.module.css';

type SelectProps = {
  children: React.ReactNode;
}

export default function Select({ children } : SelectProps) {
  return (
    <>
      <select placeholder="nome" className={styles.input}>
        {children}
      </select>
    </>
  )
}

import styles from './contactslist.module.css'
import Link from 'next/link'

export default function ContactsList() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.listHeader}>
          <strong>3 contatos</strong>
          <Link href="/new-contact">Novo contato</Link>
        </header>
      </div>
    </>
  )
}

import styles from './contactslist.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ListCard from '../ListCard'

import arrow from "@/assets/images/icons/arrow.svg"

export default function ContactsList() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.listHeader}>
          <strong>3 contatos</strong>
          <Link href="/new-contact">Novo contato</Link>
        </header>

        <div className={styles.listContainer}>
          <header>
            <button type='button'>
              <span>Nome</span>
              <Image src={arrow} alt="arrow" />
            </button>
          </header>

          <ListCard />
          <ListCard />
          <ListCard />

        </div>
      </div>
    </>
  )
}

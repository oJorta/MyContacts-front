import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ListCard from '../components/ListCard'

import arrow from "@/assets/images/icons/arrow.svg"

export default function Home() {
  return (
      <>
      <div className={styles.container}>

        <div className={styles.inputSearchContainer}>
          <input type="text" placeholder='Pesquisar contato'/>
        </div>

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

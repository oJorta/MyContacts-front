import styles from './listcard.module.css'
import Link from 'next/link'
import Image from 'next/image'

import edit from "@/assets/images/icons/edit.svg"
import trash from "@/assets/images/icons/trash.svg"

export default function ListCard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.contactName}>
            <strong>João Pedro</strong>
            <small>instagram</small>
          </div>
          <span>joao@email.com.br</span>
          <span>(73) 99999-9999</span>
        </div>

        <div className={styles.actions}>
          <Link href="/edit-contact">
            <Image src={edit} alt="Edit" />
          </Link>
          <button type='button'>
            <Image src={trash} alt="Delete" />
          </button>
        </div>
      </div>
    </>
  )
}

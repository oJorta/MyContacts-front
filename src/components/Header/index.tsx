import styles from './header.module.css'
import Image from 'next/image'

import Logo from '@/../public/icons/Logo.svg'

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <Image src={Logo} alt='Logo MyContacts'/>
        <div className={styles.inputSearchContainer}>
          <input type="text" placeholder='Pesquisar contato'/>
        </div>
      </header>
    </>
  )
}

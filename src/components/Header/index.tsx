import styles from './header.module.css'
import Image from 'next/image'

import Logo from '@/../public/images/Logo.svg'

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <Image src={Logo} alt='Logo MyContacts'/>
      </header>
    </>
  )
}

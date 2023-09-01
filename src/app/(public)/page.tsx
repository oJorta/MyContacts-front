import styles from './page.module.css'

import Header from '@/components/Header'
import ContactsList from '@/components/ContactsList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <ContactsList />
    </div>
  )
}

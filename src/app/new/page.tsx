import styles from "./newcontact.module.css"

import PageHeader from "@/components/PageHeader"
import Input from "@/components/Input"
import Select from "@/components/Select"

export default function NewContact() {
  return (
    <div className={styles.container}>
      <PageHeader title="Novo contato"/>
      <Input placeholder="Nome"/>
      <Select>
        <option value="ig">Instagram</option>
        <option value="twitter">Twitter</option>
      </Select>
    </div>
  )
}

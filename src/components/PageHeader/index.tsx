import styles from "./pageheader.module.css";

import Link from "next/link";
import Image from "next/image";

import arrow from "@/assets/images/icons/arrow.svg";

type PageHeaderProps = {
  title: string;
}

export default function PageHeader({ title } : PageHeaderProps) {
  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <Image src={arrow} alt="Arrow Icon"/>
          <span>Voltar</span>
        </Link>
        <h1>{title}</h1>
      </header>
    </>
  );
}

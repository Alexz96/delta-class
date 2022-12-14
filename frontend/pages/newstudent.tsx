import Head from "next/head";
import NextLink from "next/link"
import FormStudent from "../components/FormStudent";
import styles from "../styles/NewStudent.module.css"

export default function NewStudent() {
  return (
    <div>
      <Head>
        <title>Novo aluno - Delta Classes</title>
        <meta name="description" content="App created for Delta's challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextLink href="/">
        <button className={styles.myButton}>Voltar</button>
      </NextLink>
      <FormStudent />
    </div>
  );
}

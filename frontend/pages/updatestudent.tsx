import { useRouter } from "next/router";
import Head from "next/head";
import FormStudent from "../components/FormStudent";

export default function UpdateStudent() {
  const router = useRouter();
  const id = router.query.id ? +router.query.id : 0;

  return (
    <div>
      <Head>
        <title>Atualizar aluno - Delta Classes</title>
        <meta name="description" content="App created for Delta's challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormStudent id={id} />
    </div>
  );
}

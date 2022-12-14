import Head from "next/head";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delta Classes</title>
        <meta name="description" content="App created for Delta's challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu title="Delta Class" />
      </main>
    </div>
  );
}

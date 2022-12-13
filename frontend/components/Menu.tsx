import styles from "../styles/Menu.module.css";
import NextLink from "next/link";

interface MenuOptionsProps {
  title: string;
}

export default function Menu(options: MenuOptionsProps) {
  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>{options.title}</h1>
      <div>
        <NextLink href="/newstudent">
          <button className={styles.button}>Adicionar aluno</button>
        </NextLink>
      </div>
      <div>
        <NextLink href="/liststudents">
          <button className={styles.button}>Visualizar alunos</button>
        </NextLink>
      </div>
    </div>
  );
}

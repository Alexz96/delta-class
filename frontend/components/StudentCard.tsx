import styles from "../styles/StudentCard.module.css";
import Image from "next/image";
import { FiTrash, FiChevronsRight } from "react-icons/fi";
import axios from "axios";
import NextLink from "next/link";

interface StudentCardProps {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  fotoUrl?: string;
}

export default function StudentCard(props: StudentCardProps) {
  function deleteStudent() {
    axios
      .delete("http://localhost:3333/aluno", { data: { id: props.id } })
      .then((res) => {
        if (res.status === 200) {
          alert("Excluído com sucesso!");
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Houve um erro.");
      });
  }

  return (
    <div className={styles.card}>
      <div className={styles.texto}>
        <span>{props.id}</span>
        <span>{props.nome}</span>
      </div>
      <div className={styles.dados}>
        <span>{props.endereco}</span>
        <span>{props.telefone}</span>
      </div>
      <div className={styles.baixo}>
        <Image
          width={50}
          height={50}
          alt="Avatar"
          src={
            props.fotoUrl ? props.fotoUrl : "https://via.placeholder.com/150"
          }
          className={styles.img}
        />
        <div className={styles.icones}>
          <FiTrash
            size={25}
            color="#e63946"
            className={styles.button}
            onClick={deleteStudent}
          />
          <NextLink href={`/updatestudent?id=${props.id}`}>
            <FiChevronsRight size={25} className={styles.button} />
          </NextLink>
        </div>
      </div>
    </div>
  );
}

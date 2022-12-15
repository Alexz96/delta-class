import StudentCard from "../components/StudentCard";
import AlunoModel from "../models/Aluno";
import NextLink from "next/link";
import Head from "next/head";

interface ListStudentsProps {
  arrStudents: AlunoModel[];
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3333/alunos");
  const alunos = await res.json();

  let arrStudents: AlunoModel[] = [];

  arrStudents = alunos.data;

  return {
    props: {
      arrStudents,
    },
  };
}

export default function List(props: ListStudentsProps) {
  function renderStudents() {
    if (props.arrStudents.length > 0) {
      return props.arrStudents.map((student, i) => {
        return (
          <StudentCard
            id={student.id}
            nome={student.nome}
            endereco={student.endereco}
            telefone={student.telefone}
            key={student.nome + "-" + i}
          />
        );
      });
    } else {
      return (
        <div>
          <h2>Sem alunos cadastrados</h2>
          <NextLink href={"/newstudent"}>Cadastrar</NextLink>
        </div>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>Listagem de alunos - Delta Classes</title>
        <meta name="description" content="List of students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Listing students</h1>
      {renderStudents()}
    </div>
  );
}

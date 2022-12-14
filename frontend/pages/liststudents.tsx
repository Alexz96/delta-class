import AlunoModel from "../models/Aluno";

interface ListStudentsProps {
  arrStudents: AlunoModel[];
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3333/alunos");
//   const alunos = await res.json();

//   let arrStudents: AlunoModel[] = [];

//   arrStudents = alunos.data

//   return {
//     props: {
//       arrStudents,
//     },
//   };
// }

export default function List(props: ListStudentsProps) {

//   function renderStudents() {
//     return props.arrStudents.map((student, i) => {
//       return <div key={i}>{student.nome}</div>;
//     });
//   }

  return (
    <div>
      <h1>Listing students</h1>
      {/* {renderStudents()} */}
    </div>
  );
}

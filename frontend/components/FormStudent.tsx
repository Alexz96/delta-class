import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FormStudent.module.css";

interface FormStudentProps {
  id?: number;
}

export default function FormStudent(props: FormStudentProps) {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");

  useEffect(() => {
    if (props.id && props.id !== 0) {
      axios
        .get(`http://localhost:3333/getDadosAluno?id=${props.id}`)
        .then((res) => {
          setNome(res.data.data[0].nome);
          setEndereco(res.data.data[0].endereco);
          setTelefone(res.data.data[0].telefone);
        })
        .catch((error) => {
          console.log(error);
          alert("Erro na busca de dados!");
        });
    }
  });

  function isUpdate() {
    return props.id !== undefined;
  }

  const uploadAvatarImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      const body = new FormData();
      body.append("avatar", image);

      if (id !== 0) {
        axios
          .post(`http://localhost:3333/aluno/foto?id=${id}`, body, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            alert("Envio da foto com sucesso!");
          })
          .catch((error) => {
            console.log("Erro Upload Foto: ", error);
            alert("Erro ao enviar foto!");
          });
      } else if (props.id) {
        axios
          .post(`http://localhost:3333/aluno/foto?id=${props.id}`, body, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            const url = res.data.data[0].fotoUrl;
            setFotoUrl(url);
            alert("Envio da foto com sucesso!");
          })
          .catch((error) => {
            console.log("Erro Upload Foto: ", error);
            alert("Erro ao enviar foto!");
          });
      } else {
        alert("Você deve cadastrar um aluno primeiro");
      }
    }
  };

  function submitForm() {
    if (isUpdate()) {
      if (fotoUrl !== "") {
        axios
          .put("http://localhost:3333/aluno", {
            id: props.id,
            nome,
            endereco,
            telefone,
            fotoUrl,
          })
          .then((res) => {
            console.log(res);
            alert("Sucesso ao atualizar!");
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao atualizar!");
          });
      } else {
        axios
          .put("http://localhost:3333/aluno", {
            id: props.id,
            nome,
            endereco,
            telefone,
          })
          .then((res) => {
            console.log(res);
            alert("Sucesso ao atualizar!");
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao atualizar!");
          });
      }
    } else {
      if (fotoUrl !== "") {
        axios
          .post("http://localhost:3333/alunos", {
            nome,
            endereco,
            telefone,
            fotoUrl,
          })
          .then((res) => {
            console.log(res);
            setId(res.data.data[0].id);
            alert("Sucesso ao cadastrar!");
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar!");
          });
      } else {
        axios
          .post("http://localhost:3333/alunos", {
            nome,
            endereco,
            telefone,
          })
          .then((res) => {
            console.log(res);
            setId(res.data.data[0].id);
            alert("Sucesso ao cadastrar!");
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar!");
          });
      }
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Adicionar aluno</h1>
      <div>
        <form className={styles.formBackground}>
          <label htmlFor="nome" className={styles.myLabels}>
            Nome:{" "}
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            className={styles.inputs}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="endereco" className={styles.myLabels}>
            Endereço:{" "}
          </label>
          <input
            type="text"
            name="endereco"
            id="endereco"
            value={endereco}
            className={styles.inputs}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <label htmlFor="telefone" className={styles.myLabels}>
            Telefone:{" "}
          </label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            value={telefone}
            className={styles.inputs}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="file"
            name="foto"
            id="foto"
            value={fotoUrl}
            onChange={uploadAvatarImage}
          />
          <button type="button" className={styles.button} onClick={submitForm}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

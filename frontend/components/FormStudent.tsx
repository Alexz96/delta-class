import { useState } from "react";
import axios from "axios";
import styles from "../styles/FormStudent.module.css";

export default function FormStudent() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");

  const uploadAvatarImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      const params = new URLSearchParams();
      params.append("avatar", image);

      axios
        .post("http://localhost:3333/aluno/foto?id=6", params)
        .then((res) => {
          // TODO: CRIAR RETORNO DA URL DO ARQUIVO NO BACKEND E SALVAR NO fotoUrl PARA ENVIAR
        })
        .catch((error) => {
          console.log("Erro Upload Foto: ", error);
        });
    }
  };

  function submitForm() {
    setFotoUrl("apenas/um/teste");

    axios
      .post("http://localhost:3333/alunos", {
        nome,
        endereco,
        telefone,
        fotoUrl,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
            className={styles.inputs}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="file"
            name="foto"
            id="foto"
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

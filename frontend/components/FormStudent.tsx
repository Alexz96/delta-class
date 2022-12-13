import { useState } from "react"

export default function FormStudent() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fotoUrl, setFotoUrl] = useState('');

    return (
        <div>
            <h1>Adicionar aluno</h1>
            <div>
                <input type="text" name="nome" id="nome" />
            </div>
        </div>
    )
}
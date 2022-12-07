const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const alunos = await connection("alunos").select("*");

    return response.json({
      code: 200,
      message: "Busca concluída!",
      data: alunos,
    });
  },

  async create(request, response) {
    const { nome, endereco, telefone, fotoUrl } = request.body;

    await connection("alunos").insert({
      nome,
      endereco,
      telefone,
      fotoUrl,
    });

    return response.status(201).json({
      message: "Cadastrado com sucesso!",
      data: [],
    });
  },

  async delete(request, response) {
    const { id } = request.body;

    await connection("alunos").where("id", id).del(["id", "nome"]);

    return response.status(200).json({
      message: `Aluno excluído com sucesso`,
      data: [],
    });
  },

  async update(request, response) {
    const dados = request.body;

    console.log(request);

    await connection("alunos").where("id", dados.id).update(dados);

    return response.json({
      message: "Atualizado com sucesso!",
      data: [],
    });
  },

  async uploadFoto(request, response) {
    console.log(request);

    const { id } = request.query;
    const { path } = request.file;

    await connection("alunos").where("id", id).update({ fotoUrl: path });

    return response.status(200).json({
      message: "Atualizado foto de perfil com sucesso!",
      data: [],
    });
  },
};

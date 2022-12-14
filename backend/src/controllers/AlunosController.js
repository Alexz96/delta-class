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

    const alunoCadastrado = await connection("alunos")
      .insert({
        nome,
        endereco,
        telefone,
        fotoUrl,
      })
      .returning("id");

    return response.status(201).json({
      message: "Cadastrado com sucesso!",
      data: alunoCadastrado,
    });
  },

  async delete(request, response) {
    const { id } = request.body;

    await connection("alunos").where("id", id).del(["id", "nome"]);

    return response.status(200).json({
      message: "Aluno excluído com sucesso",
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
    const { id } = request.query;
    const { path } = request.file;

    const caminhoArquivo = await connection("alunos")
      .where("id", id)
      .update({ fotoUrl: path })
      .returning("fotoUrl");

    return response.status(200).json({
      message: "Atualizado foto de perfil com sucesso!",
      data: caminhoArquivo,
    });
  },

  async show(request, response) {
    const { id } = request.query;

    const dados = await connection("alunos").where("id", id).select("*");

    return response.status(200).json({
      message: "Busca concluída com sucesso!",
      data: dados,
    });
  },
};

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

    return response.json({
      code: 200,
      message: "Cadastrado com sucesso!",
      data: [],
    });
  },

  async delete(request, response) {
    return response.json({ message: "Implementar" });
  },

  async update(request, response) {
    return response.json({ message: "Implementar" });
  },
};

export default class AlunoModel {
  #id: number;
  #nome: string;
  #endereco: string;
  #telefone: string;
  #fotoUrl: string;

  constructor(
    id: number,
    nome: string,
    endereco: string,
    telefone: string,
    fotoUrl: string
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#endereco = endereco;
    this.#telefone = telefone;
    this.#fotoUrl = fotoUrl;
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get endereco() {
    return this.#endereco;
  }

  get telefone() {
    return this.#telefone;
  }

  get fotoUrl() {
    return this.#fotoUrl;
  }

  static fromObject(obj: AlunoModel): AlunoModel {
    return new AlunoModel(
      obj.id,
      obj.nome,
      obj.endereco,
      obj.telefone,
      obj.fotoUrl
    );
  }

  toObject() {
    return {
      id: this.#id,
      nome: this.#nome,
      endereco: this.#endereco,
      telefone: this.#telefone,
      fotoUrl: this.#fotoUrl,
    };
  }
}

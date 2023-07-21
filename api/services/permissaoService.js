const database = require("../models");
const uuid = require("uuid");

class PermissaoService {
  async cadastrar(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        nome: dto.nome,
      },
    });

    if (permissao) {
      throw new Error("Permissão já cadastrada");
    }

    try {
      const novaPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return novaPermissao;
    } catch (error) {
      throw new Error("Erro ao cadastrar nova permissão.");
    }
  }

  async buscarTodasPermissoes() {
    const permissoes = await database.permissoes.findAll();
    return permissoes;
  }

  async buscarPermissaoPorId(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!permissao) {
      throw new Error("Permissão informada não cadastrada!");
    }

    return permissao;
  }

  async editarPermissao(dto) {
    const permissao = await this.buscarPermissaoPorId(dto.id);

    try {
      permissao.nome = dto.nome;
      permissao.descricao = dto.descricao;
      await permissao.save();
      return permissao;
    } catch (error) {
      throw new Error("Erro ao editar permissão.");
    }
  }

  async deletarPermissao(dto) {
    const permissao = await this.buscarPermissaoPorId(dto.id);
    if (!permissao) {
      throw new Error("Permissão não encontrada");
    }

    try {
      await database.permissoes.destroy({
        where: {
          id: dto.id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar deletar o permissão!");
    }
  }
}

module.exports = PermissaoService;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('alunos', function(table) {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('endereco').notNullable();
    table.string('telefone').notNullable();
    table.string('fotoUrl');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('alunos');
};

/**
 * Aplicacao.js
 *
 * @description :: Representative model from Aplicacao table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'aplicacao',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqAplicacao: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_aplicacao'
    },
    aplicacao: {
      type: 'string',
      required: true
    },
    descricao: {
      type: 'string',
      required: true
    },
    seqModulo: {
      type: 'integer',
      columnName: 'seq_modulo'
    }
  }
};

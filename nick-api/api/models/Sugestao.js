/**
 * Sugestao.js
 *
 * @description :: Representative model from Sugestao table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'sugestao',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqSugestao: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_sugestao'
    },
    descricao: {
      type: 'string',
      required: true
    },
    detalhes: {
      type: 'string',
      required: true
    }
  }
};

/**
 * Modulo.js
 *
 * @description :: Representative model from Modulo table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'modulo',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqModulo: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_modulo'
    },
    modulo: {
      type: 'string',
      required: true
    },
    sigla: {
      type: 'string',
      required: true
    },
    descricao: {
      type: 'string',
      required: true
    }
  }
};

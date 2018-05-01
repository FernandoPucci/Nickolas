/**
 * Anexo.js
 *
 * @description ::  Representative model from Anexo table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'anexo',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqAnexo: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_anexo'
    },
    descricao: {
      type: 'string',
      required: true
    },
    anexo: {
      type: 'string',
      required: true
    },
    seqErro: {
      type: 'integer',
      columnName: 'seq_erro'
    }
  }
};

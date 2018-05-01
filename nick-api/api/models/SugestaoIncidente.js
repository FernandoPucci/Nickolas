/**
 * SugestaoIncidente.js
 *
 * @description :: Representative model from SugestaoIncidente table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'sugestao_erro',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqSugestaoErro: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_sugestao_erro'
    },
    seqErro: {
      type: 'integer',
      required: true,
      columnName: 'seq_erro'
    },
    seqSugestao: {
      type: 'integer',
      required: true,
      columnName: 'seq_sugestao'
    },
    ocorrencia: {
      type: 'integer',
      defaultsTo: 0
    },
    relevancia: {
      type: 'decimal',     
      defaultsTo: 0
    },
    contorno: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};

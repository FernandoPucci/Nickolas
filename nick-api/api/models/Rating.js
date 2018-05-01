/**
 * Rating.js
 *
 * @description :: Representative model from Rating table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 //configurations to disable UpdateAt and CreatedAt Waterline Columns
 tableName: 'rating',
 autoCreatedAt: false,
 autoUpdatedAt: false,
 attributes: {

   seqRating: {
     type: 'integer',
     autoIncrement: true,
     unique: true,
     primaryKey: true,
     columnName: 'seq_rating'
   },
   seqPtf: {
    type: 'integer',
    required: true,
    columnName: 'seq_ptf'
  },
  seqModulo: {
    type: 'integer',
    required: true,
    columnName: 'seq_modulo'
  },
  seqAplicacao: {
    type: 'integer',
    required: true,
    columnName: 'seq_aplicacao'
  },
   seqSugestaoErro: {
     type: 'integer',
     required: true,
     columnName: 'seq_sugestao_erro'
   },
   stacktrace: {
    type: 'string'
  },
   solucionado: {
     type: 'string',
     defaultsTo: 'N'
   },
   rating: {
     type: 'decimal',     
     defaultsTo: 0
   },
   totalSim: {
     type: 'integer',
     defaultsTo: 0,
     columnName: 'total_sim'
   },
   totalNao: {
    type: 'integer',
    defaultsTo: 0,
    columnName: 'total_nao'
  }
 }
};

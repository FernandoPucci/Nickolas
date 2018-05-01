/**
 * Incidente.js
 *
 * @description :: Representative model from Erro table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'erro',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqErro: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_erro'
    },
    titulo: {
      
      type: 'string',
      required: true
    },
    descricao: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'string',
      required: true
    },
    ocorrencia: {
      type: 'integer',
      defaultsTo: 0
    },
   relevancia: {
      type: 'decimal',     
      defaultsTo: 0
    },
    detalhes: {
      type: 'string',
      required: true
    },
    seqAplicacao: {
      type: 'integer',
      required: true,
      columnName: 'seq_aplicacao'
    }
  }
};

/**
 * Ptf.js
 *
 * @description :: Representative model from Ptf table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'ptf',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqPtf: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_ptf'
    },
    versao: {
      type: 'string',
      required: true
    },
    sprint: {
      type: 'string',
      required: true
    },
    release: {
      type: 'string',
      required: true
    }
  }
};

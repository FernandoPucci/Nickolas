/**
 * PtfModulo.js
 *
 * @description :: Representative model from PtfModulo table
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //configurations to disable UpdateAt and CreatedAt Waterline Columns
  tableName: 'ptf_modulo',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    seqPtfModulo: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'seq_ptf_modulo'
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
    }
  }
};

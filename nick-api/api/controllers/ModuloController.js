/**
 * ModuloController
 *
 * @description :: Server-side logic for managing moduloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  aplicacoes: function (req, res) {
    if (req.param('modulo_id')) {
      Modulo.query(" SELECT A.SEQ_APLICACAO " +
        " ,	A.APLICACAO " +
        " , 	A.DESCRICAO AS DESC_APLICACAO " +
        " , 	M.SEQ_MODULO " +
        " , 	M.MODULO " +
        " , 	M.SIGLA " +
        " , 	M.DESCRICAO AS DESC_MODULO" +

        " FROM APLICACAO A	  " +
        " JOIN MODULO M ON M.SEQ_MODULO = A.SEQ_MODULO " +
        " WHERE M.SEQ_MODULO = '" + req.param('modulo_id') + "' ORDER BY A.DESCRICAO ",
        function (err, results) {
          if (err)
            return res.serverError(err);

          if (results.rowCount == 0)
            return res.notFound();

          return res.ok(results.rows);
        });
    } else return res.serverError("Parâmetro 'modulo_id' não pode ser nulo. \n Experimente: \n '/api/modulos/aplicacoes?modulo_id=valor_modulo_id' ");
  }
};

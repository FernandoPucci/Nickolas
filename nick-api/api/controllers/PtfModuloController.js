/**
 * PtfModuloController
 *
 * @description :: Server-side logic for managing Ptfmoduloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  ptf: function (req, res) {
    if (req.param('id')) {
      Modulo.query(" SELECT P.SEQ_PTF " +
        " ,	P.VERSAO " +
        " ,	P.SPRINT " +
        " ,	P.RELEASE " +

        " ,	M.SEQ_MODULO " +
        " ,	M.MODULO " +
        " ,	M.SIGLA " +
        " ,	M.DESCRICAO " +

        " FROM PTF P  " +
        " JOIN PTF_MODULO PM ON PM.SEQ_PTF = P.SEQ_PTF " +
        " JOIN MODULO M ON PM.SEQ_MODULO = M.SEQ_MODULO " +
        " AND P.SEQ_PTF =  '" + req.param('id') + "' ORDER BY M.MODULO ",
        function (err, results) {
          if (err)          
            return res.serverError(err);

          if (results.rowCount == 0)
            return res.notFound();
            
          return res.ok(results.rows);
        });
    } else return res.serverError("Parâmetro 'id' não pode ser nulo. \n Experimente: \n '/api/ptfmodulos/ptf?id=id_ptf' ");

  }
};

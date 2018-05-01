/**
 * IncidenteController
 *
 * @description :: Server-side logic for managing erroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  aplicacoes: function (req, res) {
    if (req.param('aplicacao_id')) {
      Incidente.query(" SELECT APP.APLICACAO " +
        " , APP.DESCRICAO " +
        " , APP.SEQ_MODULO " +
        " , M.DESCRICAO AS DESC_MODULO" +
        " , M.MODULO " +
        " , E.SEQ_ERRO " +
        " , E.TITULO " +
        " , E.DESCRICAO " +
        " , E.TAGS " +
        " , E.OCORRENCIA " +
        " , E.RELEVANCIA " +
        " , E.DETALHES " +
        " , E.SEQ_APLICACAO " +
        "  FROM ERRO E " +
        "  JOIN APLICACAO APP ON E.SEQ_APLICACAO = APP.SEQ_APLICACAO " +
        "  JOIN MODULO M ON M.SEQ_MODULO = APP.SEQ_MODULO " +
        "  AND APP.SEQ_APLICACAO ='" + req.param('aplicacao_id') + "' ORDER BY APP.DESCRICAO ",
        function (err, results) {
          if (err)
            return res.serverError(err);

          if (results.rowCount == 0)
            return res.notFound();

          return res.ok(results.rows);
        });
    } else return res.serverError("Parâmetro 'aplicacao_id' não pode ser nulo. \n Experimente: \n '/api/erros/aplicacoes?aplicacao_id=valor_aplicacao_id' ");
  }
};

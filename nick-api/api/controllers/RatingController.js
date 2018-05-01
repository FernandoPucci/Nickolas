/**
 * RatingController
 *
 * @description :: Server-side logic for managing Ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  sugestaoerro: function (req, res) {
    if (req.param('sugestao_erro_id')) {
      Rating.query("SELECT SE.SEQ_SUGESTAO_ERRO AS SEQ_SUGESTAO_ERRO " +
        " , A.SEQ_APLICACAO " +
        " , A.APLICACAO " +
        " , A.DESCRICAO AS DESCRICAO_APLICACAO " +
        " , E.TITULO AS ERRO " +
        " , M.DESCRICAO AS MODULO " +
        " , CONCAT(P.VERSAO, '_', P.SPRINT, '_', P.RELEASE) AS PTF " +
        " , ROUND(AVG(R.RATING),1) AS RATING_MEDIO " +
        " , AVG(R.RATING) AS RATING_MEDIO_FULL " +
        " , SUM(R.TOTAL_SIM) AS TOTAL_SIM " +
        " , SUM(R.TOTAL_NAO) AS TOTAL_NAO " +
        " FROM RATING R " +
        " JOIN  APLICACAO A ON R.SEQ_APLICACAO = A.SEQ_APLICACAO " +
        " JOIN  SUGESTAO_ERRO SE ON R.SEQ_SUGESTAO_ERRO = SE.SEQ_SUGESTAO_ERRO " +
        " JOIN  MODULO M ON R.SEQ_MODULO = M.SEQ_MODULO " +
        " JOIN PTF P ON R.SEQ_PTF = P.SEQ_PTF " +
        " JOIN  ERRO E ON SE.SEQ_ERRO = E.SEQ_ERRO " +
        " WHERE SE.SEQ_SUGESTAO_ERRO = '" + req.param('sugestao_erro_id') + "' " +
        " GROUP BY " +
        " SE.SEQ_SUGESTAO_ERRO  " +
        " , A.SEQ_APLICACAO " +
        " , A.APLICACAO " +
        " , A.DESCRICAO  " +
        " , E.TITULO " +
        " , M.DESCRICAO  " +
        " , P.VERSAO " +
        " , P.SPRINT " +
        "  , P.RELEASE;  ",
        function (err, results) {
          if (err)
            return res.serverError(err);

          if (results.rowCount == 0)
            return res.notFound();

          return res.ok(results.rows);
        });
    } else return res.serverError("Parâmetro 'sugestao_erro_id' não pode ser nulo. \n Experimente: \n '/api/ratings/sugestaoerro?sugestao_erro_id={id_sugestao_erro}' ");

  }
};

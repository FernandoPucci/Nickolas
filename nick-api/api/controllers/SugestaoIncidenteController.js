/**
 * SugestaoIncidenteController
 *
 * @description :: Server-side logic for managing sugestaoerroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  incidente: function (req, res) {
    if (req.param('incidente_id')) {
      Incidente.query("SELECT SE.SEQ_SUGESTAO_ERRO " + 
        " , SE.RELEVANCIA SUGESTAO_RELEVANCIA " +
        " , S.DESCRICAO    SUGESTAO " +
        " , S.DETALHES     SUGESTAO_DETALHES " +
        " , SE.OCORRENCIA " +
        " , SE.RELEVANCIA " +
        " , SE.CONTORNO " +
        " , E.SEQ_ERRO " +
        " , E.TAGS " +
        " , E.SEQ_APLICACAO " +
        " , E.RELEVANCIA  ERRO_RELEVANCIA " +
        " , E.OCORRENCIA   ERRO_OCORRENCIA " +
        " , S.SEQ_SUGESTAO " +
        //        
        "           FROM SUGESTAO_ERRO SE " +
        "           JOIN ERRO E ON E.SEQ_ERRO = SE.SEQ_ERRO " +
        "           JOIN SUGESTAO S ON S.SEQ_SUGESTAO = SE.SEQ_SUGESTAO " +
        "           WHERE SE.SEQ_ERRO =   '" + req.param('incidente_id') + "' ORDER BY  SE.CONTORNO ASC" +
                                                                                    " , SE.RELEVANCIA DESC; ",
        function (err, results) {
          if (err)
            return res.serverError(err);

          if (results.rowCount == 0)
            return res.notFound();

          return res.ok(results.rows);
        });
    } else return res.serverError("Parâmetro 'incidente_id' não pode ser nulo. \n Experimente: \n '/api/sugestaoIncidentes/incidente?incidente_id={id_incidente}' ");

  }
};

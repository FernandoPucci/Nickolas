SELECT * FROM ERRO;
SELECT * FROM SUGESTAO ;

SELECT SE.OCORRENCIA
, SE.RELEVANCIA
, SE.CONTORNO
, E.SEQ_ERRO
, E.TAGS
, E.SEQ_APLICACAO
, E.RELEVANCIA  ERRO_RELEVANCIA
, E.OCORRENCIA   ERRO_OCORRENCIA
--
, SE.RELEVANCIA  SUGESTAO_RELEVANCIA
, S.DESCRICAO   SUGESTAO
, S.DETALHES    SUGESTAO_DETALHES
  FROM SUGESTAO_ERRO SE
  JOIN ERRO E ON E.SEQ_ERRO = SE.SEQ_ERRO
  JOIN SUGESTAO S ON S.SEQ_SUGESTAO = SE.SEQ_SUGESTAO
  WHERE SE.SEQ_ERRO = 2
  ORDER BY SE.OCORRENCIA DESC
          , SE.RELEVANCIA DESC
          , SE.CONTORNO DESC;
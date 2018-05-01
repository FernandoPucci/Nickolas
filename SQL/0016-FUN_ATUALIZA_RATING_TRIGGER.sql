CREATE OR REPLACE FUNCTION FUN_ATUALIZA_RATING_TRIGGER() 
  RETURNS trigger AS $rating_trigger$

DECLARE
	vnSeqErro   	        integer;
  vnSeqSugestao	        integer;
    
BEGIN

  SELECT SE.SEQ_ERRO
       , SE.SEQ_SUGESTAO       
       INTO
       	vnSeqErro 
      , vnSeqSugestao
    FROM SUGESTAO_ERRO SE
  WHERE SE.SEQ_SUGESTAO_ERRO = new.seq_sugestao_erro;
    
    IF new.solucionado = 'S' THEN
     PERFORM fun_atualiza_relevancia(vnSeqErro, vnSeqSugestao);
     END IF;
    
  INSERT INTO PAMONHA (NOME) 
  VALUES (CONCAT(NOW(), ' ', 'iNSERÇÃO; ', ' Erro: ', vnSeqErro, ' Sugestão: ', vnSeqSugestao ));
  RETURN NEW;
  
END;

$rating_trigger$ LANGUAGE plpgsql;

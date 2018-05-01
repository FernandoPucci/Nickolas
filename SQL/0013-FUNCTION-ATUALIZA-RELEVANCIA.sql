CREATE OR REPLACE FUNCTION FUN_Atualiza_Relevancia(psSeqErro integer, psSeqSugestao integer) RETURNS void AS $$
DECLARE
	vnErroMaximo   	        integer;
    vnErroMinimo			integer;
    vnErroCount  			integer;
    vnSeqAplicacao			integer;
    vnSugestaoMaximo   	    integer;
    vnSugestaoMinimo		integer;
    vnSugestaoCount 		integer;
  
   
BEGIN

------------------------------------------------------------------  
-- ATUALIZAÇÃO DO ERRO
------------------------------------------------------------------  
     -- ATUALIZA OCORRÊNCIA DO ERRO
     UPDATE ERRO
        SET OCORRENCIA = OCORRENCIA + 1
        WHERE SEQ_ERRO = psSeqErro;
        
            
     -- SELECIONA A APLICAÇÃO 
        SELECT ERRO.SEQ_APLICACAO
          INTO vnSeqAplicacao
          FROM ERRO
         WHERE ERRO.SEQ_ERRO = psSeqErro ;    
         
    -- SELECIONA A QUANTIDADE DE ERROS PARA A APLICAÇÃO
        SELECT COUNT(ERRO.SEQ_ERRO)
          INTO vnErroCount
          FROM ERRO
         WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao ;   
        
    -- SELECIONA O VALOR MAXIMO 
        SELECT MAX(OCORRENCIA)
          INTO vnErroMaximo
          FROM ERRO
         WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao ;   
         
    -- SELECIONA O VALOR MINIMO
        SELECT MIN(OCORRENCIA)
          INTO vnErroMinimo
          FROM ERRO
         WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao ; 
  
    -- CALCULO RELEVÂNCIA  
     ---- CASO 1: APENAS 1 ERRO CADASTRADO
     IF vnErroCount = 1 THEN
          UPDATE ERRO
             SET RELEVANCIA = 1
           WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao;
     
     ELSE
     ---- CASO 2: MAIS DE UM ERRO CADASTRADO, MAS COM OCORRÊNCIAS IGUAIS
    	  IF vnErroMaximo = vnErroMinimo THEN
               UPDATE ERRO
            	  SET RELEVANCIA = 0
                WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao;
    
     
     ---- CASO 3:MAIS DE UM ERRO CADASTRADO, MAS COM OCORRÊNCIAS DIFERENTES
    	  ELSE
               UPDATE ERRO
            	  SET RELEVANCIA = ((OCORRENCIA - vnErroMinimo) / (vnErroMaximo - vnErroMinimo))
                WHERE ERRO.SEQ_APLICACAO = vnSeqAplicacao;
          END IF;
      END IF;


-----------------------------------------------------------------  
-- ATUALIZAÇÃO DA SUGESTAO
------------------------------------------------------------------  
	-- ATUALIZA OCORRÊNCIA DA SUGESTAO
     UPDATE SUGESTAO_ERRO
        SET OCORRENCIA = OCORRENCIA + 1
        WHERE SEQ_SUGESTAO = psSeqSugestao
        AND	  SEQ_ERRO = psSeqErro;
        
        
    -- SELECIONA O VALOR MAXIMO 
        SELECT MAX(OCORRENCIA)
          INTO  vnSugestaoMaximo 
          FROM SUGESTAO_ERRO
         WHERE SEQ_ERRO = psSeqErro ;   
         
    -- SELECIONA O VALOR MINIMO
        SELECT MIN(OCORRENCIA)
          INTO  vnSugestaoMinimo
          FROM SUGESTAO_ERRO
         WHERE SEQ_ERRO = psSeqErro ;  
         
     -- SELECIONA A QUANTIDADE DE SUGESTÕES
        SELECT COUNT(SUGESTAO_ERRO.SEQ_SUGESTAO)
          INTO vnSugestaoCount
          FROM SUGESTAO_ERRO
         WHERE SEQ_ERRO = psSeqErro ;         
 
     -- CALCULO RELEVÂNCIA  
     ---- CASO 1: APENAS 1 SUGESTÃO CADASTRADA 
     IF vnSugestaoCount = 1 THEN
     
          UPDATE SUGESTAO_ERRO
             SET RELEVANCIA = 1
           WHERE SUGESTAO_ERRO.SEQ_ERRO = psSeqErro;
     
     ELSE
     ---- CASO 2: MAIS DE UMA SUGESTAO CADASTRADA, MAS COM OCORRÊNCIAS IGUAIS
    	  IF vnSugestaoMaximo = vnSugestaoMinimo THEN
               UPDATE SUGESTAO_ERRO
                  SET RELEVANCIA = 0
                WHERE SUGESTAO_ERRO.SEQ_ERRO = psSeqErro;
    
     
     ---- CASO 3:MAIS DE UM ERRO CADASTRADO, MAS COM OCORRÊNCIAS DIFERENTES
    	  ELSE
                 UPDATE SUGESTAO_ERRO
                    SET RELEVANCIA = ((OCORRENCIA - vnSugestaoMinimo) / (SugestaoMaximo - vnSugestaoMinimo))
                  WHERE SEQ_ERRO = psSeqErro;
          END IF;
      END IF;    
END;

$$ LANGUAGE plpgsql;

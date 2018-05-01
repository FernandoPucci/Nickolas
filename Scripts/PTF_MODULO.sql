SELECT P.SEQ_PTF
	,	P.VERSAO
    ,	P.SPRINT
    ,	P.RELEASE
    
    ,	M.SEQ_MODULO
    ,	M.MODULO
    ,	M.SIGLA
    ,	M.DESCRICAO

FROM PTF P 
JOIN PTF_MODULO PM ON PM.SEQ_PTF = P.SEQ_PTF
JOIN MODULO M ON PM.SEQ_MODULO = M.SEQ_MODULO
AND P.VERSAO = 18
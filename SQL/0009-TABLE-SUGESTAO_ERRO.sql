------------------------------------------	
-- Criação da Tabela Sugestão Por Erro

CREATE TABLE public.sugestao_erro
(
    seq_sugestao_erro 	serial	Not Null,
    seq_erro 			integer	Not Null,
	seq_sugestao		integer	Not Null,
	ocorrencia			integer default 0,
	relevancia			real	default 0,
	contorno			integer	default 0,
    CONSTRAINT seqsugestaoerro PRIMARY KEY (seq_sugestao_erro),
	FOREIGN KEY (seq_erro) REFERENCES erro (seq_erro) ON DELETE CASCADE,
	FOREIGN KEY (seq_sugestao) REFERENCES sugestao (seq_sugestao) ON DELETE CASCADE,
	CONSTRAINT sugestaoerro_unique UNIQUE (seq_erro, seq_sugestao)
);

ALTER TABLE public.sugestao_erro
    OWNER to postgres;
COMMENT ON TABLE public.sugestao_erro
    IS 'Tabela criada para armazenar a relação entre sugestões e erros conhecidos.';

COMMENT ON COLUMN public.sugestao_erro.ocorrencia
    IS 'Coluna numérica (Inteira) que funciona como contador para todas as vezes que o cliente acessar essa sugestão e informar que o problema foi solucionado.';
	
COMMENT ON COLUMN public.sugestao_erro.relevancia
    IS 'Coluna numérica (decimal) que armazena o valor normalizado da sugestão, em relação as demais sugestões do mesmo erro.';

COMMENT ON COLUMN public.sugestao_erro.contorno
    IS 'Coluna numérica (Inteira) para armazenar o número do RC, caso a sugestão necessite de aplicação de alterações pela empresa.';
	
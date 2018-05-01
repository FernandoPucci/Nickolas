------------------------------------------	
-- Criação da Tabela Aplicação

CREATE TABLE public.aplicacao
(
    seq_aplicacao 	serial		 Not Null,
    aplicacao 		varchar(12)	 Not Null,
    descricao 		varchar(100) Not Null,
	seq_modulo		integer		 Not Null,
    CONSTRAINT seqaplicacao PRIMARY KEY (seq_aplicacao),
	FOREIGN KEY (seq_modulo) REFERENCES modulo (seq_modulo) ON DELETE CASCADE,
    CONSTRAINT aplicacao_unique UNIQUE (aplicacao, descricao)
);

ALTER TABLE public.aplicacao
    OWNER to postgres;
COMMENT ON TABLE public.aplicacao
    IS 'Tabela criada para armazenar as informações referente as aplicações desenvolvidas pela empresa e que compõem os módulos. ';

COMMENT ON COLUMN public.aplicacao.aplicacao
    IS 'Coluna texto que identifica o código da aplicação.(Informação obtida da GE_APLICACAO)';

COMMENT ON COLUMN public.aplicacao.descricao
    IS 'Nome completo da aplicação. (Informação obtida da GE_APLICACAO)';
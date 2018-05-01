------------------------------------------	
-- Criação da Tabela Módulo

CREATE TABLE public.modulo
(
    seq_modulo 	serial		Not Null,
    modulo 		varchar(12)	Not Null,
    sigla 		varchar(5)	Not Null,
    descricao 	varchar(40)	Not Null,
    CONSTRAINT seqmodulo PRIMARY KEY (seq_modulo),
    CONSTRAINT modulo_unique UNIQUE (modulo, sigla, descricao)
);

ALTER TABLE public.modulo
    OWNER to postgres;
COMMENT ON TABLE public.modulo
    IS 'Tabela criada para armazenar as informações referente aos módulos desenvolvidos pela empresa e que compõem as atualizações. ';

COMMENT ON COLUMN public.modulo.modulo
    IS 'Coluna texto que identifica o código do módulo.(Informação obtida da GE_MODULO)';

COMMENT ON COLUMN public.modulo.sigla
    IS 'Informação obtida da GE_MODULO.SIGLAMODULO.';

COMMENT ON COLUMN public.modulo.descricao
    IS 'Nome completo do módulo. (Informação obtida da GE_MODULO)';
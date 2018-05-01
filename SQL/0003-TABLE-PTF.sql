-- Criação da Tabela PTF
CREATE TABLE public.ptf
(
    seq_ptf serial	Not Null,
    versao 	integer	Not Null,
    sprint 	integer	Not Null,
    release integer	Not Null,
    CONSTRAINT seqptf PRIMARY KEY (seq_ptf),
    CONSTRAINT ptf_unique UNIQUE (versao, sprint, release)
);


ALTER TABLE public.ptf
    OWNER to postgres;
COMMENT ON TABLE public.ptf
    IS 'Tabela criada para armazenar as informações referente as PTFs (Atualizações) que a empresa libera. ';

COMMENT ON COLUMN public.ptf.versao
    IS 'Coluna numérica (inteira) que identifica a versão da aplicação. (geralmente a empresa trabalha com versões anuais, em uma sistema de ômega e delta)';

COMMENT ON COLUMN public.ptf.sprint
    IS 'Coluna numérica (Inteira) que identifica o sprint atual da versão. (geralmente a empresa atrabalha com sprint anual)';

COMMENT ON COLUMN public.ptf.release
    IS 'Coluna numérica (Inteira) que identifica as atualizações constantes.';

	
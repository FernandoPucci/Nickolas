------------------------------------------	
-- Criação da Tabela Sugestão

CREATE TABLE public.sugestao
(
    seq_sugestao	serial			Not Null,
	descricao		varchar(4000)   Not Null,
	detalhes		text			Not Null,
    CONSTRAINT seqsugestao PRIMARY KEY (seq_sugestao),
	CONSTRAINT sugestao_unique_01 UNIQUE (descricao)
);

ALTER TABLE public.sugestao
    OWNER to postgres;
COMMENT ON TABLE public.sugestao
    IS 'Tabela criada para armazenar as sugestões de solução para os erros conhecidos.';

COMMENT ON COLUMN public.sugestao.descricao
    IS 'Coluna texto com a descrição detalhada da sugestão para que seja possível executar os passos e solucionar o erro.';

COMMENT ON COLUMN public.sugestao.detalhes
    IS 'Coluna para armazenar imagens ou outros tipos de documentos que disponibilizados pelos empresa, ajudem o cliente a aplicar a sugestão.';
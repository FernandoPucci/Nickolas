------------------------------------------	
-- Criação da Tabela Anexo

CREATE TABLE public.anexo
(
    seq_anexo 	serial		Not Null,
    descricao 	varchar(40)	Not Null,
	anexo		text		Not Null,
	seq_erro	integer		Not Null,
    CONSTRAINT seqanexo PRIMARY KEY (seq_anexo),
	FOREIGN KEY (seq_erro) REFERENCES erro (seq_erro) ON DELETE CASCADE
);

ALTER TABLE public.anexo
    OWNER to postgres;
COMMENT ON TABLE public.anexo
    IS 'Tabela criada para armazenar os anexos que o cliente adicionar ao erro, quando este for direcionado à consultora.';

COMMENT ON COLUMN public.anexo.descricao
    IS 'Coluna texto que identifica de maneira sucinta o anexo.';

COMMENT ON COLUMN public.anexo.anexo
    IS 'Anexo, podendo ser qualquer tipo de arquivo ou imagem.';
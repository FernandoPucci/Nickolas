------------------------------------------	
-- Criação da Tabela Erro

CREATE TABLE public.erro
(
    seq_erro 		serial			Not Null,
    titulo 			varchar(40)		Not Null,
	descricao		varchar(4000)	Not Null,
	tags			varchar(100)	Not Null,
	ocorrencia		integer 		default 0,
	relevancia		real			default 0,
	detalhes		text			Not Null,
	seq_aplicacao 	integer			Not Null,
    CONSTRAINT seqerro PRIMARY KEY (seq_erro),
	FOREIGN KEY (seq_aplicacao) REFERENCES aplicacao (seq_aplicacao) ON DELETE CASCADE,
	CONSTRAINT erro_unique UNIQUE (titulo, tags)
);

ALTER TABLE public.erro
    OWNER to postgres;
COMMENT ON TABLE public.erro
    IS 'Tabela criada para armazenar os erros conhecidos informados pelos clientes, quando direcionado à consultora. ';

COMMENT ON COLUMN public.erro.titulo
    IS 'Coluna texto com descrição sucinta do erro.';

COMMENT ON COLUMN public.erro.descricao
    IS 'Coluna texto com a descrição detalhada do erro para que seja possível entendê-lo.';

COMMENT ON COLUMN public.erro.tags
    IS 'Coluna texto com palavras chave para o sistema de busca do erro.';

COMMENT ON COLUMN public.erro.ocorrencia
    IS 'Coluna numérica (Inteira) que funciona como contador para todas as vezes que o cliente acessar esse erro e informar que o problema foi solucionado.';
	
COMMENT ON COLUMN public.erro.relevancia
    IS 'Coluna numérica (decimal) que armazena o valor normalizado do erro, em relação ao demais erros da mesma aplicação.';

COMMENT ON COLUMN public.erro.detalhes
    IS 'Coluna para armazenar imagens ou outros tipos de documentos que disponibilizados pelos empresa, ajudem o cliente a entender o erro.';
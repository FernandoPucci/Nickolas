-- Criação da Tabela de relação entre PTF e Módulo
CREATE TABLE public.ptf_modulo
(
    seq_ptf_modulo  serial	Not Null,
    seq_ptf 	    integer	Not Null,
    seq_modulo 	    integer	Not Null,
    CONSTRAINT seqptfmodulo PRIMARY KEY (seq_ptf_modulo),
    FOREIGN KEY (seq_ptf) REFERENCES ptf (seq_ptf) ON DELETE CASCADE,
    FOREIGN KEY (seq_modulo) REFERENCES modulo (seq_modulo) ON DELETE CASCADE,
    CONSTRAINT ptf_modulo_unique UNIQUE (seq_ptf, seq_modulo)
);
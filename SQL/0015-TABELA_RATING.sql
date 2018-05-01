﻿CREATE TABLE RATING
(
    SEQ_RATING            SERIAL        NOT NULL,
    SEQ_PTF                 INTEGER     NOT NULL,
    SEQ_MODULO            INTEGER       NOT NULL,
    SEQ_APLICACAO         INTEGER       NOT NULL,
    SEQ_SUGESTAO_ERRO     INTEGER       NOT NULL,
    STACKTRACE            TEXT,
    SOLUCIONADO           VARCHAR(1) DEFAULT 'N',
    RATING                NUMERIC(5,2),
    TOTAL_SIM             INTEGER,
    TOTAL_NAO             INTEGER,

    PRIMARY KEY (SEQ_RATING),
    FOREIGN KEY (SEQ_PTF) REFERENCES PTF (SEQ_PTF) ON DELETE CASCADE,
    FOREIGN KEY (SEQ_SUGESTAO_ERRO) REFERENCES SUGESTAO_ERRO (SEQ_SUGESTAO_ERRO) ON DELETE CASCADE,
    FOREIGN KEY (SEQ_MODULO) REFERENCES MODULO (SEQ_MODULO) ON DELETE CASCADE
);
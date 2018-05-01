INSERT INTO ptf(versao,sprint,release) VALUES(18,01,014);
INSERT INTO ptf(versao,sprint,release) VALUES(17,01,203);

INSERT INTO modulo(modulo, descricao, sigla) VALUES('GERENCIAL', 'Acrux Gerencial', 'GER');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('DOMINI', 'Acrux Domini', 'DOM');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('MAXST_LOJA', 'Acrux Loja', 'LOJA');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('ORCAMENTO', 'Acrux Orçamento', 'ORC');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('FISCAL', 'Acrux Fisci', 'F');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('ABACI_WEB', 'Abaci Web', 'ABA');
INSERT INTO modulo(modulo, descricao, sigla) VALUES('CONTABIL', 'Acrux Abaci', 'OPCT');

INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,1);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,2);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,3);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,4);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,5);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,6);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(1,7);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,1);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,2);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,3);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,4);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,5);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,6);
INSERT INTO ptf_modulo(seq_ptf, seq_modulo) VALUES(2,7);

INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MAX4208', 'Análise ABC de Rupturas', 1);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MAD00152', 'Campanha', 1);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MAD00002', 'Relatório de Resultado de Campanha', 1);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('DOM0010', 'Manutenção de Movimentos', 2);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('DOM0034', 'Importação de Bens', 2);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('DOM0014', 'Consulta Bens', 2);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MAX0096A', 'Recebimento de Notas Fiscais', 3);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MAX0070', 'Local', 3);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('MFL000800', 'Digitação Manual Redução Z', 3);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ORPARAMETRO', 'Parâmetros de Orçamento', 4);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ORBONUSTRANS', 'Lançamento de Bônus / Transferência de V', 4);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ORC00006', 'Alçada de Requisição por Usuário', 4);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('RFMANUTCFOP', 'CFOP', 5);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('RFMANUTNF', 'Notas Fiscais', 5);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('RFMANPRODUTO', 'Produtos', 5);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ABA_00027', 'Balancete de Apuração', 6);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ABA_00040', 'Modelo de Exportação', 6);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('ABA_00054', 'Versões, Blocos e Registros - ECF', 6);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('CTRPLANCONT', 'Relatório de Plano de Contas', 7);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('CTLANCAMENTO', 'Lançamentos', 7);
INSERT INTO aplicacao(aplicacao, descricao, seq_modulo) VALUES('CTPLACONTA', 'Plano de Contas', 7);
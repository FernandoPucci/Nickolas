 /*
	ESTRUTURA DO SCRIPT
    
    -> DADOS PRELIMINARES
    -> -> PTF
    -> -> MÓDULO
    -> -> APLICAÇÃO
    
    -> ERROS CONHECIDOS
    
    -> CASO ENCONTRE O ERRO
    -> -> TRAZ AS SUGESTÕES
    -> -> CÁLCULA RELEVÂNCIA
    
    -> CASO NÃO ENCONTRE O ERRO
*/


/*
	Usuário acessa a aplicação, na tela inicial de informações preliminares escolhe:
    PTF, Módulo, Aplicação.
*/
select 	versao||'.'||sprint||'.'||release,
		 seq_ptf
from	ptf
order by versao desc,
		  sprint,
          release;
         
select 	descricao,seq_modulo
from	modulo
where	seq_modulo in ( select  seq_modulo
                     	from	ptf_modulo
                     	where	seq_ptf = 2 /*<¬ INFORMAR O SEQ DA PTF ESCOLHIDA AQUI*/)
order by descricao;

select	descricao, seq_aplicacao
from	aplicacao
where	seq_modulo = 3 /*<¬ INFORMAR O SEQ DO MÓDULO ESCOLHIDO AQUI*/;

/*
	O usuário terá em tela os erros conhecidos.
*/
select 	titulo, descricao, seq_erro
from	erro
where	seq_aplicacao = 7/*<¬ INFORMAR O SEQ DA APLICAÇÃO ESCOLHIDA AQUI*/;

/* Caso encontre o erro */
select 	b.descricao, b.seq_sugestao
from	sugestao_erro a,
		sugestao b
where   a.seq_sugestao = b.seq_sugestao
and		a.seq_erro = 2/*<¬ INFORMAR O SEQ DO ERRO ESCOLHIDA AQUI*/
order by a.contorno asc,
		  a.relevancia desc;
          
/* 
	Caso alguma sugestão resolva o problema, e o cliente clique em "solucionou".
	Neste exemplo a sugestão de seq 2 
*/
SELECT fun_atualiza_relevancia(2,1);

/*==============================================================================*/
/* 
   Caso não encontre o erro
   O cliente é direcionado para uma tela onde poderá informar qual o erro que possue e 
   iniciar o contato com a consultora.
   
   ptf int; 		--*
    modulo int;		--* Dados vindos do fluxo da aplicação
    aplicacao int;	--*
    detalhes_erro text; -- Informado pelo cliente
    
    detalhes_erro = 'Durante a importação de notas fiscais, seja em processo automático ou manual, as notas fiscais não estão sendo importadas para o fiscal. Quando feito por meio manual é possível ver o erro que aparece em tela dizendo que ocorreu um erros interno no sistema e a aplicação fecha.';
	aplicacao = 7;
    
    --- Para verificar o erro inserido ---
    select 	*
    from	erro
    where	seq_aplicacao = 7;
*/
insert into erro(titulo,descricao,tags,detalhes,seq_aplicacao)
        values('Erro na importação de documentos fiscais',
                'Durante a importação de notas fiscais, seja em processo automático ou manual, as notas fiscais não estão sendo importadas para o fiscal. Quando feito por meio manual é possível ver o erro que aparece em tela dizendo que ocorreu um erros interno no sistema e não é possível importar os documentos.',
                'importação,notas,fiscais,fiscal',
               	'',
                7);
                
/*
	A consultora cadastra as sugestões para aquele erro, 
    e depois informa para qual erro aquele sugestão será exibida.
    
    select 	*
    from	sugestao;
    
    select 	*
    from	sugestao_erro
    where	seq_erro = 2;
*/
insert into sugestao(descricao, detalhes)
		values('Foi verificado o parâmetro dinâmico "Import_Docs_Processados"?',
              	'Esse parâmetro determina se o módulo irá importar os documentos fiscais vindos do módulo de entrada, para que esses documentos sejam processados o parâmetro deve ter o valor "S". Onde verifica: Módulo Fiscal -> Configuração -> Empresa -> Parâmetro Dinâmico -> Digite o nome do parâmetro e pressione F8.')

insert into sugestao(descricao, detalhes)
		values('Foi verificado se o CGO está ajustado para permitir a importação?',
              	'O CGO possue um parâmetro que determina de quais as origens permitidas para importação de documentos. Onde verifica: Módulo Parâmetros -> Configuração -> CGO -> Aba Fiscal -> Parâmetro Doc. Origens, ajuste para permitir documentos vindos do SM e pressione o botão atualizar.')

insert into sugestao(descricao, detalhes)
		values('Necessário aplicação de ajuste técnico na aplicação.',
              	'Após ser direcionado á consultora, será realizado o procedimento necessário para ajustar a aplicação com ajustes da empresa na base de dados e aplicação.')

insert into sugestao_erro(seq_erro,seq_sugestao)
		values(2,1);
    
insert into sugestao_erro(seq_erro,seq_sugestao)
		values(2,2);
        
insert into sugestao_erro(seq_erro,seq_sugestao,contorno)
		values(2,3,175000);
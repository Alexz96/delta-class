# delta-class
Repositório que conterá a solução desenvolvida para o Desafio da Delta Global.



NECESSÁRIO INSTALAR O KNEX COMO INSTALAÇÃO Global
```bash
npm install knex -g
```

NECESSÁRIO RODAR O COMANDO 
knex migrate:latest

LIMPAR BANCO DE DADOS
knex migrate:rollback --all




##DIFICULDADES ENCONTRADAS

- Envio da imagem pelo frontend
	- Erro identificado? Sim, foi identificado com base em pesquisas online e averiguando a requisição criada pelo Insomnia que estava funcional.
	- Qual o motivo do erro? Estava sendo utilizado a instância da classe URLSearchParams para anexar o arquivo.
	- Erro solucionado? Como? Sim, foi solucionado alterando o uso da classe URLSearchParams para FormData e anexando ao body o arquivo. Também foi ajustado os headers da requisição para "multipart/form-data.
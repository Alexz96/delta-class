# delta-class
Repositório contendo a solução Delta Class, a qualé um CRUD de Alunos.

# Instruções

Primeiramente realize o download do repositório por completo através de comandos como ou via Github web:
```bash
git clone
```

Feito isso, acesse o diretório raiz do projeto em um terminal de sua preferência. E então acesse cada subpasta em abas distintas e rode o comando abaixo EM AMBAS:

```
npm install
// ou
yarn install
```

ATENÇÃO: passos obrigatórios!

Depois disso, no diretório BACKEND, execute o seguinte comando (assim será instalado o gerenciador do banco de forma Global):

```bash
npm install knex -g

// em seguida execute
knex migrate:latest
```

Por fim, ainda no diretório BACKEND, você pode optar por um dos comandos e executar:

```bash
npm start
npm run dev

// ou com yarn
yarn start
yarn dev
```

Iniciado a execução do script no backend, troque de aba em seu terminal (onde está na pasta FRONTEND) e execute um destes comandos:

```bash
npm run dev
// ou
yarn dev
```

Por fim, só acessar em seu navegador a URL http://localhost:3000 e seguir com o uso do sistema.

# Extras / Opcionais

## Limpar banco de dados
No diretório backend em um terminal, execute: 

```bash
knex migrate:rollback --all
```

## Dificuldades encontradas

- Envio da imagem pelo frontend
	- Erro identificado? Sim, foi identificado com base em pesquisas online e averiguando a requisição criada pelo Insomnia que estava funcional.
	- Qual o motivo do erro? Estava sendo utilizado a instância da classe URLSearchParams para anexar o arquivo.
	- Erro solucionado? Como? Sim, foi solucionado alterando o uso da classe URLSearchParams para FormData e anexando ao body o arquivo. Também foi ajustado os headers da requisição para "multipart/form-data.

# Autor
Alexsander Oliveira

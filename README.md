# Desafio - CoinSynch

## Instalação e Execução do Projeto 🏗️

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/coinsynch.git
   ```

2. Navegue para o diretório do projeto:
   ```
   cd coinsynch
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Copie o arquivo `.env.local.example` para `.env.local` e insira a chave da CoinAPI.io:
   ```
   cp .env.local.example .env.local
   ```
   Coloque sua chave da API na variável `NEXT_PUBLIC_API_KEY` no arquivo `.env.local`. Caso não possua uma chave, utilize a chave de exemplo: "15D675AC-4887-4157-9037-3D8E175454C9".

5. Inicie o servidor da API json-server:
   ```
   npm run dev-server
   ```

6. Inicie o servidor de desenvolvimento do projeto:
   ```
   npm run dev
   ```

7. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```
   
### Troubleshooting

Caso a api da coinapi.io apresente algum tipo de problema, deixa a variável `NEXT_PUBLIC_API_KEY` do arquivo `.env.local` vazia. O aplicativo tem um tratamento para essa situação e vai buscar todos os dados do json-server de um endpoint simulado. 

## Observações ☝

### Tarefas Principais
Eu não consegui encontrar na api da coinapi.io os dados de variação das cryptos, por isso eu criei um mock no json-server e li os dados de lá;
Eu não entendi exatamente como deveria ser o banner de carrossel, eu implementei da forma que interpretei, mas fiquei com dúvida se está aceitável com o que foi pedido;
Eu também não encontrei no coinapi.io os dados das "Top Cryptos" por isso também criei uma simulação no json-server;

### Tarefas Bônus
O projeto foi desenvolvido utilizando a estratégia BEM de CSS. A tecnologia Sass foi utilizada para facilitar a estilização;
O projeto foi construído utilizando NextJS, porém eu não implementei o SSR;

### Pendências e Melhorias Futuras

Algumas tarefas e melhorias não puderam ser concluídas devido ao prazo, como:
- A personalização do `<select>` para ficar mais parecido com o do Figma;
- Exibir transições suaves entre os Dialogs de SignIn e SignUp;
- A criação de uma página 404 personalizada;
- O tratamento melhor de erros da API;
- Exibir indicadores de loading (skeleton screens);
- Criação de testes;

## Tecnologias Utilizadas 🛠️

- React Hook Form
- Zod
- Phosphor Icons
- Radix
- NextJS
- Axios
- ESLint
- React Chartjs
- Sass
- Swiper
- TypeScript
- json-server
- Tailwind

Fique à vontade para explorar o projeto e experimentar as funcionalidades! Qualquer feedback é bem-vindo e agradeço pela oportunidade de participar do processo seletivo! 🙌

---

Feito com ❤️ por Marcelo Henrique - Acesse meu [LinkedIn](https://www.linkedin.com/in/marcelo-henrique-fonseca/), [Portfólio](https://marcelohenrique.dev.br/) e [GitHub](https://github.com/HenriqueMarcelo/).

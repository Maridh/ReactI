# Meu primeiro projeto com React
## Irei explicar como usei essa maravilhosa biblioteca que serve para a criação de interface de usuários.
## Após baixar as informações padrão/default com o comando: npx create-react-app nome-da-minha-pasta, entrar na minha pasta:  cd nome-da-minha-pasta. Startei meu projeto com npm start. O npm é um gerenciador de bibliotecas. Tudo em React é um componente(elementos que aparecem na tela). Componentes são partes de códigos que podem ser reutilizados. O React junta HTML com JS = JSX.
## Toda informação vai para a o index.html, na div com id "root".
## Após o npm start apaguei as pastas e logo que não seriam utilizados: css, teste, imagem, report. Também apaguei as importações dos arquivos excluídos.
## O conteúdo irá parar na tela da seguinte forma: app.js -> index.js -> index.html
### Dentro da pasta src foram criadas duas pastas:
- Components 
- Service
## Na pasta components foram criados três arquivos:
-index. css para dar estilo ao Titulo
-Titulo.jsx: passamos os paramêtros para nosso componente. É possível renderizar diferentes dados em cada props. A props cria atributos para a tag html, que veio a partir de um componente react. 
- Trilha.jsx: componente que mapeia os dados do arquivo. Irá mapear os dados que estão em dados.js
## Na pasta service temos:
- App.js: componente principal que vai passar as informações para o index.js
-index.js: vai passar as informações para o index.html
- Para finalizar criei um index2.css que foi importado no App.js para dar estilo a página. Poderia ter colocado o estilo do Titulo.jsx aqui também, mas quis testar dessa forma, com duas folhas de estilo.


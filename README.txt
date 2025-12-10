PetCareHub - Protótipo Estático
Nome: Arthur Sampaio Pereira
Matrícula: 2023098557

Instruções de navegação:
1. Abra o arquivo index.html no navegador para iniciar (landing page).
2. Use os links disponíveis para navegar entre as páginas (login, cadastro, dashboard, pets, detalhes).
3. O protótipo é estático: os formulários simulam comportamento, porém não há back-end ou persistência.
4. Estrutura de arquivos:
   /index.html (landing page)
   /login.html (login)
   /cadastro.html (cadastro)
   /dashboard.html (dashboard)
   /pets.html (listagem)
   /detalhes.html (detalhes)
   /css/style.css
   /js/script.js
   /images/

Observações:
- Desenvolvido com HTML, CSS e JavaScript puro (sem frameworks CSS).
- Compatível com navegadores modernos (Chrome, Firefox, Edge).
- Design responsivo e semântica HTML5 preservada.


# PetCareHub – Backend

O backend da aplicação **PetCareHub**, desenvolvido em **Node.js + Express + Sequelize**.
O sistema fornece autenticação JWT, gerenciamento de usuários, pets e agendamentos, além de paginação e proteção de rotas.

## Tecnologias
- Node.js, Express.js
- MySQL, Sequelize ORM
- JWT, Bcrypt.js
- Cors, Dotenv

## Como rodar
1. Instale dependências:
   ```
   npm install
   ```
2. Configure o arquivo `.env`:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=petcarehub
   JWT_SECRET=supersecretkey123
   ```
3. Inicie o servidor:
   ```
   npm start
   ```

Servidor estará em **http://localhost:3000**.

## Estrutura
- Rotas: /auth, /users, /pets, /appointments
- Controllers, Models, Middleware, Services, Utils

## Banco de dados
Certifique-se de criar o banco:
```
CREATE DATABASE petcarehub;
```




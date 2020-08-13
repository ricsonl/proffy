<p align="center"><img src="web/src/assets/images/logo-black.svg" /></p>
<h3 align="center">Plataforma web para conectar alunos e professores</h3> 
<h4 align="center">Projeto da Next Level Week #2, da <a href="https://rocketseat.com.br/">Rocketseat</a></h4>
<p align="center"><img height="300" src="web/src/assets/preview/web.png" /><img height="200" src="web/src/assets/preview/mobile.png" /></p>

<h2>:memo: Funcionalidades:</h2>
<ul>
  <li>Cadastro de professores</li>
  <li>Registro de cronograma com disciplina e horários</li>
  <li>Buscar professores filtrados por:
    <ul>
      <li>Disciplina</li>
      <li>Dia da semana</li>
      <li>Horário</li>
    </ul>
  </li>
  <li>Contato via Whatsapp (redirecionamento)</li>
</ul>

<h2>:computer: Principais tecnologias utilizadas:</h2>
<h3>Frontend:</h3>
<ul>
  <li>HTML5 + CSS3</li>
  <li>Typescript</li>
  <li>React</li>
</ul>
<h3>Backend:</h3>
<ul>
  <li>Node</li>
  <li>Express</li>
  <li>Knex + Sqlite</li>
</ul>

<h2>Instalação / execução:</h2>
<h3><a href="server/">Backend</a>:</h3>
<ul>
  <li><code>npm install</code> para instalar as dependências</li>
  <li>Criar um <code>.env</code> na pasta raiz com a porta a ser utilizada, <strong>ex:</strong> <code>PORT=3333</code></li>
  <li><code>npm run knex:mig</code> para criar o banco</li>
  <li><code>npm run start</code> para iniciar o server</li>
</ul>
<h3><a href="web/">Frontend</a>:</h3>
<ul>
  <li><code>npm install</code> para instalar as dependências</li>
  <li><code>npm run start</code> para iniciar a aplicação em localhost:3000</li>
</ul>


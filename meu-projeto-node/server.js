const express = require('express')
const sqlite3 = require('sqlite3')
const cors = require('cors');


const app = express()
app.use(express.json())


const db = new sqlite3.Database('./database.db')


// criando a tabela no banco de dados
db.serialize(() => {
 db.run(`create table if not exists users (
   id text primary key,
   name text,
   email text
 )`)
})



// criando usuários no banco de dados
const users = {
 id: new Date().toISOString(),
 name: 'João',
 email: 'w6kKQ@example.com'
}

// Inserindo/Cadastrando usuário no banco de dados
db.run(`insert into users (id, name, email) values (?, ?, ?)`,
 [users.id, users.name, users.email], (err) => {
 if (err) {
   console.log(err)
 } else {
   console.log('Usuário criado com sucesso!')
 }
})


// obtendo usuários para vizualizarmos como json
app.get('/users', (req, res) => {
    res.json([
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }
    ]);
  });

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))
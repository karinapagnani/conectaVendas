const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const usuarios = [{
    id: '0',
    nome: "Fernanda Alves",
    email: "fernanda@gmail.com",
    senha: "2345"
    
}
]

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"senai",
    database:"projeto1"
})
conexao.connect (function (erro) {
    if (erro) throw erro;
    console.log ("conexao efetuada com sucesso");

});
app.get("/", function (req, res) {
    res.render("home", {
    data: usuarios   
})
})

app.get("/json", (req, res) => {
    res.status(200).json(usuarios);
  });

app.get("/atualizar", function (req, res) {
    res.render("Atualizar", {
        data: usuarios
    })
})

app.get("/adicionar", function (req, res) {
    res.render("Adicionar", {
        data: usuarios
    })
})


app.post("/", (req, res) => {
    const inputnome = req.body.nome
    const inputemail = req.body.email
    const inputsenha = req.body.senha
    

    usuarios.push({
        nome: inputnome,
        email: inputemail,
        idade: inputsenha
        
    })

    // SQL
   let sql = `INSERT INTO produtos (id, nome, email, idade) VALUES ('${id}', '${nome}', '${email}', '${idade}')`;
        
   // Executar comando SQL
   conexao.query(sql, function(erro, retorno){
    // Caso ocorra algum erro
    if(erro) throw erro;
       console.log(retorno);
   });

    res.render("home", {
        data: usuarios
    })
})

app.post('/delete', (req, res) => {
    var requestedid = req.body.id;
    var j = 0;
    usuarios.forEach(user => {
        j = j + 1;
        if (user.id === requestedemail) {
            usuarios.splice((j - 1), 1)
        }
    })
    res.render("home", {
        data: usuarios
    })
})

app.post('/update', (req, res) => {
    const inputnome = req.body.nome
    const inputemail = req.body.email
    const inputsenha = req.body.senha
    

    var j = 0;
    usuarios.forEach(user => {
        j = j + 1;
        if (user.id === id) {
            user.nome = inputnome
            user.email = inputemail
            user.senha = inputsenha
        }
    })
    res.render("home", {
        data: usuarios
    })
})

app.listen(3300, (req, res) => {
    console.log("Servidor rodando na porta 3300")
})
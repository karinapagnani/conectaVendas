const express = require('express')

const bodyParser = require('body-parser')

const mysql = require('mysql2');

const users = [{
    id: '0',
    nome: "Fernanda Alves",
    email: "fernanda@gmail.com",
    senha: "22"

}]


const app = express()

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


const conexao = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'senai',
	database:'projeto'
});

conexao.connect(function(erro){
	if(erro) throw erro;
	console.log('Conexão efetuada com sucesso!');
});



app.get("/", function (req, res) {

    res.render("home", {
        data: users
    })
})

app.get("/json", (req, res) => {
    res.status(200).json(users);
  });

app.get("/atualizar", function (req, res) {
    res.render("Atualizar", {
        data: users 
    })
})

app.get("/adicionar", function (req, res) {
    res.render("Adicionar", {
        data: users 
    })
})


app.post("/", (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha
    
    users.push({
        id: id,
        nome: nome,
        email: email,
        senha: senha
       
    })

   // SQL
   let sql = `INSERT INTO produtos (id, nome, email, idade) VALUES ('${id}', '${nome}', '${email}', '${idade}')`;
        
   // Executar comando SQL
   conexao.query(sql, function(erro, retorno){
    // Caso ocorra algum erro
    if(erro) throw erro;
       console.log(retorno);

    res.render("home", {
        data: users
    })
})
})

app.post('/delete', (req, res) => {

    var requestedid = req.body.id;
    var j = 0;
    users.forEach(user => {
        j = j + 1;
        if (user.id === requestedid) {
            users.splice((j - 1), 1)
        }


   // SQL
   let sql = `DELETE FROM produtos WHERE id = ${req.body.id}`;

   // Executar o comando SQL
   conexao.query(sql, function(erro, retorno){
   // Caso falhe o comando SQL
       if(erro) throw erro;

       res.render("home", {
        data: users
    })
   
        })
    })
})
    

    
   

app.post('/update', (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha
    

    var j = 0;
    users.forEach(user => {
        j = j + 1;
        if (user.id === id) {
            user.nome = nome
            user.email = email
            user.senha = senha
        }
    })

    // SQL
    let sql = `UPDATE produtos SET nome='${nome}', email='${email}', idade='${idade}' WHERE id=${req.body.id}`;
    
    // Executar comando SQL
    conexao.query(sql, function(erro, retorno){
    // Caso falhe o comando SQL
        if(erro) throw erro;

    res.render("home", {
        data: users
    })
})
})

app.listen(3300, (req, res) => {
    console.log("Servidor rodando na porta 3300")
})
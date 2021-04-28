const cors = require('cors');

const express = require('express');

const app = express();

const porta = 3333;

app.use(cors());

app.use(express.json());

const database = require('./db');

(async () => {
  try {
    const resultado = await database.sync();
    const User = require('./user');
    await User.sync({ force: true });
    
    // console.log(resultado);
  } catch (error) {
    // console.log(error);
  }
})();

app.post("/user", (req, res) => {
  console.log(req.body);

  const create = async () => {
    const User = require('./user');
    try {
      const resultadoCreate = await User.create({
        email: req.body.email,
        senha: req.body.senha
      });

      console.log(resultadoCreate);
      res.send("");
    } catch (error){
      console.log(error);
    }
  }

  create();
});

app.post("/user/login", (req, res) => {
  console.log(req.body);

  res.send("");
});

app.get("/todo", (req, res) => {
  console.log(req.body);

  res.send("");
});

app.post("/todo", (req, res) => {
  console.log(req.body);

  res.send("");
});

app.put("/todo", (req, res) => {
  console.log(req.body);

  res.send("");
});

app.delete("/todo", (req, res) => {
  console.log(req.body);

  res.send("");
});

app.listen(porta, () =>{
  console.log("Iniciado");
})
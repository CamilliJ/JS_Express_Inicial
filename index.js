import express from "express"
import { teste } from "./main.js";

const app = express();

app.use(express.json())


// =-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// primeiro paramametro é o caminho. 
// req -> objeto da requisição, ou seja, tudo que o usuário requisitar será retornado nela.
// res -> o que você irá responder a solicitação do usuário.

// Colocar o _ antes da variável, faz ela ser opcional.

app.get("/", (_req, res) => {
    res.send("O método GET está funcionando. Retorno da Função: " + teste())
});

app.all("/teste",(req, res) => {
    // retorna o método utilizado (GET, POST ...)
    res.send(req.method)
});


// =-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Podemos criar rotas com caracteres especiais para mudar o comportamento da string

app.get("/test?", (_req, res) => {
    // a ? faz com que o caracter imediatamente anterior a ela não seja necessário ser digitado (da pra testar só com localhost:3001/tes)
    // Eu posso colocar mais de uma para omitir mais de um caracter
    res.send("Camilli Joannes")
});

app.get("/repete+", (_req, res) => {
    // o + faz com que o caracter imediatamente anterior a ela possa ser repetido várias vezes (da pra testar com localhost:3001/repeteeeeeeeeee)
    // Eu posso colocar mais de uma para repetir mais de um caracter
    res.send("Camilli Joannes | Camilli Joannes | Camilli Joannes | Camilli Joannes")
});

app.get("/qualquer*caminho", (req, res) => {
    // o * faz com que oseja possível ter qualquer string entre as duas strings do caminho.
    // O * pode receber uma variável
    // Eu posso colocar mais de uma para adicionar mais de uma string
    res.send(req.path)
});

app.post("/testbody", (req, res) => {
    console.log(req.body)
    res.send("Funciona")
});

// informando qual a porta eu estou usando 
app.listen(3001, () =>{
    console.log("Servidor Iniciado")
});

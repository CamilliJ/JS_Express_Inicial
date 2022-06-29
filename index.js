import express from "express"

const app = express();

app.get("/", (_req, res) => {
    res.send("O método GET está funcionando.")
});

app.all("/teste",(req, res) => {
    res.send(req.method)
});

app.listen(3001, () =>{
    console.log("Servidor Iniciado")
} )
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const saludo = { mensaje: "Bienvenido a la Api Fes Aragon V1" };
    return res.json(saludo);
});

app.get("/api/v1/pizzas", (req, res) => {
    const pizzas = [
        { id: 1, nombre: "Pepperoni", precio: 89 },
        { id: 2, nombre: "Hawayana", precio: 150 },
        { id: 3, nombre: "Mexicana", precio: 210 }
    ];
    return res.json(pizzas);
});

app.get("/api/v1/tamanios", (req, res) => {
    const tamanios = ["Individual", "Mediana", "Grande", "Familiar"];
    return res.json(tamanios);
});

app.get("/api/v1/bebidas", (req, res) => {
    const bebidas = [
        { id: 1, nombre: "Refresco 600ml", marca: "Manzanita" },
        { id: 2, nombre: "Agua Ciel 1L", marca: "Ciel" },
        { id: 3, nombre: "Jugo de Naranja", marca: "Jumex" }
    ];
    return res.json(bebidas);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
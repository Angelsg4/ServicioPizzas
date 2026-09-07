import express from 'express';
import {
    obtenerTodasLasPizzasAsync,
    obtenerPizzaPorIdAsync,
    agregarPizzaAsync,
    actualizarPizzaAsync,
    borrarPizzaAsync
} from './pizza.repositorio.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/v1/pizzas', async (req, res) => {
    try {
        const pizzas = await obtenerTodasLasPizzasAsync();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las pizzas" });
    }
});

app.get('/api/v1/pizzas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pizza = await obtenerPizzaPorIdAsync(id);
        
        if (!pizza) {
            return res.status(404).json({ mensaje: "Pizza no encontrada" });
        }
        
        res.status(200).json(pizza);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la pizza" });
    }
});

app.post('/api/v1/pizzas', async (req, res) => {
    try {
        const nuevaPizza = req.body;
        await agregarPizzaAsync(nuevaPizza);
        res.status(201).json({ mensaje: "Pizza agregada correctamente", pizza: nuevaPizza });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar la pizza" });
    }
});

app.put('/api/v1/pizzas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const pizzaActualizada = await actualizarPizzaAsync(id, datosActualizados);

        if (!pizzaActualizada) {
            return res.status(404).json({ mensaje: "Pizza no encontrada para actualizar" });
        }

        res.status(200).json({ mensaje: "Pizza actualizada correctamente", pizza: pizzaActualizada });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la pizza" });
    }
});

app.delete('/api/v1/pizzas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const eliminada = await borrarPizzaAsync(id);

        if (!eliminada) {
            return res.status(404).json({ mensaje: "Pizza no encontrada para eliminar" });
        }

        res.status(200).json({ mensaje: "Pizza eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la pizza" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
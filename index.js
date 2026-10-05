import express from 'express';

import {
    obtenerTodasLasPizzasAsync,
    obtenerPizzaPorIdAsync,
    agregarPizzaAsync,
    actualizarPizzaAsync,
    borrarPizzaAsync
} from './pizza.repositorio.js';

import {
    obtenerTodosLosTamanosAsync,
    obtenerTamanoPorIdAsync,
    agregarTamanoAsync,
    actualizarTamanoAsync,
    borrarTamanoAsync
} from './tamano.repositorio.js';

import {
    obtenerTodasLasBebidasAsync,
    obtenerBebidaPorIdAsync,
    agregarBebidaAsync,
    actualizarBebidaAsync,
    borrarBebidaAsync
} from './bebida.repositorio.js';

import {
    obtenerTodosLosClientesAsync,
    obtenerClientePorIdAsync,
    agregarClienteAsync,
    actualizarClienteAsync,
    borrarClienteAsync
} from './cliente.repositorio.js';

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
        const pizza = await obtenerPizzaPorIdAsync(req.params.id);

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
        res.status(201).json({
            mensaje: "Pizza agregada correctamente",
            pizza: nuevaPizza
        });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar la pizza" });
    }
});

app.put('/api/v1/pizzas/:id', async (req, res) => {
    try {
        const pizzaActualizada = await actualizarPizzaAsync(
            req.params.id,
            req.body
        );

        if (!pizzaActualizada) {
            return res.status(404).json({
                mensaje: "Pizza no encontrada para actualizar"
            });
        }

        res.status(200).json({
            mensaje: "Pizza actualizada correctamente",
            pizza: pizzaActualizada
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar la pizza"
        });
    }
});

app.delete('/api/v1/pizzas/:id', async (req, res) => {
    try {
        const eliminada = await borrarPizzaAsync(req.params.id);

        if (!eliminada) {
            return res.status(404).json({
                mensaje: "Pizza no encontrada para eliminar"
            });
        }

        res.status(200).json({
            mensaje: "Pizza eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar la pizza"
        });
    }
});

app.get('/api/v1/tamanos', async (req, res) => {
    try {
        const tamanos = await obtenerTodosLosTamanosAsync();
        res.status(200).json(tamanos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los tamaños"
        });
    }
});

app.get('/api/v1/tamanos/:id', async (req, res) => {
    try {
        const tamano = await obtenerTamanoPorIdAsync(req.params.id);

        if (!tamano) {
            return res.status(404).json({
                mensaje: "Tamaño no encontrado"
            });
        }

        res.status(200).json(tamano);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el tamaño"
        });
    }
});

app.post('/api/v1/tamanos', async (req, res) => {
    try {
        const nuevoTamano = req.body;
        await agregarTamanoAsync(nuevoTamano);

        res.status(201).json({
            mensaje: "Tamaño agregado correctamente",
            tamano: nuevoTamano
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al agregar el tamaño"
        });
    }
});

app.put('/api/v1/tamanos/:id', async (req, res) => {
    try {
        const tamanoActualizado = await actualizarTamanoAsync(
            req.params.id,
            req.body
        );

        if (!tamanoActualizado) {
            return res.status(404).json({
                mensaje: "Tamaño no encontrado para actualizar"
            });
        }

        res.status(200).json({
            mensaje: "Tamaño actualizado correctamente",
            tamano: tamanoActualizado
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el tamaño"
        });
    }
});

app.delete('/api/v1/tamanos/:id', async (req, res) => {
    try {
        const eliminado = await borrarTamanoAsync(req.params.id);

        if (!eliminado) {
            return res.status(404).json({
                mensaje: "Tamaño no encontrado para eliminar"
            });
        }

        res.status(200).json({
            mensaje: "Tamaño eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el tamaño"
        });
    }
});

app.get('/api/v1/bebidas', async (req, res) => {
    try {
        const bebidas = await obtenerTodasLasBebidasAsync();
        res.status(200).json(bebidas);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener las bebidas"
        });
    }
});

app.get('/api/v1/bebidas/:id', async (req, res) => {
    try {
        const bebida = await obtenerBebidaPorIdAsync(req.params.id);

        if (!bebida) {
            return res.status(404).json({
                mensaje: "Bebida no encontrada"
            });
        }

        res.status(200).json(bebida);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener la bebida"
        });
    }
});

app.post('/api/v1/bebidas', async (req, res) => {
    try {
        const nuevaBebida = req.body;
        await agregarBebidaAsync(nuevaBebida);

        res.status(201).json({
            mensaje: "Bebida agregada correctamente",
            bebida: nuevaBebida
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al agregar la bebida"
        });
    }
});

app.put('/api/v1/bebidas/:id', async (req, res) => {
    try {
        const bebidaActualizada = await actualizarBebidaAsync(
            req.params.id,
            req.body
        );

        if (!bebidaActualizada) {
            return res.status(404).json({
                mensaje: "Bebida no encontrada para actualizar"
            });
        }

        res.status(200).json({
            mensaje: "Bebida actualizada correctamente",
            bebida: bebidaActualizada
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar la bebida"
        });
    }
});

app.delete('/api/v1/bebidas/:id', async (req, res) => {
    try {
        const eliminada = await borrarBebidaAsync(req.params.id);

        if (!eliminada) {
            return res.status(404).json({
                mensaje: "Bebida no encontrada para eliminar"
            });
        }

        res.status(200).json({
            mensaje: "Bebida eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar la bebida"
        });
    }
});

app.get('/api/v1/clientes', async (req, res) => {
    try {
        const clientes = await obtenerTodosLosClientesAsync();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los clientes"
        });
    }
});

app.get('/api/v1/clientes/:id', async (req, res) => {
    try {
        const cliente = await obtenerClientePorIdAsync(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el cliente"
        });
    }
});

app.post('/api/v1/clientes', async (req, res) => {
    try {
        const nuevoCliente = req.body;
        await agregarClienteAsync(nuevoCliente);

        res.status(201).json({
            mensaje: "Cliente agregado correctamente",
            cliente: nuevoCliente
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al agregar el cliente"
        });
    }
});

app.put('/api/v1/clientes/:id', async (req, res) => {
    try {
        const clienteActualizado = await actualizarClienteAsync(
            req.params.id,
            req.body
        );

        if (!clienteActualizado) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado para actualizar"
            });
        }

        res.status(200).json({
            mensaje: "Cliente actualizado correctamente",
            cliente: clienteActualizado
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el cliente"
        });
    }
});

app.delete('/api/v1/clientes/:id', async (req, res) => {
    try {
        const eliminado = await borrarClienteAsync(req.params.id);

        if (!eliminado) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado para eliminar"
            });
        }

        res.status(200).json({
            mensaje: "Cliente eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el cliente"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
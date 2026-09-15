// Esta es la capa donde se persisten los datos

import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";

const cliente = new MongoClient(MONGO_URI);

const db = cliente.db("pizzas");
const coleccion = db.collection("pizzas");

/**
 * Regresa una lista de todas las pizzas almacenadas.
 *
 * @returns {Array} Lista de todas las pizzas.
 */
export async function obtenerTodasLasPizzasAsync() {
    await cliente.connect();

    return await coleccion.find({}).toArray();
}

/**
 * Busca una pizza por su identificador.
 *
 * @param {number|string} id - Identificador de la pizza que se desea buscar.
 * @returns {Object|undefined} La pizza encontrada o undefined si no existe.
 */
export async function obtenerPizzaPorIdAsync(id) {
    await cliente.connect();

    const pizza = await coleccion.findOne({ id: Number(id) });

    return pizza;
}

/**
 * Agrega una nueva pizza al almacenamiento.
 *
 * @param {Object} pizza - Objeto que contiene los datos de la pizza.
 * @returns {void} No devuelve ningún valor.
 */
export async function agregarPizzaAsync(pizza) {
    await cliente.connect();

    await coleccion.insertOne(pizza);
}

/**
 * Actualiza una pizza existente.
 *
 * @param {number|string} id - Identificador de la pizza que se desea actualizar.
 * @param {Object} pizzaActualizada - Datos nuevos de la pizza.
 * @returns {Object|null} La pizza actualizada o null si no se encuentra.
 */
export async function actualizarPizzaAsync(id, pizzaActualizada) {
    await cliente.connect();

    const resultado = await coleccion.findOneAndUpdate(
        { id: Number(id) },
        { $set: pizzaActualizada },
        { returnDocument: "after" }
    );

    return resultado;
}

/**
 * Elimina una pizza por su identificador.
 *
 * @param {number|string} id - Identificador de la pizza que se desea eliminar.
 * @returns {boolean} true si la pizza fue eliminada o false si no existe.
 */
export async function borrarPizzaAsync(id) {
    await cliente.connect();

    const resultado = await coleccion.deleteOne({ id: Number(id) });

    return resultado.deletedCount > 0;
}
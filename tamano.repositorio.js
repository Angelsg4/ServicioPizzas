import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";

const cliente = new MongoClient(MONGO_URI);

const db = cliente.db("pizzas");
const coleccion = db.collection("tamanos");

export async function obtenerTodosLosTamanosAsync() {
    await cliente.connect();
    return await coleccion.find({}).toArray();
}

export async function obtenerTamanoPorIdAsync(id) {
    await cliente.connect();
    return await coleccion.findOne({ id: Number(id) });
}

export async function agregarTamanoAsync(tamano) {
    await cliente.connect();
    await coleccion.insertOne(tamano);
}

export async function actualizarTamanoAsync(id, tamanoActualizado) {
    await cliente.connect();

    const resultado = await coleccion.findOneAndUpdate(
        { id: Number(id) },
        { $set: tamanoActualizado },
        { returnDocument: "after" }
    );

    return resultado;
}

export async function borrarTamanoAsync(id) {
    await cliente.connect();

    const resultado = await coleccion.deleteOne({
        id: Number(id)
    });

    return resultado.deletedCount > 0;
}
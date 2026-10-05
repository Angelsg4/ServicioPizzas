import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";

const cliente = new MongoClient(MONGO_URI);

const db = cliente.db("pizzas");
const coleccion = db.collection("bebidas");

export async function obtenerTodasLasBebidasAsync() {
    await cliente.connect();
    return await coleccion.find({}).toArray();
}

export async function obtenerBebidaPorIdAsync(id) {
    await cliente.connect();
    return await coleccion.findOne({ id: Number(id) });
}

export async function agregarBebidaAsync(bebida) {
    await cliente.connect();
    await coleccion.insertOne(bebida);
}

export async function actualizarBebidaAsync(id, bebidaActualizada) {
    await cliente.connect();

    const resultado = await coleccion.findOneAndUpdate(
        { id: Number(id) },
        { $set: bebidaActualizada },
        { returnDocument: "after" }
    );

    return resultado;
}

export async function borrarBebidaAsync(id) {
    await cliente.connect();

    const resultado = await coleccion.deleteOne({
        id: Number(id)
    });

    return resultado.deletedCount > 0;
}
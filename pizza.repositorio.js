
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pizzas = [
    { id: 1, nombre: "Hawaiina", descripcion: "Jamon y piña" }
];

/**
 * 
 * @returns []
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000);
    return pizzas;
}

/**
 * 
 * @param {number|string} id 
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000);
    const pizza = pizzas.find(x => x.id == id);
    return pizza;
}

/**
 * 
 * @param {Object} pizza 
 */
export async function agregarPizzaAsync(pizza) {
    await sleep(1000);
    pizzas.push(pizza);
}

/**
 * 
 * @param {number|string} id 
 * @param {Object} pizzaActualizada 
 */
export async function actualizarPizzaAsync(id, pizzaActualizada) {
    await sleep(1000);
    const index = pizzas.findIndex(x => x.id == id);

    if (index !== -1) {
        pizzas[index] = { ...pizzas[index], ...pizzaActualizada, id: pizzas[index].id };
        return pizzas[index];
    }
    return null;
}

/**
 * 
 * @param {number|string} id 
 */
export async function borrarPizzaAsync(id) {
    await sleep(1000);
    const index = pizzas.findIndex(x => x.id == id);

    if (index !== -1) {
        pizzas.splice(index, 1);
        return true;
    }
    return false;
}
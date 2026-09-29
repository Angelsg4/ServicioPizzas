import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check, sleep } from 'k6';
import http from 'k6/http';

// URL base apuntando a tu API local
const baseUrl = 'http://localhost:3000/api/v1/pizzas';

export const options = {
    vus: 10,         // 10 usuarios virtuales simultáneos
    duration: '10s', // Duración de la prueba: 10 segundos
};

export default function () {
    const headers = { 'Content-Type': 'application/json' };

    // 1. GET: Obtener todas las pizzas
    const resGetTodas = http.get(baseUrl);
    check(resGetTodas, {
        'GET /pizzas status 200': (r) => r.status === 200,
    });

    // 2. GET: Obtener pizza por ID (ejemplo: ID 1)
    const resGetPorId = http.get(`${baseUrl}/1`);
    check(resGetPorId, {
        'GET /pizzas/:id status 200 o 404': (r) => r.status === 200 || r.status === 404,
    });

    // 3. POST: Agregar una nueva pizza
    const nuevaPizza = JSON.stringify({
        id: 99,
        nombre: "Pizza de Prueba K6",
        precio: 150
    });
    const resPost = http.post(baseUrl, nuevaPizza, { headers });
    check(resPost, {
        'POST /pizzas status 201': (r) => r.status === 201,
    });

    // 4. PUT: Actualizar una pizza existente
    const pizzaActualizada = JSON.stringify({
        nombre: "Pizza de Prueba K6 Modificada",
        precio: 180
    });
    const resPut = http.put(`${baseUrl}/99`, pizzaActualizada, { headers });
    check(resPut, {
        'PUT /pizzas/:id status 200 o 404': (r) => r.status === 200 || r.status === 404,
    });

    // 5. DELETE: Eliminar la pizza creada
    const resDelete = http.del(`${baseUrl}/99`);
    check(resDelete, {
        'DELETE /pizzas/:id status 200 o 404': (r) => r.status === 200 || r.status === 404,
    });

    sleep(1);
}

// Generación del reporte visual HTML
export function handleSummary(data) {
    return {
        "reporte-k6.html": htmlReport(data)
    };
}

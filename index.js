import express from 'express';
import fs from 'fs';
import { faker } from '@faker-js/faker';

const app = express();

let id = 1;

app.get('/api/productos-test', (req, res) => {
    const productos = [];
    for (let i = 0; i < 5; i++) {
        const nombre = faker.commerce.product();
        const producto = {
            id: id++,
            nombre: nombre,
            precio: faker.commerce.price(),
            foto: faker.image.imageUrl(640,480,nombre),
        }
        productos.push(producto);
    }
    res.status(200).json(productos)
})
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import listaRouter from './src/routes/listaRouter.js';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/lista', listaRouter); 
app._router.stack.forEach((layer) => {
    if (layer.route) {
        console.log(layer.route.path, layer.route.methods);
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

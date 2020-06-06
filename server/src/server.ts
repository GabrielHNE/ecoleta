import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';



//a biblioteca precisa vir com a definição de tipos dela (typescript)

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
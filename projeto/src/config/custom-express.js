require('marko/node-require').install();
require('marko/express');

import express from 'express';
import rotas from '../app/rotas/rotas';


const app = express();
rotas(app);

export default app;
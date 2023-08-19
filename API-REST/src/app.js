import express from 'express';
import router from './routes.js';


const app = express();
app.use(router)
app.use(express.json());


export default app
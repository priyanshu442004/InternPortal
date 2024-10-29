import express from "express";
import connectdb from "./ConnectionDB/connectionDB.js";
import certificateRoute from './Routes/certificateRoute.js';
import cors from 'cors';

const port = 8080;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  }));

app.use(express.json());
connectdb('test');

app.use('/api/v1', certificateRoute);

app.listen(port,()=>{
    console.log(`Connected to port ${port}`)
})

import express, { Express, Request, Response } from "express"; 
import dotenv from "dotenv";

//Configuration .env
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
    res.send('APP Express + TS + Swagger + Mongoose');
});

//Define the second Route of APP
app.get('/home', (req: Request, res: Response) => {
    res.send('Welcome to GET Route: Home');
});

//Execute APP and Listen PORT
app.listen(port, () => {
    console.log( `Welcome to API Restfull: Express Server Running at http://localhost:${port}`);
});
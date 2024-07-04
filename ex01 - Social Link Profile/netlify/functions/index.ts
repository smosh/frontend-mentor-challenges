import express, { Router } from "express";
import serverless from "serverless-http";

// initialize express
const app = express()
const port = 3000

// Setup Express
app.use(express.static('public'))
app.use(express.static('../assets/images'))
app.use(express.static('../assets/css'))

const router = Router();
app.use('/.netlify/functions/', router);


export const handler = serverless(app);

//import { Request, Response } from "express";
//import express from 'express';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//     private routes(): void {
//     const router = express.Router();

//     router.get('/', (req: Request, res: Response) => {
//         res.status(200).send({
//             message: 'Hello World!'
//         })
//     });

//     router.post('/', (req: Request, res: Response) => {
//         const data = req.body;
//         // query a database and save data
//         res.status(200).send(data);
//     });

//     this.app.use('/', router)
// }

const port = 4040;

app.get('/', function (req: any, res: any) {
    res.send('Hello Express World!!')
})

app.listen(4000, function () {
    console.log('Express server listening on port ' + port)
})

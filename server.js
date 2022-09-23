    import express from 'express';
    import {
            router
            } from '../routes/index';
    import dotenv from 'dotenv';
        dotenv.config();

    const PORT = process.env.PORT||process.env.LOCAL_PORT; 
    import {
        db
        } from './db/connection.js';
//SERVER START//
    const app = express();

//MIDDLEWARE//
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    app.use('/api', router);
    app.use((req, res)=> {
        res.status(404).end();
    })

        db.connect(err => {
            if(err) {
            throw err;
        }
            console.log("Database connection established ⚡");

    app.listen(PORT, ()=> {
        console.log(`App running on port ${PORT} ⚡`);
    });
    })
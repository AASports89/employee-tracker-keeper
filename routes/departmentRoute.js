    import express from 'express';
    import {
            db
            } from '../db/connection.js';
    import {
        Department
            } from '../models/department.js';
                let router = express.Router();
                const dep = new Department();

//GET DEPTS.//
    router.get('/departments', (req, res) => {
        db.query(dep.getSelect(), (err,results) => {
            if(err) {
            res.send(500).json 
            ({
                errorMessage: err
            });
            return;
        }
            res.json 
            ({
            message: 'success',
            data: results
            })
        });
    });

//GET SINGLE DEPT. VIA ID//
    router.get('/departments/:id',(req, res) => {
        const params = [req.params.id];
            db.query(dep.getSelectById(), params, (err, result) => {
            if(err) {
                req.send(400).json
                ({
                    errorMessage: err 
                });
            }
            res.json
            ({
                message: 'success',
                data: result
            });
        })
    });

//ADD DEPT.//
    router.post('/departments', (req, res) => {
        const params =[req.body.name];
            db.query(dep.getInsert(), params, (err, result) => {
                if(err) {
            res.send(400).json({
                errorMessage: message
            });
        }
            res.json
            ({
                message: `SUCCESS❕✅ NEW DEPARTMENT ${req.body.name} CREATED❕⌛`,
                data: req.body
            });
        });
    });

//DELETE DEPT.//
    router.delete( '/departments/:id' ,(req, res) => {
        const params = [req.params.id];
            db.query(dep.getDelete(), params, (err, result) => {
                if(err) {
                    res.status(400).json({errorMessage: error});
                return;
                } else if(!result.affectedRows ) {
                    res.json({message: "ERROR❗ NO DEPARTMENT LOCATED❗"});
                } else {
                    res.json
            ({
                message: `WARNING❗ ⛔ EMPLOYEE RECORD DELETED❗ ❌`,
                changes: result.affectedRows,
                id: req.params.body
            });
            };
        });
    });

    export {router};
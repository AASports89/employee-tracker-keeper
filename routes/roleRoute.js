    import express from 'express';
    import {
            db
            } from '../db/connection.js';
    import {
        Role
            } from '../public/js/role.js';

            let router = express.Router();
        const role = new Role();

//GET ROLES//
    router.get('/roles', (req, res) => {
        db.query(role.getSelect(), (err, rows) => {
        if(err) {
            res.status(500).json({errorMessage: err});
            return;
            }
            res.json({
                message: 'success',
                data: rows
            });
        });

    });

//GET ROLE VIA ID//
    router.get('/roles/:id', (req, res) => {
        var id = [req.params.id];

            db.query(role.getSelectById(), id, (err, rows)=> {
                if(err) {
                res.status(400).json({errorMessage : err});
                return;
                }
        
            res.json
            ({
                message: 'success',
                data: rows
            })
        })
    });

//ADD ROLE//
    router.post('/roles', (req, res)=> {

//ADD INPUT VALIDATION//
    var params = [
                    req.body.title, 
                    req.body.salary,
                    req.body.department_id
                ];
            db.query(role.getInsert(), params, (err, result) =>{
                if(err) {
                    res.status(400). json({errorMessage: err});
                    return;
                }
            res.json
            ({
                message :`New role ${req.body.title} added to database`,
                data: req.body
            })
        })
    });

//DELETE ROLE//
    router.delete('/roles/:id', (req, res) => {
        var params =[req.params.id];
            db.query(role.getDelete(), params, (err, result) => {
                if(err) {
                    res.status(400).json({errorMessage : err});
                return;
                } else if(!result.affectedRows) {
                    res.json
                    ({
                        message: "Role record not found"
                    });
                } else {
                    res.json 
                    ({
                        message: `Role record deleted`,
                        changes : result.affectedRows,
                        id: req.params.id
                    });
                }
            })
    });   

//BUDGET PER DEPT.//    
    router.get('/budget/:id', (req, res) => {
        var params = [req.params.id];
            db.query(role.getDepartmentBudget(), params , (err, result) => {
        if(err) {
            res.status(500).json({errorMessage: err});
            return;
        }

            res.json
            ({
                message: 'success',
                data: result
            }); 
        })
    })

    export {router};
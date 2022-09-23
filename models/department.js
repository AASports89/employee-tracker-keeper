//CLASS TO PERFORM MYSQL ON DEPARTMENT//
    import {
        TableQuery
            } from "./TableQuery.js";
        class Department extends TableQuery {
            constructor() {
            super();
                this.select = `SELECT * FROM Department;`;
                this.insert = `INSERT INTO department(name) VALUES (?);`;
                this.selectById = `SELECT * FROM department WHERE id = ?`;
                this.delete =  `DELETE FROM department WHERE id = ?`;          
            }    
        }
    export {Department};
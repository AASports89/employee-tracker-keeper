//CLASS TO PERFORM MYSQL ON ROLES//
    import {TableQuery} from "./TableQuery.js";

        class Role extends TableQuery {
    
            constructor(){
            super();
                this.commonSelect =  `SELECT  rl.id, rl.title ,dep.name as department ,rl.salary  
                        FROM role rl 
                        left join department dep on dep.id = rl.department_id`;
                this.select = `${this.commonSelect};`;
                this.insert = `INSERT INTO role(title, salary, department_id) VALUES (?,?,?);`;
                this.selectById = `${this.commonSelect} WHERE id = ?`;
                this.delete =  `DELETE FROM role WHERE id = ?`;
//DEPARTMENT BUDGET USED --> ALL ROLES//
//JOIN W/ ROLES TABLE//
//SUM SALARIES FOR ALL EMPLOYEES//         
                this.deptBudget = `SELECT SUM(salary) as Budget FROM role join employee on employee.role_id = role.id WHERE department_id = ?`
            };

    getDepartmentBudget(){
        return this.deptBudget;
        }
        }

    export {Role}
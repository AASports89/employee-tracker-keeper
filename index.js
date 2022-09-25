//DEPENDENCIES//
    const mysql = require("mysql");
    const inquirer = require("inquirer");
    // const consoleTable = require("console.table");

//MYSQL CONNECTION//
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "bootcamp",
        database: "employee_db"
    });

    connection.connect(function(err) {
    if (err) throw err;
    console.log("SUCCESS ✅ CONNECTED ✅");
    employeeView();
    });
  
//DISPLAY EMPLOYEES//
    function employeeView() {
        inquirer.prompt ({
                        name: "action",
                        type: "list",
                        message: "Please select process.",
                        choices: [
                                "Add Department 💾", 
                                "Add Role 💾", 
                                "Add Employee 💾",
                                "View Departments 🔎", 
                                "View Roles 🔎", 
                                "View Employees 🔎",
                                "Update Employee Role 🗂",
                                "Delete Employee ❌",
                                "Exit Program ⛔"
                                ]
        })
            .then(function(input) {
                switch (input.action) {
                    case "Add Department 💾": 
                    addDepartment(); 
                    break;
                    case "Add Role 💾": 
                    addRole(); 
                    break;
                    case "Add Employee 💾": 
                    addEmployee(); 
                    break;
                    case "View Departments 🔎": 
                    viewDepartments(); 
                    break;
                    case "View Roles 🔎": 
                    viewRoles(); 
                    break;
                    case "View Employees 🔎": 
                    viewEmployees(); 
                    break;
                    case "Update Employee Role 🗂": 
                    updateEmployeeRole(); 
                    break;
                    case "Delete Employee ❌": 
                    deleteEmployee(); 
                    break;            
                    case "Exit Program ⛔": 
                    connection.end(); 
                    break;
                }
            });
    }
//ADD DEPARTMENT//
    const addDepartment = () => {
        inquirer.prompt ({
            name: "newDepartment", 
            type: "input", 
            message: "Please enter the name for the department.",
                validate: (input) => {
            if (!input) {return "Error❗ Please enter valid department name❗";}
            return true;
            },
        })
        .then(response => {
            connection.query("INSERT INTO department SET ?",
            {name: response.newDepartment},
                (err, res) => {
                    if (err) throw err;
                    console.log(`Success ✅ ${response.newDepartment} department added successfully ✅.`);
            employeeView();
            });
        });
    };
//ADD ROLE//
    const addRole = () => {
        inquirer.prompt ([
            {
            name: 
            "roleTitle", 
            type: "input", 
            message: "Please enter role title.",
                validate: (input) => {
                    if (!input) {return "Error❗ Please enter valid role title❗";}
                return true;
                },
            },
        {
            name: 
            "roleSalary", 
            type: "input", 
            message: "Please enter salary 💰 for role.",
                validate: (input) => {
                if (input=/^\d+$/) {
                    return true;
                } else {return "Error❗ Please enter valid salary 💰 title❗";}
            },
            },
        {
            name: "departmentId", 
            type: "input", 
            message: "Enter department ID number for new role title.",
            validate: (input) => {
                if (input=/^\d+$/) {
                    return true;
                } else {return "Error❗ Please enter valid ID ❗";}
            },
        }
    ])
    .then(response => {
        connection.query("INSERT INTO roles SET ?",
        {
            title: response.roleTitle,
            salary: parseInt(response.roleSalary),
            department_id: parseInt(response.departmentId)
        },
        (err, res) => {
            if (err) throw err;
            console.log(`Success ✅ ${response.roleTitle} role has been added ✅.`);
            employeeView();
            });
        });
    };
//ADD EMPLOYEE//
    const addEmployee = () => {
        inquirer.prompt([
            {
            name: "firstName", 
            type: "input", 
            message: "Please enter employee's first name.",
                validate: (input) => {
                    if (!input) {return "Error❗ Please enter valid first name ❗";}
                    return true;
                },
            },
        {
            name: "lastName", 
            type: "input", 
            message: "Please enter the employee's last name.",
                validate: (input) => {
                    if (!input) {return "Error❗ Please enter valid last name ❗";}
                return true;
                },
            },
        {
            name: "roleId", 
            type: "input", 
            message: "Please enter role ID.",
            validate: (input) => {
                if (input=/^\d+$/) {
                    return true;
                } else {return "Error❗ Please enter valid role ID ❗";}  
            },
        }
    ])
        .then(response => {
            connection.query("INSERT INTO employee SET ?",
            {first_name: response.firstName, 
            last_name: response.lastName, 
            role_id: parseInt(response.roleId)},
        (err, res) => {
            if (err) {
                console.log("Error❗ Please enter valid role ID ❗");
                addEmployee();
                return;
            }
            console.log(`Success ✅ ${response.firstName} ${response.lastName} has been added ✅.`);
            employeeView();
            });
        });
    };
//DISPLAY DEPARTMENTS//
    const viewDepartments = () => {
        connection.query(`SELECT * FROM department`, (err, res) => {
            if (err) throw err; console.table(res); employeeView();
        });
};
//DISPLAY ROLES//
    const viewRoles = () => {
        connection.query(`SELECT * FROM roles`, (err, res) => {
            if (err) throw err; console.table(res); employeeView();
        });
    };
//DISPLAY EMPLOYEES//
    const viewEmployees = () => {
        connection.query ( 
                        `SELECT
                        distinct (e.id),
                        CONCAT (e.first_name,' ',e.last_name) AS employee_name,
                        r.title as role_title,
                        d.name,
                        r.salary,
                        e.manager_id
                        FROM employee e
                        INNER JOIN roles r 
                        ON e.role_id = r.id
                        INNER JOIN department d
                        ON r.department_id = d.id
                        ORDER BY e.id ASC LIMIT 100`, 
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                            employeeView();
        })
    };
//UPDATE ROLE//
    const updateEmployeeRole = () => {
        connection.query(
                        `SELECT id, first_name, last_name
                        FROM employee`,
                    (err, res) => {
                        if (err) throw err;
                        inquirer.prompt ([
                    {
                        name: "employeeId",
                        type: "input",
                        message: "Enter the employee ID to be updated to role.",
                        validate: (input) => {
                        if (input=/^\d+$/) {
                            return true;
                        } else {return "Error❗ Please enter valid employee ID ❗";}
                        },
                    },
                    {
                    name: "updatedRoleId",
                    type: "input",
                    message: "Enter new department ID number for the selected employee.",
                    validate: (input) => {
                        if (input=/^\d+$/) {
                            return true;
                        } else {return "Error❗ Please enter valid department ID ❗";}
                        },
                    },
                ])
                .then(response => {
                    let updatedEmployeeRole = parseInt(response.employeeId);
                    let updatedRoleId = parseInt(response.updatedRoleId);
                connection.query(`UPDATE employee SET role_id = ${updatedRoleId} WHERE id = ${updatedEmployeeRole}`,
                    (err, res) => {
                    if (err) {
                    console.log("Error❗ Please enter valid ID ❗");
                    updateEmployeeRole();
                    return;
                }
                console.log(`Success ✅ role has been updated ✅.`);
                employeeView();
                });
            });
        });
    };

//DELETE EMPLOYEE//
    const deleteEmployee = () => {
        let employees = [];
        connection.query(`SELECT id, first_name, last_name FROM employee`,
        (err, res) => {
        res.forEach(element => {
        employees.push(`${element.id} ${element.first_name} ${element.last_name}`);
        });
    inquirer.prompt({
            name: "deletedEmployee", 
            type: "list", 
            message: "Please select employee to delete ❌.", 
            choices: employees
        })
            .then(response => {
                let deletedEmployeeId = parseInt(response.deletedEmployee)
            connection.query(`DELETE FROM employee WHERE id = ${deletedEmployeeId}`,
                (err, res) => {
                console.table(response);
                console.log("Warning❗⛔ Employee deleted❗❌")
            employeeView();
                });
            });
        })
    };
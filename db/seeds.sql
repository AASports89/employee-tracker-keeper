USE employee_db;

INSERT INTO department (name) 
    VALUES  
        ("Management"),
        ("Marketing"),
        ("Human Resources"),
        ("Sales")
        ("Accounting");

INSERT INTO roles (title, salary, department_id)
    VALUES
        ("General Manager", 520000, 1),
        ("Accountant", 200000, 2),
        ("Publicist", 240000, 3),
        ("Sales Lead", 120000, 4),
        ("Human Resources Lead", 140000, 5),
        ("Salesman", 180000, 6),
        ("Junior Accountant", 130000, 7),
        ("Analyst", 100000, 8),
        ("Tester", 100000, 9);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES
        ("Michael", "Corleone", 1, null),
        ("Tony", "Montana", 2, 1),
        ("Sam", "Rothstein", 2, 1),
        ("George", "Jung", 1, null),
        ("Pablo", "Escobar", 3, 6),
        ("Henry", "Hill", 3, 6),
        ("Nicky", "Santorro", 5, null),
        ("Jimmy", "Burke", 6, null),
        ("Vito", "Corleone", 7, null),
        ("Jeff", "Bezos", 8, 6),
        ("Elon", "Musk", 8, 6),
        ("Tony", "Soprano", 9, 7),
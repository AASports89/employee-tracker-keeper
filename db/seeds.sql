USE employee_db;

INSERT INTO department (name) 
    VALUES ('Sales'),
          ('Engineering'), 
          ('Finance'), 
          ('Legal'), 
          ('HR');

INSERT INTO role 
    (title, salary, department_id)
    VALUES
    ('Sales Person', '65000', 1),
    ('Manager', '85000', 1),
    ('Lead Engineer', '78000', 2),
    ('Software Engineer', '68000',2),
    ('Software Manager', '90000', 2),
    ('Account Manager', '92000', 3),
    ('Accountant', '70000', 3),
    ('Legal Team Lead', '88000', 3),
    ('Lawyer', '79000', 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
    VALUES
    ('Michael', 'Jordan', 2, NUll),
    ('Kobe', 'Bryant', 1, 1),
    ('Shaquille', 'Oneal', 1,1),
    ('Steve', 'Nash',5 , NULL),
    ('Jerry', 'West', 4,4),
    ('John', 'Stockton', 3, 4),
    ('Karl', 'Malone',6,NULL),
    ('Scottie', 'Pippen',7, 7),
    ('Eddie', 'Jones', 8, NUll),
    ('Vince', 'Carter', 9, 9);
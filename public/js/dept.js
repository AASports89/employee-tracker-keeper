//DEPT. API ROUTES//
//NODE-FETCH --> CALLS// 
//.ENV --> VARIABLES//
    import fetch from "node-fetch";
    import dotenv from 'dotenv';
        dotenv.config();

    const url = process.env.URL;
    const roleUrl = `${url}/api/departments`;

//ALL DEPTS.//
    const getDepartment = async () => {   
        let result = await fetch(roleUrl);   
        let {data} = await result.json();
    return data;
    };

//FETCH VIA USER ID//
    const getDepartmentById= (id) => {   
        return fetch(`${roleUrl}/${id}`);   
    };

//ADD DEPT.//
    const createDepartment= async (dept) => {
        let respone = await fetch(roleUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dept),
    })

    let result = await respone.json();
    return result;
    };

//DELETE DEPT.//
    const deleteDepartment =async (id) => {
        let respone = await fetch(`${roleUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let result = await respone.json();
    return result;
    };

//RETURN LIST --> DEPT. NAMES//
    const getDepartmentForChoices = async () => {
        let respone = await getDepartment();
        let deptChoices =[];

    respone.forEach(department => {
        let current = {
            name: department.name,
            value: department
            }

            deptChoices.push(current);
    });

    return deptChoices;
    }

    export {getDepartment, getDepartmentById, createDepartment, deleteDepartment, getDepartmentForChoices};
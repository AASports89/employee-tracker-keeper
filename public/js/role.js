//ROLE API ROUTES --> NODE-FETCH --> .ENV & CHALK//
    import fetch from "node-fetch";
    import dotenv from 'dotenv';
        dotenv.config();

    const url = process.env.URL;
    const roleUrl = `${url}/api/roles`;
    const budgetUrl = `${url}/api/budget`;

//GET ROLES//
    const getRoles = async () => {   
        let result = await fetch(roleUrl);  
        let {data} = await result.json();    
        return data;
    };

//GET ROLE BY ID//
    const getRolesById= (id) => {   
        return fetch(`${roleUrl}/${id}`);   
    };

//ADD ROLE//
    const createRole = async (newRole) => {
        let reponse = await fetch(roleUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(newRole),
        })
        let result = await reponse.json();
        return result;
    };

//DELETE ROLE//
    const deleteRole = async (id) => {
        let response = await fetch(`${roleUrl}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        let result = await response.json();
            return result;
    };

//LIST ROLE NAMES//
    const getRolesForChoices = async() => {
        let rows = await getRoles();
        let roleChoices =[];

        rows.forEach(role => {
        let current = {
            name:  role.title,
            value : role        
        }
        roleChoices.push(current);
        });
            return roleChoices;
    }

//GET DEPT. BUDGET//
    const getDepartmentBudget = async (id) => {   
        let result = await fetch(`${budgetUrl}/${id}`);  
        let {data} = await result.json();    
        return data;
    };

    export {
        getRoles, getRolesById, createRole, 
        deleteRole, getRolesForChoices, 
        getDepartmentBudget 
    };
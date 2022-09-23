//EMP. ROUTE API CALLS --> NODE-FETCH --> .ENV VAR & CHALK MESSAGES IN COLOR//
    import fetch from "node-fetch";
    import chalk from "chalk";
    import dotenv from 'dotenv';
        dotenv.config();

    const url = process.env.URL;
    const empUrl = `${url}/api/employees`;
    const mgrUrl = `${url}/api/manager`;

//GET EMPS.//
    const getEmployee =async () => {
        let result = await fetch(empUrl);   
        let {data} = await result.json();
    return data;
    };

//ADD EMPL.//
    const createEmployee = async (emp) => {
        let respone = await fetch(empUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emp),
        })

        let result = await respone.json();
        return result;   
    };

//DELETE EMP.//
    const deleteEmployee = async (id) => {
        let respone = await fetch(`${empUrl}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
        },
        });

        let result = await respone.json();
            return result;
    };

//LIST MANAGERS//
    const getManagers = async() => {
        let result = await fetch(mgrUrl);   
        let {data} = await result.json();
        let mgrChoices =[];

            data.forEach(mgr => {
        let current = {
            name: `${mgr.first_name} ${mgr.last_name}`,
            value: mgr
        }
        mgrChoices.push(current);
        });

    return mgrChoices;
    };

//LIST EMP. NAMES --> ACCESSED VIA CMD LINE//
    const getEmployeesForChoices = async() => {
        let result = await getEmployee();   
        let empChoices =[];

            result.forEach(emp => {
        let current = {
            name: `${emp.first_name} ${emp.last_name}`,
            value: emp
        }
        empChoices.push(current);
        });

        return empChoices;
    };

//UPDATE EMP. RECORD//
    const updateEmployee = async(id, newvalues) => {
        let response = await fetch(`${empUrl}/${id}`,{
            method : 'PUT',
            headers: {
            'Content-Type' : 'application/json',            
    },
        body: JSON.stringify(newvalues)
        })

        let result = await response.json();
            return result;   
    };


//GET EMPS. VIA QUERY PARAMS//
    const getViewEmployeesByQuery =async (query) => {
        let currentUrl ='';
  
        if(query.manager)
        {
        currentUrl=`${empUrl}?manager=${query.query}`;
        }
        else if(query.department)
        {
        currentUrl = `${empUrl}?department=${query.query}`;
        }
    
        let reponse = await fetch(currentUrl);
        let {data} = await reponse.json();
            return data;
    };

    export {
        getEmployee, createEmployee, deleteEmployee, getManagers, 
        getEmployeesForChoices, updateEmployee, getViewEmployeesByQuery
    };
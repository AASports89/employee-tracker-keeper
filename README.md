# **Employee Tracker Keeper** [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#isc-license)
---

## Overview
---

**'Employee Tracker Keeper'** is a ```Node.js``` command-line application using dynamic JavaScript with a dependency on ```Inquirer v8.2.4``` and ```MySQL``` serving as an interface for tracking employees.
As a **content management system (CMS)**, this application allows non-developers to easily view and perform inquiries with information stored in databases.

This user-friendly and intuitive application will allow users to access typical employee data with ease. Lastly, the [Video Walkthrough](#video-walkthrough) will serve as a guide to full functionality and application.

## Table of Contents
---

  * [Overview](#overview)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Mock Up](#mock-up)
  * [Video Walkthrough](#video-walkthrough)
  * [GitHUB Repository](#github-repository)
  * [Evaluation Guideline](#evaluation-guideline)
  * [Questions](#questions)
  * [License](#isc-license)

## User Story
---

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
---

> **Note:** The following criteria is used to determine if the standards set for **'Employee Tracker Keeper'** have been met:

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Installation
----


## Mock-Up
---

> **Note**: The following images show a mock-up of **'Employee Tracker Keeper'**, the generated HTML’s appearance, and functionality:

![HTML webpage titled “Git Employee Summary ” features four boxes listing employee names, titles, and other key info.](./renderedRoladex/assets/images/mpg.png)

> **Note**: The following images show a mock-up of the installation, test, and running of the application:

* **Installation:**

<img src=./renderedRoladex/assets/images/install.png>

* **Running Tests:**

<img src=./renderedRoladex/assets/images/test.png>

* **App Prompt(s):**
<img src=./renderedRoladex/assets/images/prompt.png>

* **Error Hard Stop:**

<img src=./renderedRoladex/assets/images/error.png>

* **Complete Run:**

<img src=./renderedRoladex/assets/images/complete.png>


## Video Walkthrough
---
> **Note:** The following video shows a walkthrough  of the application being used from the command line:

https://aasports89.github.io/git-employee-summary-walkthrough/

## GitHUB Repository
---

https://github.com/AASports89/git-employee-summary

## Getting Started

This Challenge will require a video submission. Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.


## Evaluation Guideline
---

> **Note**: The following evaluation guideline is used to determine if **'Employee Tracker Keeper'** meets the requirements for a minimum viable product:

### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

* Follows the table schema outlined in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

### Application Quality 10%

* The application user experience is intuitive and easy to navigate.

### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points).

* Application allows users to view employees by manager (2 points).

* Application allows users to view employees by department (2 points).

* Application allows users to delete departments, roles, and employees (2 points for each).

* Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department (8 points).

## Questions
---
> **Note:** For any troubleshooting and/or functionality related questions, please visit my GitHUB @https://github.com/AASports89.

## **ISC License**
---
**Copyright © 2022 - AASports89**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---
---

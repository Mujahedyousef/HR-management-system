"use strict"
let employeeInf = localStorage.getItem("InformationsEmployee");
let dataArray = JSON.parse(employeeInf);
let divMain = document.getElementById("parent");
let table = document.createElement('table');
divMain.appendChild(table);


//============header table=============
let theRow_1 = document.createElement('tr');
table.appendChild(theRow_1);

let thDepartment = document.createElement('th');
thDepartment.textContent = "Department";
theRow_1.appendChild(thDepartment);

let thNumEmployee = document.createElement('th');
thNumEmployee.textContent = "# of employees";
theRow_1.appendChild(thNumEmployee);

let thTotalSalary = document.createElement('th');
thTotalSalary.textContent = "TotalSalary";
theRow_1.appendChild(thTotalSalary);

let thAverage = document.createElement('th');
thAverage.textContent = "Average";
theRow_1.appendChild(thAverage);

//===============row 2=====================
let theRow_2 = document.createElement('tr');
table.appendChild(theRow_2);

let tdAdministration = document.createElement('td');
tdAdministration.textContent = "Administration"
theRow_2.appendChild(tdAdministration);

let tdNumEmployeeAdministration = document.createElement('td');
tdNumEmployeeAdministration.innerHTML = numEmpinAdministration();
theRow_2.appendChild(tdNumEmployeeAdministration);

let tdTotalSalaryAdministration = document.createElement('td');
tdTotalSalaryAdministration.innerHTML = totalSalaryForAdministration()
theRow_2.appendChild(tdTotalSalaryAdministration);

let tdAverageAdministration = document.createElement('td');
tdAverageAdministration.innerHTML = avgSalaryForAdministration()
theRow_2.appendChild(tdAverageAdministration);



//==================row3====================

let theRow_3 = document.createElement('tr');
table.appendChild(theRow_3);

let tdMarketing = document.createElement('td');
tdMarketing.textContent = "Marketing"
theRow_3.appendChild(tdMarketing);

let tdNumEmployeeMarketing = document.createElement('td');
tdNumEmployeeMarketing.innerHTML = numEmpinMarketing();
theRow_3.appendChild(tdNumEmployeeMarketing);

let tdTotalSalaryMarketing = document.createElement('td');
tdTotalSalaryMarketing.innerHTML = totalSalaryForMarketing()
theRow_3.appendChild(tdTotalSalaryMarketing);

let tdAverageMarketing = document.createElement('td');
tdAverageMarketing.innerHTML = avgSalaryForMarketing()
theRow_3.appendChild(tdAverageMarketing);


//================row 4====================
['Administration', 'Marketing', 'Development', 'Finance'];
let theRow_4 = document.createElement('tr');
table.appendChild(theRow_4);

let tdDevelopment = document.createElement('td');
tdDevelopment.textContent = "Development"
theRow_4.appendChild(tdDevelopment);

let tdNumEmployeeDevelopment = document.createElement('td');
tdNumEmployeeDevelopment.innerHTML = numEmpinDevelopment();
theRow_4.appendChild(tdNumEmployeeDevelopment);

let tdTotalSalaryDevelopment = document.createElement('td');
tdTotalSalaryDevelopment.innerHTML = totalSalaryForDevelopment()
theRow_4.appendChild(tdTotalSalaryDevelopment);

let tdAverageDevelopment = document.createElement('td');
tdAverageDevelopment.innerHTML = avgSalaryForDevelopment()
theRow_4.appendChild(tdAverageDevelopment);

//================row 5====================

let theRow_5 = document.createElement('tr');
table.appendChild(theRow_5);

let tdFinance = document.createElement('td');
tdFinance.textContent = "Finance"
theRow_5.appendChild(tdFinance);

let tdNumEmployeeFinance = document.createElement('td');
tdNumEmployeeFinance.innerHTML = numEmpinFinance();
theRow_5.appendChild(tdNumEmployeeFinance);

let tdTotalSalaryFinance = document.createElement('td');
tdTotalSalaryFinance.innerHTML = totalSalaryForFinance()
theRow_5.appendChild(tdTotalSalaryFinance);

let tdAverageFinance = document.createElement('td');
tdAverageFinance.innerHTML = avgSalaryForFinance()
theRow_5.appendChild(tdAverageFinance);

//============footer==============================

let tableFoot = table.createTFoot();
let rowTable = tableFoot.insertRow(0);
let dataIns = rowTable.insertCell(0)
dataIns.innerHTML = "Total"
let totalNumOfEmp = rowTable.insertCell(1);
totalNumOfEmp.innerHTML = numAllEmployee()
let S = rowTable.insertCell(2)
S.innerHTML = totalSalary()
let T = rowTable.insertCell(3);
T.innerHTML = totalAverage()






function numEmpinAdministration() {
    let Employee = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Administration") {
            Employee = Employee + 1
        }
    }
    return Employee;
}


function numEmpinMarketing() {
    let Employee = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Marketing") {
            Employee = Employee + 1
        }
    }
    return Employee;
}

function numEmpinDevelopment() {
    let Employee = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Development") {
            Employee = Employee + 1
        }
    }
    return Employee;
}


function numEmpinFinance() {
    let Employee = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Finance") {
            Employee = Employee + 1
        }
    }
    return Employee;
}

function numAllEmployee() {
    let Employee = dataArray.length;
    return Employee;
}



function totalSalaryForAdministration() {
    let salary = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Administration") {
            salary = salary + dataArray[i].salaryAfterTax
        }
    }
    return Math.floor(salary);
}


function totalSalaryForMarketing() {
    let salary = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Marketing") {
            salary = salary + dataArray[i].salaryAfterTax
        }
    }
    return Math.floor(salary);
}

function totalSalaryForDevelopment() {
    let salary = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Development") {
            salary = salary + dataArray[i].salaryAfterTax
        }
    }
    return Math.floor(salary);
}

function totalSalaryForFinance() {
    let salary = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Department === "Finance") {
            salary = salary + dataArray[i].salaryAfterTax
        }
    }
    return Math.floor(salary);
}


function totalSalary() {
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
        sum = sum + dataArray[i].salaryAfterTax
    }
    return Math.floor(sum)
}



function totalAverage() {
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
        sum = sum + dataArray[i].salaryAfterTax
    }
    return Math.floor(sum / dataArray.length)
}


function avgSalaryForAdministration() {
    let average = totalSalaryForAdministration() / numEmpinAdministration();
    return Math.floor(average)
}

function avgSalaryForMarketing() {
    let average = totalSalaryForMarketing() / numEmpinMarketing()
    return Math.floor(average)
}

function avgSalaryForDevelopment() {
    let average = totalSalaryForDevelopment() / numEmpinDevelopment()
    return Math.floor(average)
}


function avgSalaryForFinance() {
    let average = totalSalaryForFinance() / numEmpinFinance()
    return Math.floor(average)
}














"use strict"
let allEmployee = [];
function InformationsEmployee(employeeID, fullName, department, level, salary){

    this.EmployeeID=employeeID;
    this.FullName=fullName
    this.Department=department
    this.Level=level
     this.Salary=salary
     allEmployee.push(this);
}

function Salary(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
 }


let employee_1= new InformationsEmployee(1000,"Ghazi Samer","Administration", "Senior",Salary(1500,2000 ))
let employee_2= new InformationsEmployee(1001,"Lana Ali","Finance","Senior",Salary(1500,2000) )
let employee_3= new InformationsEmployee(1002,"Tamara Ayoub","Marketing","Senior",Salary(1500,2000) )
let employee_4= new InformationsEmployee(1003,"Safi Walid","Administration", "Mid-Senior",Salary(1000,1500))
let employee_5= new InformationsEmployee(1004,"Omar Zaid","Development","Senior", Salary(1500,2000) )
let employee_6= new InformationsEmployee(1005,"Rana Saleh","Development","Junior",Salary(500,1000) )
let employee_7= new InformationsEmployee(1006,"Hadi Ahmad","Finance","Mid-Senior", Salary(1000,1500) )



InformationsEmployee.prototype.render=function(){
     document.write(` <table calss="table"> 
     <tr>
     <th>Employee ID</th>
     <th>Full Name</th>
     <th>Department</th>
     <th>Level</th>
     <th>Salary</th>
   </tr>
   <tr>
     <td>${this.EmployeeID}</td>
     <td>${this.FullName}</td>
     <td>${this.Department}</td>
     <td>${this.Level}</td>
     <td>${this.Salary}</td>
   </tr> </table>  `)
}

employee_1.render();
 employee_2.render();
employee_3.render();
 employee_4.render();
 employee_5.render();
 employee_6.render();
 employee_7.render();







console.table(allEmployee);

 
 


// console.table(employee_1);
// console.table(employee_2);
// console.table(employee_3);
// console.table(employee_4);
// console.table(employee_5);
// console.table(employee_6);
// console.table(employee_7);




















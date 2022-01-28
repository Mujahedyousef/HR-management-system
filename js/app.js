"use strict"
let taxSalary=0;
  let salaryAfterTax=0;
let Department=['Administration','Marketing','Development','Finance'];
let allEmployee=[];
function InformationsEmployee(employeeID, fullName, department, level ){

    this.EmployeeID=employeeID;
    this.FullName=fullName
    this.Department=department
    this.Level=level
    this.salaryAfterTax=0;
     allEmployee.push(this);
}




let employee_1= new InformationsEmployee(1000,"Ghazi Samer",Department[0], "Senior")
let employee_2= new InformationsEmployee(1001,"Lana Ali",Department[3],"Senior" )
let employee_3= new InformationsEmployee(1002,"Tamara Ayoub",Department[1],"Senior" )
let employee_4= new InformationsEmployee(1003,"Safi Walid",Department[0], "Mid-Senior")
let employee_5= new InformationsEmployee(1004,"Omar Zaid",Department[2],"Senior" )
let employee_6= new InformationsEmployee(1005,"Rana Saleh",Department[2],"Junior" )
let employee_7= new InformationsEmployee(1006,"Hadi Ahmad",Department[3],"Mid-Senior" )


InformationsEmployee.prototype.SalaryWithOutTax=function  (){
  let Salary =0;
  if(this.Level=="Senior"){
   Salary= Math.random() * (2000 - 1500)  + 1500 ;
   
  }else if(this.Level=="Mid-Senior"){
    Salary=Math.random() * (1500 - 1000)  + 1000;
   
  }else if(this.Level=="Junior"){
    Salary= Math.random() * (1000 - 500)  + 500;
    
  }
  
  let taxFromSalary=(Salary*0.075);
 
return   this.salaryAfterTax = Salary-taxFromSalary; 
}


InformationsEmployee.prototype.render=function(){
let salaryAfterTax=this.SalaryWithOutTax();
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
     <td>${ this.salaryAfterTax}</td>
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

 
 






















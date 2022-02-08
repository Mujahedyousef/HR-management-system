
"use strict"
let allEmployee=[];
let Department=['Administration','Marketing','Development','Finance'];
let divEmployee=document.getElementById("Employees");
let form=document.getElementById("form");


function InformationsEmployee(employeeID, fullName, department, level,img ){

    this.EmployeeID=employeeID;
    this.FullName=fullName;
    this.Department=department;
    this.Level=level;
    this.salaryAfterTax=0;
    this.image=img;
     allEmployee.push(this);
}



function getNewId() {
  const employeeId = Math.floor(1000 + Math.random() * 9000);
  return employeeId;
}

InformationsEmployee.prototype.render = function () {
  // let employeesDiv=document.getElementById("employees")
  const intro=document.createElement('div')
  const image=document.createElement('img')
  image.setAttribute("src",this.image)
  intro.appendChild(image)
   image.style.width="200px"
   image.style.height="200px"
   image.style.borderRadius="30px"
   divEmployee.appendChild(intro)
  // console.log(intro)
  

const introOne=document.createElement('p')
introOne.textContent=`Name :${this.FullName},-Id:${ this.EmployeeID}`
intro.appendChild(introOne)
divEmployee.appendChild(intro)

const introTwo=document.createElement('p')
introTwo.textContent=` Department: ${ this.Department},-Level: ${this.Level} ${this.salaryAfterTax}`
intro.appendChild(introTwo)
divEmployee.appendChild(intro)

intro.style.backgroundColor=("#B42839");
intro.style.width= "200px";
intro.style.padding = "15px";
intro.style.margin ="15px";
intro.style.borderRadius ="30px";


}



InformationsEmployee.prototype.SalaryWithOutTax=function  (){
 const Salary =0;
  if(this.Level=="Senior"){
   Salary= Math.random() * (2000 - 1500)  + 1500 ;
   
  }else if(this.Level=="Mid-Senior"){
    Salary=Math.random() * (1500 - 1000)  + 1000;
   
  }else if(this.Level=="Junior"){
    Salary= Math.random() * (1000 - 500)  + 500;
    
  }
  
  const taxFromSalary=(Salary*0.075);
  this.salaryAfterTax = Salary-taxFromSalary; 
return   Math.floor(Salary - taxFromSalary);
}


 
let employee_1= new InformationsEmployee(1000,"Ghazi Samer",Department[0], "Senior","./assets/GhaziSamer.jpg")
let employee_2= new InformationsEmployee(1001,"Lana Ali",Department[3],"Senior", "./assets/LanaAli.jpg")
let employee_3= new InformationsEmployee(1002,"Tamara Ayoub",Department[1],"Senior","./assets/TamaraAyoub.jpg" )
let employee_4= new InformationsEmployee(1003,"Safi Walid",Department[0], "Mid-Senior","./assets/SafiWalid.jpg")
let employee_5= new InformationsEmployee(1004,"Omar Zaid",Department[2],"Senior","./assets/OmarZaid.jpg" )
let employee_6= new InformationsEmployee(1005,"Rana Saleh",Department[2],"Junior","./assets/RanaSaleh.jpg" )
let employee_7= new InformationsEmployee(1006,"Hadi Ahmad",Department[3],"Mid-Senior", "./assets/HadiAhmad.jpg")


form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
  console.log(event);
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const departmentEmp = event.target.Department.value;
    const levelName= event.target.level.value;
    const imageEmp = event.target.image.value;
    const randomID =getNewId();
    const newEmployee = new InformationsEmployee(randomID,fullName, departmentEmp, levelName, imageEmp);
    console.log(newEmployee);
    newEmployee.render();
}

 for (let i = 0; i < allEmployee.length; i++) {
     allEmployee[i].render();
}


// console.table(allEmployee);














 

 
 






















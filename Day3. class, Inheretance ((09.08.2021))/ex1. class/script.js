

class FullTimeEmployee{
    constructor(name,email,anualsalary){
        this.name=name;
        this.email=email;
        this.anualsalary=anualsalary;
    }

    calculatesalary(commision=0){
        return this.anualsalary/12+commision;
    }

    getdetails(){
        let temp=`Name: ${this.name}<br/>Email : ${this.email}<br/>`
        return temp;
    }
 
}

let emp=new FullTimeEmployee("rahul","rahul99@gmail.com",120000);
document.write(emp.getdetails())
document.write(emp.calculatesalary(3000))
let emp1=new FullTimeEmployee("Ashish","ashish9426@gmail.com",360000);
document.write(emp1.getdetails())
document.write(emp1.calculatesalary(9000))










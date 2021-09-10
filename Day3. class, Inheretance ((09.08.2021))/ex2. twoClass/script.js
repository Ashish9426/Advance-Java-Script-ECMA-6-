
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


document.write("<hr/>")

class PartTimeEmployee{
    constructor(name,email,perhour,totalhour){
        this.name=name;
        this.email=email;
        this.perhour=perhour;
        this.totalhour=totalhour;
    }

    calculatesalary(){
        return this.perhour*this.totalhour;
    }

    getdetails(){
        let temp=`Name: ${this.name}<br/>Email : ${this.email}<br/>`
        return temp;
    }

}

let emp2=new PartTimeEmployee("Ajay","ajay99@gmail.com",600,130);

document.write(emp2.getdetails())
document.write(emp2.calculatesalary())










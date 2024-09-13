function Sisters (name , age ){
    this.fullName=name;
    this.totalAge=age;
}
Sisters.prototype.status="maried";
const Diba=new Sisters( "Diba" ,"35");
document.getElementById('seven').innerHTML=
("My name is " + Diba.fullName + " and my age is " + Diba.totalAge +" and im " + Diba.status +".");

const mali=new Sisters("Maleha" ,"33");
mali.going="happily";
document.getElementById('eight').innerHTML=
("My name is " + mali.fullName + " and my age is " + mali.totalAge +" and im "+ mali.going + " " +mali.status + ".");

function Father (first , last ){
    this.firstName=first;
    this.lastName=last;
    this.fullName=function (){
        return "My father name is " + this.firstName +" " + this.lastName + "."
    };
} 

const myFather= new Father( "Gulam Nabi" , "Anjum");
document.getElementById('nine').innerHTML= myFather.fullName();
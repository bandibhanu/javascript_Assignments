class Person{
    constructor(fname,lname,age,skills,address,city,pincode,dateofbirth,profession)
    {
        this.fname=fname;
        this.lname=lname;
        this.agr=age;
        this.skills=skills;
        this.address=address;
        this.city=city;
        this.pincode=pincode;
        this.dateofbirth=dateofbirth;
        this.profession=profession;
}
print(){
    console.log(this.fname,this.lname,  this.agr, this.skills, this.address,this.city,this.pincode,this.dateofbirth,this.profession);
}

}
var person1=new Person("bhanu","bandi",21,"programmer,sports person","H.No 2-3,nagupalli","khammam distric","507303","16-02-1997","software Enginee");
var person2=new Person("hari","bablu",21,"anchor","H.No.2-32,Nagupalli","sathupalli","507303","16-02-1997","software",);
person1.print();
person2.print();
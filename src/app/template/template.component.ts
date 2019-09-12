import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
@ViewChild('myform') myForm:any;
  constructor() { }
  user:any={
    myname:"",
    email:"",
    registerno:"",
    age:"",
    aadhaarno:""
  }
  ngOnInit() {
  }
  sub(value){
    this.user.myname = value.myname;
    this.user.email = value.email;
    this.user.registerno = value.registerno;
    this.user.age = value.age;
    this.user.aadhaarno = value.aadhaarno;
    console.log(value);
    this.myForm.reset();
  }
}


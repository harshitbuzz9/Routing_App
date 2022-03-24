import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-app',
  templateUrl: './bank-app.component.html',
  styleUrls: ['./bank-app.component.css']
})
export class BankAppComponent implements OnInit {
  TotalA=2000;
  wA:any ='';
  credit:any='';
  Name:any='';
  emailP:any='';
  cash:any='';
   
   getMoney(){
    
    if(this.wA>this.TotalA){
    alert("Insufficient funds");  
    }else{
        this.TotalA=this.TotalA-this.wA;
         document.write("Amount Remaining"+this.TotalA);   
    }
    
}
putMoney(){
  this.TotalA = this.TotalA*1+this.credit*1;
  document.write("Balance :"+this.TotalA);   
}
createDev(){
   
  var emailPattern=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
  var namePattern=/^[a-zA-Z_]{5,20}$/;
  var amount=/^[0-9]+$/;

  if(this.emailP==""){
      alert("Emali Is empty");
  }else if(!emailPattern.test(this.emailP)){
      alert("Wrong email");
  }else{
      alert("ddone");
  }

  if(this.Name==""){
      alert("Empty field");
  }else if(!namePattern.test(this.Name)){
      alert("Invalid Name");
  }else{
      alert("valid Name");
  }

  if(!amount.test(this.cash)){
      alert("Invalid number");
  }else{
      alert("valid Cash");
  }
  this.TotalA=this.cash;
  if(this.TotalA<2000){
      document.write("Unable to make account");
  }else{
      document.write("Done");
      document.write("<br/>");
      document.write("Account Details : HBFC<br/>");
      document.write("Email  :"+this.emailP+"<br/>");
      document.write("Name  :"+this.Name);
  }
}  
  constructor() { }

  ngOnInit(): void {
  }

}

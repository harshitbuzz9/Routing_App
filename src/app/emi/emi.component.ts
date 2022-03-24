import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EMIComponent implements OnInit {
   principal:any='';
   rate:any ='';
   time:any='';
   data_PerMonth:any =[];
   y:any='';
  goat(){
      var principalPattern= /^[0-9]+$/;
      var ratePattern= /^[0-9]+$/;
      var timepattern= /^[0-9]+$/;
      
      if(this.principal==""){
          alert("Enter Principal Value");
      }
      else if(!principalPattern.test(this.principal)){
          alert("privide numeric values plz");
      }else{
          
      }
  
      if(this.rate==""){
          alert("Enter Rate value");   
      }
      else if (!ratePattern.test(this.rate)){
          alert("privide valid Rate value");
      }
      else{
           
      }
  
      if(this.time==""){
          alert("pleas provide values");
      }else if(timepattern.test(this.time)){
          
      }else{
          alert("enter valid time");
      }
      this.principal=1*this.principal;
      this.rate=1*this.rate;
      this.time=12*this.time;
      
      var rate_per_month=this.rate/1200;
  
  
      var i=this.time;
      var nc=0;
      while(i>0){
          var x=this.principal*rate_per_month* Math.pow(rate_per_month+1,i);
          var y= Math.pow(rate_per_month+1,i)-1;
          var total=x/y;
          var b=this.principal*rate_per_month;
          var z=total-b;
           
      var data_P:object={Month: nc , EMI: total , PrincipalGiven: z, Interest: b, Principal_Remaining: this.principal};
      this.principal=this.principal-z;
      this.data_PerMonth.push(data_P);
      nc++;
      i--;
      }
      var f=0,temp=0;
      while(f<this.data_PerMonth.length){
          temp=temp+this.data_PerMonth[f].EMI;
          f++;
  }
      document.write("Total EMI....     RS .....  :"+temp);
      document.write("<br/>");
       document.write("<br/>");
       document.write("<br/>");
       document.write("<br/>");
      console.log(this.data_PerMonth);
      for(var j=0;j<this.data_PerMonth.length;j++){
           this.y=`<tr>
          <td>"Month    :"${this.data_PerMonth[j].Month}</td>
          <td>" EMI    :"${this.data_PerMonth[j].EMI}</td>
          <td>" PrincipalGiven    :"${this.data_PerMonth[j].PrincipalGiven}</td>
          <td>" Interest    :"${this.data_PerMonth[j].Interest}</td>
          <td>" Principal_Remaining    :"${this.data_PerMonth[j].Principal_Remaining}</td>
      </tr>`
       document.write(this.y);
       document.write("<br/>");
       document.write("<br/>");
       document.write("<br/>");
      }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-card-e',
  templateUrl: './c-card-e.component.html',
  styleUrls: ['./c-card-e.component.css']
})
export class CCardEComponent implements OnInit {
  salary:any='';
  fun(){
    var check=/^[0-9]+$/;
    if(!check.test(this.salary)){
      alert("only enter numeric values");
    }else{
      if(this.salary<=20000){
        alert("SILVER CARD");
      }else if(this.salary>20000 && this.salary<40000){
        alert("GOLD CARD");
      }else{
        alert("PLATINIUM CARD");
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { FormVComponent } from './form-v/form-v.component';
import { EMIComponent } from './emi/emi.component';
import { CCardEComponent } from './c-card-e/c-card-e.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAppComponent } from './bank-app/bank-app.component';

const routes: Routes = [
  {path: "bank-app" , component : BankAppComponent},
  {path: "c-card-e" , component : CCardEComponent},
  {path: "emi" , component : EMIComponent},
  {path:"form", component:FormVComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

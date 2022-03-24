import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyCompo/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { BankAppComponent } from './bank-app/bank-app.component';
import { EMIComponent } from './emi/emi.component';
import { FormVComponent } from './form-v/form-v.component';
import { CCardEComponent } from './c-card-e/c-card-e.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    BankAppComponent,
    EMIComponent,
    FormVComponent,
    CCardEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

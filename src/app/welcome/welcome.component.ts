import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
employee:Employee;
  constructor() { }

  ngOnInit(): void {
    this.employee=new Employee();
      }
      verif():void
      {
        if((this.employee.email=="admin@gmail.com")&&(this.employee.mdp=="admin"))
        {
          window.location.replace("users");
        }
        else
        {
          alert("compte non reconnu!");
        }
      }


}

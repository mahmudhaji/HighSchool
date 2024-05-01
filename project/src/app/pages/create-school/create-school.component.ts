import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from "../../componets/card/card.component";
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-create-school',
    standalone: true,
    templateUrl: './create-school.component.html',
    styleUrl: './create-school.component.scss',
    imports: [MatInputModule, MatButtonModule, MatFormFieldModule, CardComponent,ReactiveFormsModule]
})
export class CreateSchoolComponent {

  schoolForm!:FormGroup;
 
  constructor(private router:Router, private schoolService: SchoolService){}

  ngOnInit() : void{
    this.configureSchoolForm();
  }

  configureSchoolForm(){
    this.schoolForm = new FormGroup({
      schName: new FormControl(null,[Validators.required])
    });
  }

  onSave(){
    const values = this.schoolForm.value;
    console.log('School form values => ', values);

    this.schoolService.add(values).subscribe((response:any) =>{

      console.log('create School responce => ',response);
      this.router.navigateByUrl('/School')
      
    }, (error:HttpErrorResponse) => {
      console.log('error');   
    })
    
  

  }

}

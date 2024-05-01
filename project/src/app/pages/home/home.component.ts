import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from "../../componets/card/card.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from '../../services/student.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MatCardModule, CardComponent,MatFormFieldModule,
        MatInputModule,MatButtonModule,
        ReactiveFormsModule,]
})
export class HomeComponent {

    studentForm!:FormGroup;


    constructor(private studentService: StudentService){

    }

    ngOnInit() : void{
        this.configureSubmitForm();
      }
  
      configureSubmitForm(){
        this.studentForm = new FormGroup({
          name: new FormControl(null,[Validators.required]),
          age: new FormControl(null,[Validators.required]),
          phone: new FormControl(null,[Validators.required])
        });
      }


      onSave(){
        const values = this.studentForm.value;
        console.log('islands form values => ', values);

      }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { CardComponent } from "../../componets/card/card.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-edit-school',
    standalone: true,
    templateUrl: './edit-school.component.html',
    styleUrl: './edit-school.component.scss',
    imports: [CardComponent,MatInputModule,MatFormFieldModule,MatButtonModule,
              ReactiveFormsModule]
})

export class EditSchoolComponent {

  schoolForm!:FormGroup;
 
  constructor(private route: ActivatedRoute, private schoolService: SchoolService ,private router:Router){}

  ngOnInit() : void{
    this.configureSchoolForm();

    this.route.params.subscribe((paramsValues:any) =>{
      console.log('passed params =>', paramsValues);
      const schoolId = paramsValues.schoolId;
      this.fecthSchoolById(schoolId);
    });
  }

  configureSchoolForm(){
    this.schoolForm = new FormGroup({
      id: new FormControl(null),
      schName: new FormControl(null,[Validators.required])
    });
  }


  fecthSchoolById(schoolId: any) {
    this.schoolService.getById(schoolId).subscribe((response:any) =>{
      console.log('get By id response =>',response); 
      Object.keys(response).forEach(key => {
        if(this.schoolForm.value.hasOwnProperty(key)) {
          this.schoolForm.get(key)?.setValue(response[key]);
      } 
    })
     
  }, (error: HttpErrorResponse) => {
      console.log('error => ', error); 
      
  })
  }


  onSave(){
    const values = this.schoolForm.value;
    this.schoolService.update(values).subscribe((response) => {
        // show success message
        this.router.navigateByUrl('/School')
    });
}
}

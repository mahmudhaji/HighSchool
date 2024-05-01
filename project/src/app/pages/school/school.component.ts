import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../componets/card/card.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-school',
    standalone: true,
    templateUrl: './school.component.html',
    styleUrl: './school.component.scss',
    imports: [CardComponent,MatInputModule,MatFormFieldModule,MatButtonModule,CommonModule]
})
export class SchoolComponent implements OnInit {
    schoolList!: any[];


    constructor(private schoolService: SchoolService,private router: Router){}


    ngOnInit(): void {
        this.fetchAllSchool();
    }
    fetchAllSchool() {
        this.schoolService.getAll().subscribe(
          (response: any) => {
            console.log("school response => ", response);
            this.schoolList = response;
          },
          (error: any) => {
            console.error("Error fetching schools:", error);
            // Handle error here (e.g., show error message to user)
          }
        );
    }

    createSchool(){
        this.router.navigateByUrl('createSchool');
    }

    editSchool(school: any){
      this.router.navigateByUrl('/editSchool/'+school.id);
    }
}

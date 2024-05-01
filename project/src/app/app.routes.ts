import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { StudentsListComponent } from './pages/students-list/students-list.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateSchoolComponent } from './pages/create-school/create-school.component';
import { SchoolComponent } from './pages/school/school.component';
import { EditSchoolComponent } from './pages/edit-school/edit-school.component';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',component:HomeComponent},
        {path:'studentsList',component:StudentsListComponent},
        {path:'School',component:SchoolComponent},
        {path:'createSchool',component:CreateSchoolComponent},
        {path:'editSchool/:schoolId',component:EditSchoolComponent}
    ]}
];

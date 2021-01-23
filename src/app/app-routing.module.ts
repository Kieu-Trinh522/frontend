import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "students",component: StudentListComponent},
  {path: "students/edit/:id",component: UpdateStudentComponent},
  {path: "add",component: CreateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

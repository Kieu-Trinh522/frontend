import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: any;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.studentService.getStudentList().subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(
      data => {
        this.loadData();
      },error => console.log(error)
    )
  }

}

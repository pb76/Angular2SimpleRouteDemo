import { Component, OnInit } from '@angular/core';

import { TeacherService } from '../service.teacher';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  teachers: Teacher[];

  constructor(private TeacherService: TeacherService) {
        this.TeacherService.getTeachers('http://localhost:4200/assets/teachers.json').subscribe(data => this.teachers = data);
    }

  ngOnInit() {
  }

}

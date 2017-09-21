import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { TeacherService } from '../service.teacher';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  teachers: Teacher[];
  teacherId: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TeacherService: TeacherService
  ) {
    this.TeacherService.getTeachers('http://localhost:4200/assets/teachers.json').subscribe(data => this.teachers = data);    
  }

  ngOnInit() {
    this.teacherId = this.route.snapshot.params['id'];
    this.route.snapshot.data['type'];
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.data['type']);
  }

}

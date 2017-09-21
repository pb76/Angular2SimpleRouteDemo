import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService {
  constructor (
    private http: Http
  ) {}

  getTeachers(url:string) {
    return this.http.get(url)
    .map((res:Response) => res.json());
  }
}

/*
headers: {
        'Content-Type': 'application/json',
        'JsonStub-User-Key': '70eb1e0c-61cf-4584-a540-5272c1067b3e',
        'JsonStub-Project-Key': '74fffd32-9b55-40a7-92ca-bb77a1c16e24'
    }
*/
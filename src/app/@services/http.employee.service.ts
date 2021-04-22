import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../@interface/interface.sericve';
import { ModelEmployee } from '../@models/model.employee';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements BaseService<ModelEmployee> {
  private url = '/assets/data/employee.json';

  constructor(private http: HttpService) {}

  getAll(): Observable<ModelEmployee[]> {
    return this.http.getApi<ModelEmployee[]>(this.url);
  }
  updateOne(): Observable<ModelEmployee> {
    throw new Error('Method not implemented.');
  }
  updateMany(): Observable<ModelEmployee[]> {
    throw new Error('Method not implemented.');
  }
  postOne(): Observable<ModelEmployee> {
    throw new Error('Method not implemented.');
  }
  postMany(): Observable<ModelEmployee[]> {
    throw new Error('Method not implemented.');
  }
  deleteOne(): Observable<ModelEmployee> {
    throw new Error('Method not implemented.');
  }
  deleteMany(): Observable<ModelEmployee[]> {
    throw new Error('Method not implemented.');
  }
  findOne(): Observable<ModelEmployee> {
    throw new Error('Method not implemented.');
  }
}

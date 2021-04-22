import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basecomponent } from './@interface/interface.component';
import { ModelEmployee } from './@models/model.employee';
import { EmployeeService } from './@services/http.employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements Basecomponent<ModelEmployee>, OnInit {
  title = 'interface-service';

  selectAllList$!: Observable<ModelEmployee[]>;

  constructor(private employee: EmployeeService) {}

  ngOnInit() {
    this.selectAllList$ = this.employee.getAll();

    this.selectAllList$.pipe().subscribe((value) => {
      console.log(
        '🚀 ~ file: app.component.ts ~ line 24 ~ AppComponent ~ ngOnInit ~ value',
        value
      );
    });
  }

  callAPIGetAll(): void {
    throw new Error('Method not implemented.');
  }
  callAPIDelete(): void {
    throw new Error('Method not implemented.');
  }
}

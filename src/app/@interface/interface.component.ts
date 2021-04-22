import { Observable } from 'rxjs';

export declare interface Basecomponent<T> {
  selectAllList$: Observable<T[]>;

  callAPIGetAll(): void;

  callAPIDelete(): void;
}

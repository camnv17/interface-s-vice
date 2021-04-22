import { Observable } from 'rxjs';

export declare interface BaseService<T> {
  getAll(): Observable<T[]>;

  updateOne(): Observable<T>;

  updateMany(): Observable<T[]>;

  postOne(): Observable<T>;

  postMany(): Observable<T[]>;

  deleteOne(): Observable<T>;

  deleteMany(): Observable<T[]>;

  findOne(): Observable<T>;
}

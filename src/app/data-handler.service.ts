import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { Topic, Metadata } from './interfaces';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private dataUrl = 'http://localhost:8000/topics';
  
  private metadataSource = new Subject<Metadata>();
  metadata$ = this.metadataSource.asObservable();

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  getData(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.dataUrl)
    .pipe(
      catchError(this.handleError<any>('getData', []))
    )
    
  }

  transferMetadata(metadata: Metadata) {
    this.metadataSource.next(metadata)
  }


  // in case that getData() function wasn't able to retrieve data for any reason,
  // handleError() will ensure that error is displayed in user-friendly manner and
  // will return a safe value so that application won't stop running

  handleError<T>(operation = 'operation', result?: T) {
    return (error:any) : Observable<T> => {
      console.error(error);
      this.message.newMessage(`${operation} failed: ${error.message}`);
      console.log(this.message.messages)
      return of(result as T);
    }
  }
}






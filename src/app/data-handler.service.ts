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
  
  // defines stream source to be observed
  private metadataSource = new Subject<Metadata>();
  // defines observable property  for components to subscribe to
  metadata$ = this.metadataSource.asObservable();

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }


    /**
     * 
     * @returns {Obervable<Topic[]>} data to display
     */
  getData(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.dataUrl)
    .pipe(
      catchError(this.handleError<any>('getData', []))
    )
    
  }
  /**
   * @usageNotes 
   * ### passes next topic metadata to stream
   * @param metadata 
   */

  transferMetadata(metadata: Metadata) {
    this.metadataSource.next(metadata)
  }



  /**
   * @usageNotes
   * ### in case that getData() function wasn't able to retrieve data for any reason this function will ensure that error is displayed in user-friendly manner and
   * 
   * @param operation {string} name of the operation that failed
   * @param result {Type} captures what value is safe to return
   * @returns safe value so that app won't stop running
   */

  handleError<T>(operation = 'operation', result?: T) {
    return (error:any) : Observable<T> => {
      console.error(error, error.message);
      this.message.newMessage(`The system was unable to retrieve necessary data, please check if the data server is running.`);
      return of(result as T);
    }
  }
}






import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataHandlerService } from '../data-handler.service';
import { Metadata } from '../interfaces';


@Component({
  selector: 'app-topic-metadata',
  templateUrl: './topic-metadata.component.html',
  styleUrls: ['./topic-metadata.component.css']
})
export class TopicMetadataComponent implements OnInit { 

  public metadata: Metadata | null = null;
  private subsription: Subscription;

  constructor(
    private dataHandler: DataHandlerService
  ) {
    this.subsription = dataHandler.metadata$?.subscribe(
      metadata => {
        this.metadata = metadata;
        // console.log(this.metadata)
      }
    )
   }

  ngOnInit(): void {
  }

  // preventing memory leak
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }

}

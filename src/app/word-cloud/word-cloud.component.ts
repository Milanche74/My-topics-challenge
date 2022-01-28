import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { Topic } from '../interfaces';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  public topics: Topic[] = [];
  
  // this property will recieve information on what element has been clicked
  public selectedTopic?: Topic;



  // onInit will request data from server and shuffle data when it responds 
  ngOnInit(): void {
    this.dataHandler.getData()
    .subscribe((data: Topic[]) => {
      this.topics = this.shuffleArray(data);
      // console.log(data)
      
    })
  }

  
  /**
   * Fisher-Yates shuffle method
   * 
   * @param {Topic[]} array to be shuffled
   * @returns {Topic[]} shuffled array
   */
  shuffleArray(array: Topic[]): Topic[] {
    let currentIndex = array.length; 
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
   }

  return array;

  }

  
  // passes information on which element has been clicked to property
  selectTopic(topic:Topic) {
    this.selectedTopic = topic;
  }


  constructor(
    private dataHandler: DataHandlerService,
    public messageService: MessageService
  ) { }

 
}

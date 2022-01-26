import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { Topic } from '../interfaces';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  public topics: Topic[] = [];
  public selectedTopic?: Topic;

  ngOnInit(): void {
    this.dataHandler.getData()
    .subscribe(data => {
      this.topics = this.shuffleArray(data);
      console.log(data)
      
      
    })
  }

  //Fisher-Yates Shuffle method
  shuffleArray(array: any[]): Topic[] {
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

  selectTopic(topic:Topic) {
    this.selectedTopic = topic;
  }


  constructor(
    private dataHandler: DataHandlerService
  ) { }

 
}

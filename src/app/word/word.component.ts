import { Component, OnInit, Input } from '@angular/core';
import { Topic, Metadata } from '../interfaces';
import { DataHandlerService } from '../data-handler.service';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() topic!: Topic; 
  
  public fontSizeIndex: number = 0;
  public textColor: 'red' | 'green' | 'grey' = 'grey';
  public randomPositioningIndex: string = '0';


  constructor(
    private dataHandler: DataHandlerService
  ) { }

  ngOnInit(): void {
    
    // checks popularity of each topic and gives it a proper font size index
    // and assigns value for random positioning of smaller words
    
    if(this.topic.volume >= 5 && this.topic.volume < 10) {
      this.fontSizeIndex = 1;

      this.randomPositioningIndex = Math.floor(Math.random() * -50).toString()
    } 
    else if(this.topic.volume > 10 && this.topic.volume < 15) {
      this.fontSizeIndex = 2;
      
      this.randomPositioningIndex = Math.floor(Math.random() * -25).toString()
    } 
    else if(this.topic.volume > 15 && this.topic.volume < 25) {
      this.fontSizeIndex = 3;
    } 
    else if(this.topic.volume > 25 && this.topic.volume < 50) {
      this.fontSizeIndex = 4;
    } 
    else if(this.topic.volume > 50) {
      this.fontSizeIndex = 5;
    } 
    else {
      this.randomPositioningIndex = Math.floor(Math.random() * -100).toString();
    }
    console.log(this.topic)


    //checks sentimental score and assigns color accordingly

    if(this.topic.sentimentScore > 60) {
      this.textColor = 'green';
    }
    else if(this.topic.sentimentScore < 40) {
      this.textColor = 'red'
    }
    // console.log(this.textColor, this.topic.sentimentScore)

  }


  transferMetadata() {
    const metadata: Metadata = {
      label: this.topic.label,
      volume: this.topic.volume,
      sentiment: {
        negative: this.topic.sentiment.negative | 0,
        neutral: this.topic.sentiment.neutral | 0,
        positive: this.topic.sentiment.positive | 0
      },
      color: this.textColor
    }

    this.dataHandler.transferMetadata(metadata);
  }

}

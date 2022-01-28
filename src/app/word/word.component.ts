import { Component, OnInit, Input } from '@angular/core';
import { Topic, Metadata } from '../interfaces';
import { DataHandlerService } from '../data-handler.service';
import { TopicMetadataComponent } from '../topic-metadata/topic-metadata.component';


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  // sets child's side of parent-child property binding
  @Input() topic!: Topic; 
  
  // came up with a solution where indexes hols the information for individual componenet's styling
  // and is assigned to template so that it triggers the right CSS selector
  public fontSizeIndex: number = 0;
  public randomPositioningIndex: string = '0';

  // sets color of the text
  public textColor: 'red' | 'green' | 'grey' = 'grey';
  


  constructor(
    private dataHandler: DataHandlerService
  ) { }

 
  ngOnInit(): void {
    
   
    if(this.topic) {
      
      this.determineFontSizeAndPositioningIndex();

      this.determineTextColor();
    }    
  }

  /**
   * @usageNotes
    This function will set metadata information regarding clicked topic.
    Metada must hold defined value of all three sentiment's properties.
    I added color information to metadata to improve appereance.
    After metadata is set, function will pass that information to DataHandlerService's stream  
   */
  transferMetadata() {
    const metadata: Metadata = {
      label: this.topic.label,
      volume: this.topic.volume,
      sentiment: {
        negative: this.topic.sentiment.negative! | 0,
        neutral: this.topic.sentiment.neutral! | 0,
        positive: this.topic.sentiment.positive! | 0
      }, 
      color: this.textColor
    }
    

    this.dataHandler.transferMetadata(metadata);
  }


  // auxiliary methods used to determine topic's features


  /**
   * @usageNotes 
   * determines and assigns right fontSizeIndex and randomPositioningIndex (for smaller font sized elements).
   * randomPositioningIndex is giving random Y offset to improve layout
   */

  determineFontSizeAndPositioningIndex() {
    
    if(this.topic.volume >= 5 && this.topic.volume < 10) {
      this.fontSizeIndex = 1;

      this.randomPositioningIndex = Math.floor(Math.random() * -50).toString()
    } 
    else if(this.topic.volume >= 10 && this.topic.volume < 15) {
      this.fontSizeIndex = 2;
      
      this.randomPositioningIndex = Math.floor(Math.random() * -25).toString()
    } 
    else if(this.topic.volume >= 15 && this.topic.volume < 25) {
      this.fontSizeIndex = 3;
    } 
    else if(this.topic.volume >= 25 && this.topic.volume < 50) {
      this.fontSizeIndex = 4;
    } 
    else if(this.topic.volume > 50) {
      this.fontSizeIndex = 5;
    } 
    else {
      this.randomPositioningIndex = Math.floor(Math.random() * -100).toString();
    }
  }

  /**
   * @usageNotes
   * determines and assigns color to the text
   */

  determineTextColor() {

      if(this.topic.sentimentScore > 60) {
        this.textColor = 'green';
      }
      else if(this.topic.sentimentScore < 40) {
        this.textColor = 'red'
      }
  
  }

}

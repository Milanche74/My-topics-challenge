import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { WordComponent } from './word/word.component';
import { TopicMetadataComponent } from './topic-metadata/topic-metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    WordCloudComponent,
    WordComponent,
    TopicMetadataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

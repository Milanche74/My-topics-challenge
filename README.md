# MyTopicsChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## About
App was made using Angular 12.1.5. 
My Topics Challenge is an app that displays information on certain social media topics. Data was obtained from db.json file via JSON Server (mock REST API - details on setup are noted below). 
This project implements many Angular features such as HTTP Client request and observable streams of data, as well as overall modular structuring
of the application architecture.
Angular has Jasmine framework built in, so it is suitable for testing.

![Application Screenshot](/topics-screenshot.png "Optional Title")

### Structure
Each topic label is presented by word component and all of them are hosted by word-cloud component. 
On initializing and via data-handler-service, word-cloud component requests data from server a binds its data to 
child components (word components). 

Each word component is responsible for assertaining specific properties of each topic and assigning proper styling to the element. There are 6 posible font sizes depending on topics popularity and 3 possible text colors depending on the sentiment score. 
User can get information regarding each topic's popularity and sentiment values by clicking a topic label. Word component than passes that metadata to data-handler-service which streams that value to matadata component. Initialy, metadata component display short instruction on how to get metadata information. 

Data-handler-service has its own API for dealing with http errors. If server call responds with an error, this service will ensure that observable returns a safe value so that app can keep running and informs message service that there is a message to be displayed. Also, there is an element
that indicates that content is loading.

### Graphic design and Styling
Colors that are being used mostly revolve around tones of red, green and grey since they were set in the project requirements. Word cloud layout was made using flex layout and random positioning of some word elements that isn't predetermined. Word-cloud component also shuffles topics each time app is rerun.

Layout has responsive features and some animations. Animations are turned off for users who prefer not to see them.
Responsive typography is utilized with the use of Utopia calculator (web app that sets custom properties for font size depending on screen size).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Angular uses Jasmine testing framework and Karma executes code in the browser.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). 

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->

## Setting up a database

Apart from the regular Angular related stuff (listed above), one needs to install and run JSON Server in order to instatiate mock DB. Content of database is defined in db.json file in the project root folder.

Run `npm i json-server` to install the package locally

Run `npm run server` to initiate server on local host port 8000



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataHandlerService } from './data-handler.service';
import { Topic, Metadata } from './interfaces';
import { asyncData, asyncError} from 'src/test-helpers';


describe('DataHandlerService', () => {
  let service: DataHandlerService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  // let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule]
    // });
    // service = TestBed.inject(DataHandlerService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataHandlerService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

//   it('should return expected value', (done: DoneFn)=> {
//     const expectedTopics: Topic[] =  [
//       {
//         id: "1751295897__Berlin",
//         label: "Berlin",
//         volume: 165,
//         type: "topic",
//         sentiment: {
//           negative: 3,
//           neutral: 133,
//           positive: 29
//         },
//         sentimentScore: 65,
//         burst: 13,
//         days: [
//           {
//             date: "2014-06-06T00:00:00.000+0000",
//             volume: 22
//           },
//           {
//             date: "2014-06-04T00:00:00.000+0000",
//             volume: 43
//           },
//           {
//             date: "2014-06-09T00:00:00.000+0000",
//             volume: 0
//           },
//           {
//             date: "2014-06-07T00:00:00.000+0000",
//             volume: 12
//           },
//           {
//             date: "2014-06-08T00:00:00.000+0000",
//             volume: 11
//           },
//           {
//             date: "2014-06-03T00:00:00.000+0000",
//             volume: 39
//           },
//           {
//             date: "2014-06-05T00:00:00.000+0000",
//             volume: 38
//           }
//         ],
//         pageType: {
//           blog: 17,
//           facebook: 56,
//           forum: 22,
//           general: 5,
//           image: 0,
//           news: 26,
//           review: 1,
//           twitter: 35,
//           video: 3
//         },
//         queries: [
//           {
//             id: 1751295897,
//             name: "Berghain",
//             volume: 165
//           }
//         ]
//       },
//       {
//         id: "1751295897__DJ",
//         label: "DJ",
//         volume: 48,
//         type: "topic",
//         sentiment: {
//           neutral: 46,
//           positive: 2
//         },
//         sentimentScore: 54,
//         burst: 29,
//         days: [
//           {
//             date: "2014-06-06T00:00:00.000+0000",
//             volume: 4
//           },
//           {
//             date: "2014-06-04T00:00:00.000+0000",
//             volume: 10
//           },
//           {
//             date: "2014-06-09T00:00:00.000+0000",
//             volume: 0
//           },
//           {
//             date: "2014-06-07T00:00:00.000+0000",
//             volume: 11
//           },
//           {
//             date: "2014-06-08T00:00:00.000+0000",
//             volume: 3
//           },
//           {
//             date: "2014-06-03T00:00:00.000+0000",
//             volume: 12
//           },
//           {
//             date: "2014-06-05T00:00:00.000+0000",
//             volume: 8
//           }
//         ],
//         pageType: {
//           blog: 4,
//           facebook: 13,
//           forum: 8,
//           general: 1,
//           image: 0,
//           news: 7,
//           review: 1,
//           twitter: 13,
//           video: 1
//         },
//         queries: [
//           {
//             id: 1751295897,
//             name: "Berghain",
//             volume: 48
//           }
//         ]
//       }
//     ];

//     httpClientSpy.get.and.returnValue(asyncData(expectedTopics));
    
//     service.getData().subscribe({
//       next: topics => {
//         expect(topics)
//         .withContext('expected topics data')
//         .toEqual(expectedTopics);
//         done();
//       },
//       error: done.fail
//     });
//   });

//   it('should return an error when server responds with an error status of 404', (done: DoneFn) => {
    
//     const errorResponse = new HttpErrorResponse({
//       error: 'test 404 error',
//       status: 404, 
//       statusText: 'Not Found'
//     });
    

//     httpClientSpy.get.and.returnValue(asyncError(errorResponse));

//     service.getData().subscribe({
//       next: topics => done.fail('expected error, not expect topics'),
//       error: error => {
//         expect(error.message).toContain('test 404 error');
//         done();
//       }
      
//     })

//   })


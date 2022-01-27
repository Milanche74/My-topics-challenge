import { defer } from "rxjs";
/** 
* This obesrvables will emit data/error in next turn of JS engine
* defer operator transforms the observable so that it emits once and completes (like HTTP Client)
*/

/**
 * 
 * @param data 
 * @returns Observable
 * Creates async observable that emits once and completes
*/

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
};

/**
 * 
 * @param errorObject 
 * @returns Observable
 * Creates async observable error that errors after one full turn
*/

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
    
    
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {
  getWindowObject(): any {
    return window;
  }

  // getOutsetaObject(): any {
  //   return window['Outseta'];
  // }
}

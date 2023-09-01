import { Component } from '@angular/core';
import { WindowsService } from 'src/services/windows.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  windowOutseta: any;

  constructor(private globalService: WindowsService) {
    this.windowOutseta = this.globalService.getWindowObject();
  }
  ngOnInit(){
    // console.log("windows",this.windowOutseta.Outseta.auth.open({}))
  }
}

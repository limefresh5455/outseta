import { Component } from '@angular/core';
import { OutsetaService } from 'src/services/outseta.service';
import { WindowsService } from 'src/services/windows.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  windowOutseta: any
  outsetData:any
  injectOutseta:any
  constructor(private globalService: WindowsService,private outetaService: OutsetaService) {
    this.windowOutseta = this.globalService.getWindowObject();
    // this.outsetData = this.outetaService.getWindowObject();
    this.injectOutseta = this.outetaService.loadOutseta();
  }
  ngOnInit() {

      // console.log('login', this.outsetData)
      console.log('injectData', )
    // this.windowOutseta.Outseta.auth.open({
    //   widgetMode: "login|register",
    //   authenticationCallbackUrl: window.location.href,
    // })
  }
}

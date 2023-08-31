import { Component } from '@angular/core';
import { WindowsService } from 'src/services/windows.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  windowOutseta: any
  constructor(private globalService: WindowsService) {
    this.windowOutseta = this.globalService.getWindowObject();
  }
  ngOnInit() {
    this.windowOutseta.Outseta.auth.open({
      widgetMode: "login|register",
      authenticationCallbackUrl: window.location.href,
    })
  }
}

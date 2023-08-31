import { Component } from '@angular/core';
import { WindowsService } from 'src/services/windows.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  windowOutseta: any
  constructor(private globalService: WindowsService) {
    this.windowOutseta = this.globalService.getWindowObject();
  }
  ngOnInit() {
    this.windowOutseta.Outseta.auth.open({
      widgetMode: "register",
      authenticationCallbackUrl: window.location.href,
    })
  }
}

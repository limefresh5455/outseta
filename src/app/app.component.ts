import { Component } from '@angular/core';
import { OutsetaService } from 'src/services/outseta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outsetaData:any

  constructor (private outsetaService: OutsetaService) {
    this.outsetaData = this.outsetaService.loadOutseta()
  }
  openLoginModal=()=>{
    this.outsetaService.openLogin()
  }
  openSignUpModal=()=>{
    this.outsetaService.openSignUp()
  }

  openProfileModal=()=>{
    this.outsetaService.openSignUp()
  }
}

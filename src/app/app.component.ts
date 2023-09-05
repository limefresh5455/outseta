import { Component } from '@angular/core';
import { OutsetaService } from 'src/services/outseta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outsetaData:any;
  accessToken: string | null = null;
  setAccessToken :any;

  constructor (private outsetaService: OutsetaService) {
    this.outsetaData = this.outsetaService.loadOutseta();
  }

  ngOnInit(){
    this.extractAccessToken();
  }

  private extractAccessToken() {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('access_token');
    if (accessToken) {
      this.accessToken = accessToken;
      console.log(this.accessToken)
    }
  }

  openLoginModal=()=>{
    if (this.accessToken) {
      this.outsetaService.setAccessToken(this.accessToken)
      this.outsetaService.openLogin();
      console.log('user login successfully');
    }else{
      console.log('incorrect login');
    }

  }

  openSignUpModal=()=>{
    this.outsetaService.openSignUp();
  }



  handleLogOut=()=>{
    this.outsetaService.logoutModal();
    console.log('logout is working')
  }

  // openProfileModal=()=>{
  //   this.outsetaService.setAccessToken()
  // }
}

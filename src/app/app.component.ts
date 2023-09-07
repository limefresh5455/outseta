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
  loginUserModal : boolean | undefined;
  showNavBar : boolean | undefined;
  userInfo: any ;

  constructor (private outsetaService: OutsetaService) {
    this.outsetaData = this.outsetaService.loadOutseta();
  }

  ngOnInit(){
    this.loginUserModal
    this.extractAccessToken();

  }

  private extractAccessToken() {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('access_token');
    if (accessToken) {
      this.loginUserModal =false
      this.accessToken = accessToken;
    }
  }

  openLoginModal=()=>{
    this.outsetaService.openLogin();
    if (this.accessToken) {
      this.outsetaService.setAccessToken(this.accessToken)
      console.log('user login successfully');
    }else{
      console.log('Enter Valid details');
    }
  }

  openSignUpModal=()=>{
    this.outsetaService.openSignUp();
  }

  handleLogOut=()=>{
    this.outsetaService.setAccessToken('')
    this.outsetaService.logoutModal();
  }

  openProfileModal=async ()=>{
    this.outsetaService.setAccessToken(this.accessToken)
    this.userInfo=  await this.outsetaService.showGetUser()
    this.outsetaService.openProfile()
  }

}

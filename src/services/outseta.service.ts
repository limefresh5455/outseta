import { Injectable } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class OutsetaService {
  datasetValue: any;
  setOutsetValue: any;
  outSetaData: any;


  OUTSETA_ID = "DemoOutseta";

  OPTIONS = {
    id: this.OUTSETA_ID,
    domain: "regcheck2.outseta.com",
    monitorDom: true,
    load: "auth,profile"
  };

  outsetaPromise: Promise<any> | null = null;

  private createScript(): HTMLScriptElement {
    const optionsKey = `${this.OUTSETA_ID}Options`;
    (window as any)[optionsKey] = this.OPTIONS;
    const script = document.createElement("script");
    script.src = "https://cdn.outseta.com/outseta.min.js";
    this.datasetValue = script.dataset;
    this.datasetValue.options = optionsKey;
    return script;
  }

  async loadOutseta(): Promise<any> {
    if (this.outsetaPromise) return this.outsetaPromise;
    this.outsetaPromise = new Promise((resolve, reject) => {
      if ((window as any).DemoOutsetaOptions) {
        resolve((window as any).DemoOutsetaOptions);
      } else {
        const script = this.createScript();
        this.setOutsetValue = window;
        script.onload = () => {

          if (this.setOutsetValue.DemoOutseta) {
            resolve(this.setOutsetValue.DemoOutseta);
          } else {
            reject(new Error("Outseta.js not available or domain not set"));
          }

        };

        script.onerror = () => {
          reject(new Error("Failed to load Outseta.js"));
        };
        document.head.appendChild(script);
      }
    });
    return this.outsetaPromise;
  }

  openLogin = () => {
    const outsetaInstance: any = window.DemoOutseta
    console.log('check user', outsetaInstance)
    outsetaInstance.auth.open({
      widgetMode: "login|register",
      authenticationCallbackUrl: window.location.href,

    })
  }
  openSignUp = () => {
    const outsetaInstance: any = window.DemoOutseta

    outsetaInstance.auth.open({widgetMode: "register",
    authenticationCallbackUrl: window.location.href})
  }
  openProfileModal = () => {
    const outsetaInstance: any = window.DemoOutseta
    outsetaInstance.profile.open({ tab: "profile"})
  }

  // showGetUser=async ()=>{
  //   const outsetaInstance: any = window.DemoOutseta
  //   const userData = outsetaInstance.getUser()
  //   console.log('get useer work', userData)
  // }

  setAccessToken= (token:any)=>{
    const outsetaInstance: any = window.DemoOutseta
     outsetaInstance.setAccessToken(token)
  }

  logoutModal= ()=>{
    const outsetaInstance: any = window.DemoOutseta
     outsetaInstance.setAccessToken('')
  }
}

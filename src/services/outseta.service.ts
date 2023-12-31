import { Injectable} from '@angular/core';

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

  openProfile = () => {
    const outsetaInstance: any = window.DemoOutseta
    outsetaInstance.profile.open({ tab: "profile", })
  }

  showGetUser = async () => {
    const outsetaInstance: any = window.DemoOutseta;
    if (outsetaInstance) {
     const user =  await outsetaInstance.getUser();
       return user
      await outsetaInstance.getAccessToken();
    } else {
      console.error('Outseta methods not available or not loaded yet.');
    }
  }

  setAccessToken= (token:any)=>{
    const outsetaInstance: any = window.DemoOutseta;
     outsetaInstance.setAccessToken(token);
  }

  logoutModal= async ()=>{
    const outsetaInstance: any = window.DemoOutseta;
     outsetaInstance.setAccessToken('')

  }

}

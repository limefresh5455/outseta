import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutsetaService {
  datasetValue:any;
  setOutsetValue :any;
  OUTSETA_ID = "DemoOutseta";

  OPTIONS = {
    id: this.OUTSETA_ID,
    domain: "queen.outseta.com",
    monitorDom: true,
    load: "auth,profile"
  };
   outsetaPromise: Promise<any> | null = null;

   private createScript(): HTMLScriptElement {
    const optionsKey = `${this.OUTSETA_ID}Options`;


    (window as any)[optionsKey] = this.OPTIONS;
    const script = document.createElement("script");

    script.src = "https://cdn.outseta.com/outseta.min.js";
    // script.dataset.options = DemoOutsetaOptions;
    this.datasetValue = script.dataset
    this.datasetValue.DemoOutsetaOptions = optionsKey;
       return script;
  }

  loadOutseta(): Promise<any> {
      if (this.outsetaPromise) return this.outsetaPromise;
     this.outsetaPromise = new Promise((resolve, reject) => {
      console.log(window)
      if ((window as any).DemoOutsetaOptions) {
        resolve((window as any).DemoOutsetaOptions);
      } else {
        const script = this.createScript();
        this.setOutsetValue = window
        script.onload = () => {
                 console.log(this.setOutsetValue)
          if ((window as any).DemoOutsetaOptions) {
            resolve((window as any).DemoOutsetaOptions);
          } else {
            console.log('it is not working')
            reject(new Error("Outseta.js not available"));
          }
        };
        script.onerror = () => {
          reject(new Error("Failed to load Outseta.js"));
        };

        //  document.head.appendChild(script);
      }
    });

    return this.outsetaPromise;
  }
}

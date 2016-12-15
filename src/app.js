import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
  constructor(http) {
    this.http = http;
    this.message = 'Hello World! - Welcome to the Aurelia Client Skeleton';
    this.apiresp = '';
  }

  doapi() {
    console.log('doing api baby');

    this.http.fetch('http://localhost:9000/api/testme')
      .then(response => response.json())
      .then(data => {
        this.apiresp = JSON.stringify(data);
      });
  }

  doclear() {
    this.apiresp = '';
  }
}

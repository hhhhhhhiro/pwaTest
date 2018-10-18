import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';
import { SwPush } from '@angular/service-worker';

@Component ({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})
export  class  AppComponent  implements  OnInit {
title  =  'pwademo';
items:  Array<Item>;
readonly VAPID_PUBLIC_KEY = 'BLcuAAyxFjiY5ni2ToWip9xQBQckr63BoyCt-M_MeEA3Vz0j7UdoHDrc0XBwVXy-6YtvlGYPT1uzSibqcqdywI0';
constructor(private  apiService:  ApiService,
            private swPush: SwPush) {
}
ngOnInit() {
this.fetchData();
}

fetchData() {
  this.apiService.fetch().subscribe((data:  Array<Item>) => {
  console.log(data);
  this.items  =  data;
  }, (err) => {
  console.log(err);
  });
}

// subscribeToNotifications() {

//   this.swPush.requestSubscription({
//       serverPublicKey: this.VAPID_PUBLIC_KEY
//   })
//   .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
//   .catch(err => console.error('Could not subscribe to notifications', err));
// }
}

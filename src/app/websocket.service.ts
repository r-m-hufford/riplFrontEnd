import { Injectable } from '@angular/core';
import {AppComponent} from './app.component';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  webSocketEndPoint = 'ws://localhost:8080';
  topic = '/topic/public';
  stompClient: any;
  appComponent: AppComponent;

  constructor(appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  // _connect() {
  //   console.log('Initialize WebSocket Connection');
  //   let ws = new SockJS(this.webSocketEndPoint);
  //   this.stompClient = Stomp.over(ws);
  //   const _this = this;
  //   _this.stompClient.connect({}, function(frame) {
  //     _this.stompClient.subscribe(_this.topic, function(sdkEvent) {
  //       _this.onMessageReceived(sdkEvent);
  //     });
  //     // _this.stompClient.reconnect_delay = 2000;
  //   }, this.errorCallBack);
  // };
  //
  // _disconnect() {
  //   if (this.stompClient !== null) {
  //     this.stompClient.disconnect();
  //   }
  //   console.log('Disconnected');
  // }
  //
  // // on error, schedule a reconnection attempt
  // errorCallBack(error) {
  //   console.log('errorCallBack -> ' + error);
  //   setTimeout(() => {
  //     this._connect();
  //   }, 5000);
  // }
  //
  // /**
  //  * Send message to sever via web socket
  //  * @param {*} message
  //  */
  // _send(message) {
  //   console.log('calling logout api via web socket');
  //   this.stompClient.send('/app/chat', {}, JSON.stringify(message));
  // }
  //
  // onMessageReceived(message) {
  //   console.log('Message Recieved from Server :: ' + message);
  //   this.appComponent.handleMessage(JSON.stringify(message.body));
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Channel } from '../models/channel';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private apiBaseUrl = environment.apiBaseUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  public findAll(): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${this.apiBaseUrl}/Channel`);
  }

  public findById(id: number): Observable<Channel> {
    return this.http.get<Channel>(`${this.apiBaseUrl}/Channel/${id}`);
  }

  public createChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(`${this.apiBaseUrl}/Channel`, channel);
  }

  public updateChannel(id: number | undefined, channel: Channel | undefined): Observable<Channel> {
    return this.http.put<Channel>(`${this.apiBaseUrl}/Channel/${id}`, channel);
  }

  public deleteChannel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/Channel/${id}`);
  }

  // public addMessage(message: Message): Observable<Message> {
  //   return this.http.post(`${this.apiBaseUrl}/messages`, message);
  // }

}

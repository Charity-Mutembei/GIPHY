import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) {};

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.gifyApiKey}&limit=4&rating=g`)
    .subscribe ((response: any) => {
      this.gifs.next(response.data);
      console.log ('data', response)
    });

  }
}

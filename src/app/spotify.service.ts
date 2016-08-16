import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SpotifyService {

  constructor(public http:Http) {
    console.log('initializing SpotifyService');
  }

  searchByTrack(query:String):Observable<any>{
    console.log('Searching Spotify for:', query);
    let params:string = [
      `q=${query}`,
      `type=track`
    ].join("&");
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL).map(res => {
      console.log('Received:', res.json());
      return res.json();
    });
  }

}

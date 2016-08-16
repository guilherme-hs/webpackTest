import {Component} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SpotifyService} from "./spotify.service";
import {SearchComponent} from "./search/search.component";
import {ArtistComponent} from "./artist/artist.component";
import {TrackComponent} from "./track/track.component";
import {AlbumComponent} from "./album/album.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  version = '1.0.0';

  isCollapse:boolean = true;

  toogleCollapse():void{
    console.log('collapsing...');
    this.isCollapse = !this.isCollapse;
  }

  constructor(spotifyService:SpotifyService){}
}


const appRoutes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'artistis/:id', component: ArtistComponent},
  {path: 'tracks/:id', component: TrackComponent},
  {path: 'albums/:id', component: AlbumComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

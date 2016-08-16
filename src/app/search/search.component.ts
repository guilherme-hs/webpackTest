import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  query: string="";
  results: Object;

  constructor(private spotifyService: SpotifyService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('received params:', params);
      this.query = params['query'];
    });
    this.search();
  }

  submit(query:string):void{
    console.log('submited:', query);
    this.router.navigate(['search'],{queryParams:{query: query}}).then((_) => {this.search()})
  }

  search(): void {

    if (!this.query) {
      return;
    }
    this.spotifyService
      .searchByTrack(this.query)
      .subscribe((response: any) => {
        this.renderResults(response);
      })
  }

  renderResults(res:any):void{
    this.results = null;
    if(res && res.tracks && res.tracks.items){
      this.results = res.tracks.items;
    }
  }

}

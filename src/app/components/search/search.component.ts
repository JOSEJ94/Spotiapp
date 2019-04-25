import { Component } from "@angular/core";
import { SpotifyService } from "./../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) {}

  search(searchWord: string) {
    this.loading = true;
    this._spotifyService.getArtists(searchWord).subscribe(data => {
      this.artists = data;
      this.loading = false;
    });
  }
}

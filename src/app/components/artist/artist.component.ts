import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "./../../services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html"
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = true;
  constructor(
    private _actRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this._actRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist = (id: string) => {
    this._spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  };

  getTopTracks = (id: string) => {
    this._spotifyService.getTopTracksOfArtist(id).subscribe(tracks => {
      this.topTracks = tracks;
    });
  };
}

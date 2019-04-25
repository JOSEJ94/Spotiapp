import { Component } from "@angular/core";
import { SpotifyService } from "./../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this._spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
      },
      err => {
        this.error = true;
        this.errorMessage = err.error.error.message;
        this.loading = false;
        console.log(err);
      }
    );
  }
}

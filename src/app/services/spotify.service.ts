import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCxggJR3isBvj7dETIVElExvoq3JiRzMOK6RPoc8yiox5eaqe7c-xFzmu4RovdcEPRp5gY6rFtKCLJga1KO6FOIqonznZE3fEzdL02uk2LV3X4Yrps43CLUBaniQVF6tSPtOgf0wVzoShw"
    });
    return this.http.get(url, { headers });
  };

  getNewReleases = (): any =>
    this.getQuery("browse/new-releases").pipe(
      map((data: any) => data.albums.items)
    );

  getArtists = (searchWord: string): any =>
    this.getQuery(
      `search?q=${searchWord.replace(" ", "%20")}&type=artist`
    ).pipe(map((data: any) => data.artists.items));

  getArtist = (id: string) => this.getQuery(`artists/${id}`);

  getTopTracksOfArtist = (id: string): any =>
    this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
}

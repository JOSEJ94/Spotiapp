import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styles: []
})
export class CardsComponent {
  @Input()
  items: any[] = [];

  constructor(private _router: Router) {}

  seeArtist(item: any) {
    let artistId = item.type === "artist" ? item.id : item.artists[0].id;
    this._router.navigate(["/artist", artistId]);
  }
}

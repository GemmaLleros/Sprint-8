import { Component, OnInit } from '@angular/core';
import { ApiShipService } from '../services/api-ship.service';
import { Result, Starships } from '../interfaces/straships';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starShipsList: Result[] = [];
  page: number = 1

  constructor(private apiShipService: ApiShipService) { }

  ngOnInit(): void {
    this.getShips()
  }

  getShips() {
    if (this.page === 4) {
      return;
    }
    this.apiShipService.getShips(this.page)
      .subscribe(resp => {
        this.starShipsList = resp.results
      })
  }
  onScroll(): void {
    if (this.page === 4) {
      return;
    }
    this.apiShipService.getShips(++this.page)
      .subscribe((response: Starships) => {
        this.starShipsList.push(...response.results);
      })
  }

}

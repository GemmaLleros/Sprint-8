import { Component, OnInit } from '@angular/core';
import { ApiShipService } from '../services/api-ship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private apiShipService: ApiShipService){}

  get starShipsList(){
    return this.apiShipService.starShipsList;
  }

  ngOnInit(): void {
    this.apiShipService.getShips();
  }

}

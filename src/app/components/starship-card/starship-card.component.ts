import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiShipService } from '../services/api-ship.service';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit {

  constructor (
    private activatedRoute: ActivatedRoute,
    private apiShipService: ApiShipService
  ) {}

  currentShip: any;
  id: number = 0;
  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships';

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      const param = params.get('id');
      this.id = Number(param)
      this.getShipCard(this.id)
    });
  }

  getShipCard(id: number){
    this.currentShip = this.apiShipService.getShipCard(id)
      .subscribe(resp =>{
        this.currentShip = resp;
      })
  }


}

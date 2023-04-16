import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Result, Starships } from '../interfaces/straships';

@Injectable({
  providedIn: 'root'
})
export class ApiShipService {

  constructor( private http: HttpClient) { }

  public starShipsList: any [] =[]

  getShips() {
    this.http.get('https://swapi.dev/api/starships')
        .subscribe((resp:any)=>{
          console.log(resp.results)
          this.starShipsList= resp.results
        });
  }
}

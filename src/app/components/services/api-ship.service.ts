import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result, Starships } from '../interfaces/straships';

@Injectable({
  providedIn: 'root'
})
export class ApiShipService {

  constructor(private http: HttpClient) { }

  public starShipsList: Result[] = []

  getShips(page: number): Observable<Starships> {
    return this.http.get<Starships>(`https://starpi.herokuapp.com/starpi/starships/${page}`);
  }

  getShipCard(id: number): Observable <Result>{
    return this.http.get<Result>(`https://swapi.dev/api/starships/${id}/`);
  }

}

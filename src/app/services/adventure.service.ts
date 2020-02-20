import { Injectable } from '@angular/core';
//import { Game1Plots, GamePlots, GamePlots1 } from '../models/game1-data';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  constructor(private http: HttpClient) { }
  
  getAdventure(adventureId: number): Observable<Adventure> {
    let param: any = {'id': adventureId};
    return this.http.get<Adventure>('https://localhost:5001/api/Adventure', { params: param})
    .pipe(catchError(this.handleError));
  }

  getPlot(plotId: number): Observable<Plot> {
    let param: any = {'plotId': plotId};
    return this.http.get<Plot>('https://localhost:5001/api/Adventure/GetPlot', { params: param})
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    console.log("Server Error !");
    return throwError(error);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LamphService {

  baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  obtenerDatosAll(): Observable<any>{

    const url:string = `${this.baseUrl}/lamph`;

    return this.http.get<any>(url)
    .pipe(
      map (resp => resp),
      catchError(err => of(err))
    );
  }

  obtenerActivosPorFecha(fecha_inicio_param: Date, fecha_fin_param: Date){
    const url = `${this.baseUrl}/lamph/sensor`

    console.log(fecha_inicio_param.getTime());
    

  }



}

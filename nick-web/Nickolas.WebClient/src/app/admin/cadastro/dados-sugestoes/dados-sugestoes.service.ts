import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DadosSugestoesService {

  constructor(private http: Http) { }

  getSugestoes(incidentId){
    return this.http.get(environment.SERVER_API_PATH + 'sugestaoIncidentes/incidente?incidente_id=' + incidentId)
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  getSugestaoGlobal(){
    return this.http.get(environment.SERVER_API_PATH + 'sugestao')
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  getRating(sugestaoId){
    return this.http.get(environment.SERVER_API_PATH + 'ratings/sugestaoerro?sugestao_erro_id=' + sugestaoId)
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  putSugestao(sugestaoId, dataSugestao){
    return this.http.put(environment.SERVER_API_PATH + 'sugestao/' + sugestaoId, dataSugestao);
  }

  putSugestaoIncidente(sugestaoIncidenteId, dataSugestaoIncidente){
    return this.http.put(environment.SERVER_API_PATH + 'sugestaoIncidentes/' + sugestaoIncidenteId, dataSugestaoIncidente);
  }

  postSugestao(dataSugestao){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.SERVER_API_PATH + 'sugestao', dataSugestao, options)
                    .map((res: Response) => res.json());
  }

  deleteSugestao(sugestaoId){
    return this.http.delete(environment.SERVER_API_PATH + 'sugestao/' + sugestaoId);
  }

  postSugestaoIncidente(dataSugestaoIncidente){
    return this.http.post(environment.SERVER_API_PATH + 'sugestaoIncidentes', dataSugestaoIncidente);
  }

  deleteSugestaoIncidente(sugestaoIncidenteId){
    return this.http.delete(environment.SERVER_API_PATH + 'sugestaoIncidentes/' + sugestaoIncidenteId);
  }
}

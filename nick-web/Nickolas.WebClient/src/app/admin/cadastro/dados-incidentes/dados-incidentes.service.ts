import { of } from 'rxjs/observable/of';
import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DadosIncidentesService {

  constructor(private http: Http) { }

  getIncidentes(applicationId){
    return this.http.get(environment.SERVER_API_PATH + 'incidentes/aplicacoes?aplicacao_id=' + applicationId)
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  putIncidente(incidentId, dataIncident){
    return this.http.put(environment.SERVER_API_PATH + 'incidentes/' + incidentId, dataIncident);
  }

  postIncidente(dataIncident){
    return this.http.post(environment.SERVER_API_PATH + 'incidentes', dataIncident);
  }

  deleteIncidente(incidentId){
    return this.http.delete(environment.SERVER_API_PATH + 'incidentes/' + incidentId);
  }
}

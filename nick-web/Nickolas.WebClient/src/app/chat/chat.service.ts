import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  constructor(private http: Http) { }

  // GET
  getPtf() {
    return this.http.get(environment.SERVER_API_PATH + 'ptfs').map(res => res.json());
  }

  getModules(ptfVersion) {
    return this.http.get(environment.SERVER_API_PATH + 'ptfmodulos/ptf?id=' + ptfVersion).map(res => res.json());
  }

  getApplications(moduleId) {
    return this.http.get(environment.SERVER_API_PATH + 'modulos/aplicacoes?modulo_id=' + moduleId).map(res => res.json());
  }

  getIncidentsByApplication(applicationId) {
    return this.http.get(environment.SERVER_API_PATH + 'incidentes/aplicacoes?aplicacao_id=' + applicationId).map(res => res.json());
  }

  getSuggestionsByIncident(incidentId) {
    return this.http.get(environment.SERVER_API_PATH + 'sugestaoIncidentes/incidente?incidente_id=' + incidentId).map(res => res.json());
  }

  // POST
  createPostRating(rating) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(rating);
    return this.http.post(environment.SERVER_API_PATH + 'ratings', body, options).map((res: Response) => res.json());
  }
}

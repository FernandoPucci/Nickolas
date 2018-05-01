import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DadosPrincipaisService {

  constructor(private http: Http) { }

  getPTF(){
    return this.http.get(environment.SERVER_API_PATH + 'ptfs')
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  getModulo(ptfVersion){
    return this.http.get(environment.SERVER_API_PATH + 'ptfmodulos/ptf?id=' + ptfVersion)
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

  getAplicacao(moduleId){
    return this.http.get(environment.SERVER_API_PATH + 'modulos/aplicacoes?modulo_id=' + moduleId)
                    .map(res => res.json())
                    .pipe(catchError(Observable => of(null)));
  }

}

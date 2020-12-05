import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player';

const url = 'http://localhost:8085/api/v1/player';

@Injectable()
export class FichaService {
    constructor(private httpClient: HttpClient) { }

    public createFicha(ficha: Player): Observable<Player> {
        return this.httpClient.post<Player>(`${url}/create`, ficha);
    }

    public updateFicha(ficha: Player): Observable<Player> {
        return this.httpClient.put<Player>(`${url}/update`, ficha);
    }
}

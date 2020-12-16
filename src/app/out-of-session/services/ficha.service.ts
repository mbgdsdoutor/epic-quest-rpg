import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player';

const url = 'http://localhost:8085/api/v1/player';

@Injectable()
export class FichaService {
    constructor(private httpClient: HttpClient) { }

    public getFichaByUserId(userId: number): Observable<Player> {
        return this.httpClient.get<Player>(`${url}/getById/${userId}`);
    }

    public getPlayersByAdventureId(adventureId: number): Observable<any> {
        return this.httpClient.get<any>(`${url}/getPlayersByAdventureId/${adventureId}`);
    }

    public createFicha(ficha: Player, adventureId: number): Observable<string> {
        const fichaString = JSON.stringify(ficha);
        const obj = {
            adventure: { id: adventureId },
            player: fichaString
        }
        return this.httpClient.post<string>(`${url}/create`, obj);
    }

    public updateFicha(ficha: Player, adventureId: number): Observable<Player> {
        const fichaString = JSON.stringify(ficha);
        const obj = {
            id: ficha.id,
            adventure: { id: adventureId },
            player: fichaString
        }
        return this.httpClient.put<Player>(`${url}/update`, obj);
    }
}

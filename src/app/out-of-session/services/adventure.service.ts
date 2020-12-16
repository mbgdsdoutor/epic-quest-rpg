import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Adventure } from 'src/app/shared/models/adventure';
import { Poder } from 'src/app/shared/models/poder';
import { Pericia } from 'src/app/shared/models/pericia';
import { Item } from 'src/app/shared/models/item';

const url = 'http://localhost:8085/api/v1/adventure';

@Injectable()
export class AdventureService {
    constructor(private httpClient: HttpClient) { }

    public findAll(): Observable<Adventure[]> {
        return this.httpClient.get<Adventure[]>(`${url}/getAll`);
        // return of(adventuresMock);
    }

    public findById(id: number): Observable<Adventure> {
        return this.httpClient.get<Adventure>(`${url}/getById/${id}`);
        //return of(fullAdventuresMock.find(a => a.id === id));
    }

    public saveAdventure(adventure: Adventure): Observable<Adventure> {
        return this.httpClient.post<Adventure>(`${url}/create`, adventure);
    }
}

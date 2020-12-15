import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { adventuresMock, fullAdventuresMock } from 'src/app/utils/mocks';
import { Adventure } from 'src/app/shared/models/adventure';
import { Poder } from 'src/app/shared/models/poder';
import { Pericia } from 'src/app/shared/models/pericia';
import { Item } from 'src/app/shared/models/item';

const url = 'http://localhost:8085/api/v1/adventure';
const poderUrl = 'http://localhost:8085/api/v1/Poder';
const periciaUrl = 'http://localhost:8085/api/v1/Pericia';
const itemUrl = 'http://localhost:8085/api/v1/Item';

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

    public saveAllPoderes(poderes: Poder[]): Observable<Poder[]> {
        return this.httpClient.post<Poder[]>(`${poderUrl}/createAll`, poderes);
    }

    public saveAllPericias(pericias: Pericia[]): Observable<Pericia[]> {
        return this.httpClient.post<Pericia[]>(`${periciaUrl}/createAll`, pericias);
    }

    public saveAllItens(items: Item[]): Observable<Item[]> {
        return this.httpClient.post<Item[]>(`${itemUrl}/createAll`, items);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { adventuresMock } from 'src/app/utils/mocks';
import { Adventure } from 'src/app/shared/models/adventure';

const url = 'http://localhost:8085/api/v1/adventure';

@Injectable()
export class AdventureService {
    constructor(private httpClient: HttpClient) {}

    public findAll(): Observable<Adventure[]> {
        // return this.httpClient.get<Adventure[]>(`${url}/`);
        return of(adventuresMock);
    }
    public saveUser(adventure: Adventure): Observable<Adventure> {
        return this.httpClient.post<Adventure>(`${url}/`, adventure);
    }
}

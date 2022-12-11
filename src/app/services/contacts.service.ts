import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../../../configuration.json';
import { ConfigInterface } from '../interfaces/config.interface';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private configData: ConfigInterface = config;
    public data: [] = [];

    constructor(
        private http: HttpClient,
    ) {}

    public getContacts(numberUsers: number = this.configData.numberCards): Observable<UserInterface> {
        return this.http.get<UserInterface>(`${this.configData['userUrl']}/?results=${numberUsers}`);
    }

}

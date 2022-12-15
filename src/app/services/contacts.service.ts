import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import config from '../../../configuration.json';
import { ConfigInterface } from '../interfaces/config.interface';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private configData: ConfigInterface = config;
    constructor(
        private http: HttpClient,
    ) {}

    public getContacts(numberUsers: number = this.configData.numberCards): Observable<UserInterface> {
        const dataUrl = `${this.configData['userUrl']}/?nat=us,dk,fr,gb&results=${numberUsers}`;

        return this.http.get<UserInterface>(dataUrl).pipe(
            catchError(this.handleError),
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            // console.error('An error occurred:', error.error);
            errorMessage = `An error occurred: ${error.error}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            // console.error(
            //     `Backend returned code ${error.status}, body was: `, error.error);
            errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
        }

        errorMessage += `\n Something bad happened; please try again later.`;
        // Return an observable with a user-facing error message.
        return throwError(() => new Error(errorMessage));
    }
}

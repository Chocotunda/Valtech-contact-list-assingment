import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';
import * as contactsActions from '../actions/contacts.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ContactsEffect {
    constructor(
        private actions$: Actions,
        private contactsService: ContactsService
    ) {}

    public loadContacts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType<contactsActions.LoadContacts>(
                contactsActions.ContactsActions.LOAD_CONTACTS
            ),
            mergeMap(() =>
                this.contactsService.getContacts().pipe(
                    map(
                        (contacts: UserInterface) =>
                            new contactsActions.LoadContactsSuccess(contacts)
                    ),
                    catchError((error) =>
                        of(new contactsActions.LoadContactsFail(error))
                    )
                )
            )
        )
    );
}

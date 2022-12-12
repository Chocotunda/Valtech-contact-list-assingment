import { Action } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';

export enum ContactsActions {
    LOAD_CONTACTS = '[Contacts] Load Contacts',
    LOAD_CONTACTS_SUCCESS = '[Contacts] Load Contacts Success',
    LOAD_CONTACTS_FAIL = '[Contacts] Load Contacts Fail',
}

export class LoadContacts implements Action {
    readonly type = ContactsActions.LOAD_CONTACTS;
}

export class LoadContactsSuccess implements Action {
    readonly type = ContactsActions.LOAD_CONTACTS_SUCCESS;
    constructor(public payload: UserInterface[]) {}
}

export class LoadContactsFail implements Action {
    readonly type = ContactsActions.LOAD_CONTACTS_FAIL;
    constructor(public payload: string) {}
}

export type ContactsAction = LoadContacts | LoadContactsSuccess | LoadContactsFail;

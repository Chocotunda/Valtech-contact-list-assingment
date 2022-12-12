import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';
import * as contactsActions from '../actions/contacts.actions';
import * as fromRoot from '../interfaces/app.state';

export interface ContactState {
    contacts: UserInterface;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    contacts: ContactState;
}

export const initialState: ContactState = {
    contacts: {} as UserInterface,
    loading: false,
    loaded: false,
    error: '',
};

export function contactsReducer(
    state = initialState,
    action: contactsActions.ContactsAction
): ContactState {
    switch (action.type) {
        case contactsActions.ContactsActions.LOAD_CONTACTS: {
            return {
                ...state,
                loading: true,
            };
        }
        case contactsActions.ContactsActions.LOAD_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                contacts: action.payload,
            };
        }
        case contactsActions.ContactsActions.LOAD_CONTACTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}

const getContactFeatureState = createFeatureSelector<ContactState>(
    'contacts'
);

export const getContacts = createSelector(
    getContactFeatureState,
    (state: ContactState) => state.contacts
);

export const getContactsLoading = createSelector(
    getContactFeatureState,
    (state: ContactState) => state.loading
);

export const getContactsLoaded = createSelector(
    getContactFeatureState,
    (state: ContactState) => state.loaded
);

export const getError = createSelector(
    getContactFeatureState,
    (state: ContactState) => state.error
);

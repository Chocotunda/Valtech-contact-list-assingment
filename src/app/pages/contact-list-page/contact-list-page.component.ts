import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import config from '../../../../configuration.json';
import { ConfigInterface } from '../../interfaces/config.interface';
import { ResultsEntity } from '../../interfaces/user.interface';
import * as contactsActions from '../../store/actions/contacts.actions';


@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {
    public tabs: ConfigInterface['tabs'] = config.tabs;
    public selectedContact: ResultsEntity = {} as ResultsEntity;
    public contacts: any;

    constructor(
        private store: Store<any>,
    ) {}

    ngOnInit(): void {
            this.store.dispatch(new contactsActions.LoadContacts());
            this.store.subscribe(state => this.contacts = state.contacts.contacts.results);
    }

}

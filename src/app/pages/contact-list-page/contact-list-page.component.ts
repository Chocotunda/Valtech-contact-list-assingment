import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import config from '../../../../configuration.json';
import { ConfigInterface } from '../../interfaces/config.interface';
import { UserInterface, ContactEntity } from '../../interfaces/user.interface';
import * as contactsActions from '../../store/actions/contacts.actions';
import * as fromContacts from '../../store/reducers/contacts.reducer';

@Component({
    selector: 'app-contact-list-page',
    templateUrl: './contact-list-page.component.html',
    styleUrls: ['./contact-list-page.component.scss'],
})
export class ContactListPageComponent implements OnInit {
    public tabs: ConfigInterface['tabs'] = config.tabs;
    public selectedTab: string = 'All';
    public selectedContact: ContactEntity = {} as ContactEntity;
    public contacts$: Observable<UserInterface> | undefined;

    constructor(private store: Store<fromContacts.AppState>) {}

    public ngOnInit(): void {
        this.store.dispatch(new contactsActions.LoadContacts());
        this.contacts$ = this.store.pipe(select(fromContacts.getContacts));
    }

    public onSelectTab(event: Event): void {
        event.preventDefault();
        if (event.target !instanceof HTMLElement) {
            this.selectedTab = event.target.innerHTML;
        }
    }
}

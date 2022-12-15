import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { ContactEntity, UserInterface } from '../../interfaces/user.interface';
import * as contactsActions from '../../store/actions/contacts.actions';
import * as fromContacts from '../../store/reducers/contacts.reducer';

@Component({
    selector: 'app-contact-list-page',
    templateUrl: './contact-list-page.component.html',
    styleUrls: ['./contact-list-page.component.scss'],
})
export class ContactListPageComponent implements OnInit {

    public isTablet = this.deviceService.isTablet();
    public isDesktop = this.deviceService.isDesktop();

    public selectedContact: ContactEntity = {} as ContactEntity;
    public contacts$: Observable<UserInterface> | undefined;

    constructor(
        private store: Store<fromContacts.AppState>,
        private deviceService: DeviceDetectorService
    ) {}

    public ngOnInit(): void {
        this.store.dispatch(new contactsActions.LoadContacts());
        this.contacts$ = this.store.pipe(select(fromContacts.getContacts));
    }
}

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import config from '../../../../configuration.json';
import { ConfigInterface } from '../../interfaces/config.interface';
import { ContactEntity, UserInterface } from '../../interfaces/user.interface';
import { ContactOffcanvasComponent } from '../contact-offcanvas/contact-offcanvas.component';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnChanges {
    @Input() public contacts: UserInterface | null = {} as UserInterface;
    @Output() sendContact = new EventEmitter<ContactEntity>();

    public isMobile = this.deviceService.isMobile();
    public contactList: ContactEntity[] | null | undefined = [];
    public tabs: ConfigInterface['tabs'] = config.tabs;

    public selectedTab: string = 'default';

    constructor(
        private offcanvasService: NgbOffcanvas,
        private deviceService: DeviceDetectorService
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['contacts']) {
            this.contactList = this.sortContacts(
                changes['contacts'].currentValue.results
            );
        }
    }

    public onSelectContact(contact: ContactEntity): void {
        this.sendContact.emit(contact);
        if (this.isMobile) {
            const offcanvasRef = this.offcanvasService.open(ContactOffcanvasComponent);
            offcanvasRef.componentInstance.selectedContact = contact;
        }
    }

    public onSelectedOption(event: any): void {
        this.selectedTab = event.target.value;

        if (this.selectedTab === 'default') {
            this.contactList = this.sortContacts(this.contacts?.results);
        }

        if (this.selectedTab !== 'default') {
            let filteredContacts;
            filteredContacts = this.contacts?.results?.filter(
                (contact: ContactEntity) => {
                    return contact.name.last.startsWith(this.selectedTab);
                }
            );
            this.contactList = this.sortContacts(filteredContacts);
        }
    }

    private sortContacts(contactList: any): ContactEntity[] {
        if (!contactList) {
            return [];
        }
        return contactList
            .slice()
            .sort((a: ContactEntity, b: ContactEntity) =>
                a.name.last.localeCompare(b.name.last)
            );
    }
}

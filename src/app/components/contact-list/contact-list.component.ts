import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactEntity, UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnChanges {
    @Input() public selectedTab: string | undefined;
    @Input() public contacts: UserInterface | null = {} as UserInterface;
    @Output() sendContact = new EventEmitter<ContactEntity>();

    public contactList: ContactEntity[] | null | undefined = [];

    public onSelectContact(contact: ContactEntity): void {
        this.sendContact.emit(contact);
    }

    public ngOnInit(): void {
    }

    public ngOnChanges(changes:SimpleChanges): void {
        // console.log(changes['selectedTab'].currentValue);
        if (changes['contacts']) {
            this.contactList = this.sortContacts(changes['contacts'].currentValue.results);
        }

        if (changes['selectedTab']) {
            if (changes['selectedTab'].currentValue === 'All') {
                console.log(this.contacts?.results);
                this.contactList = this.sortContacts(this.contacts?.results);
            }

            if (changes['selectedTab'].currentValue !== 'All') {
                let filteredContacts;
                filteredContacts = this.contacts?.results?.filter((contact: ContactEntity) => {
                    return contact.name.last.startsWith(changes['selectedTab'].currentValue);
                });
                this.contactList = this.sortContacts(filteredContacts);
            }
        }

    }

    sortContacts(contactList: any): ContactEntity[] {
        if (!contactList) {
            return [];
        }
        return contactList.slice().sort((a: ContactEntity, b: ContactEntity) => a.name.last.localeCompare(b.name.last));

    }
}

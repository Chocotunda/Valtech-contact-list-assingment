import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    public contacts: UserInterface['results'] = [];
    public data: any = [];

    constructor(private contactsService: ContactsService) {}

    public ngOnInit(): void {
        this.contactsService.getContacts().subscribe((contacts: UserInterface) => {
            this.contacts = contacts.results;
        });

    }
}

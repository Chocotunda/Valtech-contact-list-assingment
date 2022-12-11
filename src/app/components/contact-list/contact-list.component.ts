import { Component, OnInit } from '@angular/core';
import { ConfigInterface } from '../../interfaces/config.interface';
import { UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';
import config from '../../../../configuration.json';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    public contacts: UserInterface['results'] = [];
    public tabs: ConfigInterface['tabs'] = config.tabs;

    constructor(private contactsService: ContactsService) {}

    public ngOnInit(): void {
        this.contactsService.getContacts().subscribe((contacts: UserInterface) => {
            this.contacts = contacts.results;
        });
    }
}

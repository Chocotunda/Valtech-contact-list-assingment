import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsEntity, UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
    @Output() sendContact = new EventEmitter<ResultsEntity>();
    public contacts: UserInterface['results'] = [];
    public errorMessage: string | undefined = undefined;
    private subscription: Subscription = new Subscription;

    constructor(
        private contactsService: ContactsService,
    ) {}

    public ngOnInit(): void {
        if (this.contacts?.length === 0) {
            this.subscription.add(
                this.contactsService.getContacts().subscribe((contacts: UserInterface) => {
                        this.contacts = contacts.results;
                    }, (error) => {
                        this.errorMessage = error;
                    },
                )
            );
        }
    }
    //
    // public ngOnDestroy(): void {
    //     this.subscription.unsubscribe();
    // }

    public onSelectContact(contact: ResultsEntity): void {
        console.log(contact);
        this.sendContact.emit(contact);
    }
}

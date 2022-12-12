import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsEntity, UserInterface } from '../../interfaces/user.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
    @Input() public contacts: UserInterface | null = {} as UserInterface;
    @Output() sendContact = new EventEmitter<ResultsEntity>();

    public onSelectContact(contact: ResultsEntity): void {
        this.sendContact.emit(contact);
    }
}

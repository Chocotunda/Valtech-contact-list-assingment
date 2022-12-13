import { Component, Input } from '@angular/core';
import { ContactEntity } from '../../interfaces/user.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
    @Input() selectedContact: ContactEntity = {} as ContactEntity;

    public isNotEmpty(): boolean {
        return Object.keys(this.selectedContact).length > 0;
    }
}

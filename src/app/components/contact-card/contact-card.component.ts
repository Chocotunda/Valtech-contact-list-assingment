import { Component, Input } from '@angular/core';
import { ResultsEntity } from '../../interfaces/user.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
    @Input() selectedContact: ResultsEntity = {} as ResultsEntity;

}

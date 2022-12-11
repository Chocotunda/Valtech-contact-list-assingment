import { Component } from '@angular/core';
import config from '../../../../configuration.json';
import { ConfigInterface } from '../../interfaces/config.interface';
import { ResultsEntity } from '../../interfaces/user.interface';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent {
    public tabs: ConfigInterface['tabs'] = config.tabs;
    public selectedContact: ResultsEntity = {} as ResultsEntity;

}

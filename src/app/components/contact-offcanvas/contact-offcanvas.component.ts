import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ContactEntity } from '../../interfaces/user.interface';

@Component({
    selector: 'app-contact-offcanvas',
    templateUrl: './contact-offcanvas.component.html',
})
export class ContactOffcanvasComponent {
    @Input() selectedContact: ContactEntity = {} as ContactEntity;

    constructor(public activeOffcanvas: NgbActiveOffcanvas) {}

}

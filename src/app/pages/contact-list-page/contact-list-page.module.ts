import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { ContactCardModule } from '../../components/contact-card/contact-card.module';
import { ContactListModule } from '../../components/contact-list/contact-list.module';
import { ContactOffcanvasModule } from '../../components/contact-offcanvas/contact-offcanvas.module';
import { ContactsEffect } from '../../store/effects/contacts.effect';
import { contactsReducer } from '../../store/reducers/contacts.reducer';

import { ContactListPageComponent } from './contact-list-page.component';

const contactListPageRoutes: Routes = [
    {
        path: '',
        component: ContactListPageComponent,
    },
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(contactListPageRoutes),
        ContactListModule,
        ContactCardModule,
        StoreModule.forFeature('contacts', contactsReducer),
        EffectsModule.forFeature([ContactsEffect]),
        FormsModule,
        ContactOffcanvasModule,
    ],
    exports: [ContactListPageComponent],
    declarations: [ContactListPageComponent],
})
export class ContactListPageModule {}

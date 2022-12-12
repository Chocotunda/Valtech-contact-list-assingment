import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactListComponent } from './contact-list.component';

@NgModule({
    imports: [
        NgForOf,
        NgIf,
        JsonPipe,
    ],
    exports: [ContactListComponent],
    declarations: [ContactListComponent],
    providers: [],
})
export class ContactListModule {}

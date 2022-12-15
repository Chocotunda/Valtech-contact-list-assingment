import { NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactListComponent } from './contact-list.component';

@NgModule({
    imports: [
        NgForOf,
        NgIf,
        UpperCasePipe,
    ],
    exports: [ContactListComponent],
    declarations: [ContactListComponent],
    providers: [],
})
export class ContactListModule {}

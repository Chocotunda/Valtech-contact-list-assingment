import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactCardComponent } from './contact-card.component';

@NgModule({
    imports: [
        NgIf,
    ],
    exports: [ContactCardComponent],
    declarations: [ContactCardComponent],
})
export class ContactCardModule {}

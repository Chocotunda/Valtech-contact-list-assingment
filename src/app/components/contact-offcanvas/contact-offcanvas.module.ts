import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactOffcanvasComponent } from './contact-offcanvas.component';

@NgModule({
    imports: [
        NgIf,
    ],
    exports: [ContactOffcanvasComponent],
    declarations: [ContactOffcanvasComponent],
})
export class ContactOffcanvasModule {}

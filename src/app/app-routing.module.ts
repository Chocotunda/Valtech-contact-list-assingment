import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'contact-list', component: ContactListPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

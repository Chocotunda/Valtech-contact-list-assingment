import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
    { path: 'contact-list', loadChildren: () => import('./pages/contact-list-page/contact-list-page.module').then(m => m.ContactListPageModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

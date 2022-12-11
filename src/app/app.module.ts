import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ContactListComponent,
        ContactListPageComponent,
        ContactCardComponent,
        NavigationBarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

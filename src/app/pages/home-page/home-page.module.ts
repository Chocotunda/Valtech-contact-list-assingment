import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';

const homePageRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(homePageRoutes)],
    exports: [HomePageComponent],
    declarations: [HomePageComponent],
    providers: [],
})
export class HomePageModule {}

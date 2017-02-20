import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

export const router: Routes = [
    //The line below is not necassary-seems to start me at the about page
    // { path: '', redirectTo: 'about', pathMatch: 'full'},
    { path: 'about', component: AboutComponent},
    { path: 'main', component: MainComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { MainComponent } from './main/main.component';

export const router: Routes = [
    //The line below is not necassary-seems to start me at the about page
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'about', component: AboutComponent},
    { path: 'learn', component: LearnComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

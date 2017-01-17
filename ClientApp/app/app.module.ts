import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FantasyComponent } from './components/fantasy/fantasy.component';
import { ContestantsComponent } from './components/contestants/contestants.component';
import { ContestantsService } from './services/contestants.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ContestantsComponent,
        HomeComponent,
        FantasyComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'contestants', component: ContestantsComponent },
            { path: 'fantasy', component: FantasyComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ContestantsService]
})
export class AppModule {
}

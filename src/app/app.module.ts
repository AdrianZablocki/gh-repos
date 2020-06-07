import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GhRepositoryModule } from './gh-repository/gh-repository.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GhRepositoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { CoreModule } from './modules/core/core.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './modules/articles/articles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SystemErrorHandler } from './system-error-handler';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ArticlesModule,
        CoreModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [
        {provide: ErrorHandler, useClass: SystemErrorHandler}],
    bootstrap: [AppComponent]
})
export class AppModule { }

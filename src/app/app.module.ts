import { CoreModule } from './modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './modules/articles/articles.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ArticlesModule,
      CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

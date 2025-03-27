import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { HomeDashComponent } from './home-dash/home-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjNavComponent } from './proj-nav/proj-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProjectLinkComponent } from './project-link/project-link.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeDashComponent,
    ProjNavComponent,
    ProjectLinkComponent,
    BlogCardComponent
  ],
    imports: [
        MatSlideToggleModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        NgOptimizedImage,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

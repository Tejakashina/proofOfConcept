import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[

  {path:"sidebar",component:SidebarComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

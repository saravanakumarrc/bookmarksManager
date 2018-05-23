import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarkCreateComponent } from './bookmark-create/bookmark-create.component';
import { BookmarkListingComponent } from './bookmark-listing/bookmark-listing.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkCreateComponent,
    BookmarkListingComponent,
    BookmarkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

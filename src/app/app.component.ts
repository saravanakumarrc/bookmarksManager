import { Component } from '@angular/core';
import { BookmarksService } from './provider/bookmarksProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookmarksService]
})
export class AppComponent {
  title = 'Bookmarks Manager';
}

import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../provider/bookmarksProvider';
import { Bookmark } from '../model/Bookmark';

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.css']
})
export class BookmarkCreateComponent implements OnInit {
  bookmark: Bookmark;

  constructor(public bookmarksService: BookmarksService) {
    this.bookmark = new Bookmark('', '');
   }

  ngOnInit() {
  }

  addBookmark() {
    this.bookmarksService.addBookmark(this.bookmark);
    this.bookmark = new Bookmark('', '');
  }


}

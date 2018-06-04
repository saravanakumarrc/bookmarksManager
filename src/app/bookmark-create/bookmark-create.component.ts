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

  addBookmark(title: string, link: string) {
    this.bookmark = new Bookmark(title, link);
    this.bookmarksService.addBookmark(this.bookmark);
    console.log('bookmark title:', title);
    console.log('bookmark link:', link);
    this.bookmark = new Bookmark('', '');
  }


}

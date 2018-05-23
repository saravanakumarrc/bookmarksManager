import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../provider/bookmarksProvider';
import { Bookmark } from '../model/Bookmark';

@Component({
  selector: 'app-bookmark-listing',
  templateUrl: './bookmark-listing.component.html',
  styleUrls: ['./bookmark-listing.component.css']
})
export class BookmarkListingComponent implements OnInit {

  constructor(public bookmarksService: BookmarksService) {
  }

  ngOnInit() {
  }

  getAllBookmarks(): Bookmark[] {
    return this.bookmarksService.getAllBookmarks();
  }

}

import { Bookmark } from "../model/Bookmark";

export class BookmarksService {
  public bookmarks: Bookmark[];

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  getAllBookmarks() {
    return this.bookmarks;
  }

  constructor() {
    this.bookmarks = [new Bookmark('google', 'http://google.co.in')];
  }
}

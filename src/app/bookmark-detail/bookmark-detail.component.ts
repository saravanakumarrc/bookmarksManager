import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../model/Bookmark';

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit {
  @Input() bookmark: Bookmark;

  constructor() { }

  ngOnInit() {
  }

}

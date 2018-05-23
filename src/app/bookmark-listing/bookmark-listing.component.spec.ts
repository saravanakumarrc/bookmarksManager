import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListingComponent } from './bookmark-listing.component';

describe('BookmarkListingComponent', () => {
  let component: BookmarkListingComponent;
  let fixture: ComponentFixture<BookmarkListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

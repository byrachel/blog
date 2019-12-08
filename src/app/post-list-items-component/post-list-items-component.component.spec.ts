import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemsComponentComponent } from './post-list-items-component.component';

describe('PostListItemsComponentComponent', () => {
  let component: PostListItemsComponentComponent;
  let fixture: ComponentFixture<PostListItemsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

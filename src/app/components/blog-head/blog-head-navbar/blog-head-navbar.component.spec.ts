import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeadNavbarComponent } from './blog-head-navbar.component';

describe('BlogHeadNavbarComponent', () => {
  let component: BlogHeadNavbarComponent;
  let fixture: ComponentFixture<BlogHeadNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHeadNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHeadNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

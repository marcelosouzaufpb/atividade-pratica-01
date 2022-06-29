import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeadPresentationComponent } from './blog-head-presentation.component';

describe('BlogHeadPresentationComponent', () => {
  let component: BlogHeadPresentationComponent;
  let fixture: ComponentFixture<BlogHeadPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHeadPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHeadPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

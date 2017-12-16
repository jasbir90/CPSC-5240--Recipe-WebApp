import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedjobtableComponent } from './postedjobtable.component';

describe('PostedjobtableComponent', () => {
  let component: PostedjobtableComponent;
  let fixture: ComponentFixture<PostedjobtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedjobtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedjobtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

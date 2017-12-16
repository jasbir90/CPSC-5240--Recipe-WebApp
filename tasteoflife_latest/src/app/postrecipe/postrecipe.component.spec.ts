import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrecipeComponent } from './postrecipe.component';

describe('PostrecipeComponent', () => {
  let component: PostrecipeComponent;
  let fixture: ComponentFixture<PostrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

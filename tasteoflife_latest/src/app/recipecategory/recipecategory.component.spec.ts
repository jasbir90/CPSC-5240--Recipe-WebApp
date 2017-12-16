import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecategoryComponent } from './recipecategory.component';

describe('RecipecategoryComponent', () => {
  let component: RecipecategoryComponent;
  let fixture: ComponentFixture<RecipecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

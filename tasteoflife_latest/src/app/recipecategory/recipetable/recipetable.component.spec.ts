import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipetableComponent } from './recipetable.component';

describe('RecipetableComponent', () => {
  let component: RecipetableComponent;
  let fixture: ComponentFixture<RecipetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

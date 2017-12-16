import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipetableComponent } from './myrecipetable.component';

describe('MyrecipetableComponent', () => {
  let component: MyrecipetableComponent;
  let fixture: ComponentFixture<MyrecipetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecipetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecipetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

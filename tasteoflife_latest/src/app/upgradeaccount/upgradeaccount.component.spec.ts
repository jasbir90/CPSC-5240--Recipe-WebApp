import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeaccountComponent } from './upgradeaccount.component';

describe('UpgradeaccountComponent', () => {
  let component: UpgradeaccountComponent;
  let fixture: ComponentFixture<UpgradeaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

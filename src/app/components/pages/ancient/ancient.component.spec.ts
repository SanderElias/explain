import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientComponent } from './ancient.component';

describe('AncientComponent', () => {
  let component: AncientComponent;
  let fixture: ComponentFixture<AncientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

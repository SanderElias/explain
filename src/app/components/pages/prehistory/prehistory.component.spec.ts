import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrehistoryComponent } from './prehistory.component';

describe('PrehistoryComponent', () => {
  let component: PrehistoryComponent;
  let fixture: ComponentFixture<PrehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

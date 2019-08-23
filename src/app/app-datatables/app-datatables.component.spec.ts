import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatatablesComponent } from './app-datatables.component';

describe('AppDatatablesComponent', () => {
  let component: AppDatatablesComponent;
  let fixture: ComponentFixture<AppDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitUploadComponent } from './wait-upload.component';

describe('WaitUploadComponent', () => {
  let component: WaitUploadComponent;
  let fixture: ComponentFixture<WaitUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

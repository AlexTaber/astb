import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineContentComponent } from './line-content.component';

describe('LineContentComponent', () => {
  let component: LineContentComponent;
  let fixture: ComponentFixture<LineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBikeComponent } from './svg-bike.component';

describe('SvgBikeComponent', () => {
  let component: SvgBikeComponent;
  let fixture: ComponentFixture<SvgBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

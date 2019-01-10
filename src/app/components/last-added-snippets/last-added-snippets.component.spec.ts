import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedSnippetsComponent } from './last-added-snippets.component';

describe('LastAddedSnippetsComponent', () => {
  let component: LastAddedSnippetsComponent;
  let fixture: ComponentFixture<LastAddedSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddedSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddedSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTaskComponent } from './find-task.component';

describe('FindTaskComponent', () => {
  let component: FindTaskComponent;
  let fixture: ComponentFixture<FindTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

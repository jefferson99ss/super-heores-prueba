import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSuperHereoeComponent } from './description-super-hereoe.component';

describe('DescriptionSuperHereoeComponent', () => {
  let component: DescriptionSuperHereoeComponent;
  let fixture: ComponentFixture<DescriptionSuperHereoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionSuperHereoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSuperHereoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

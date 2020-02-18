import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSuperHeroesComponent } from './ranking-super-heroes.component';

describe('RankingSuperHeroesComponent', () => {
  let component: RankingSuperHeroesComponent;
  let fixture: ComponentFixture<RankingSuperHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingSuperHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingSuperHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

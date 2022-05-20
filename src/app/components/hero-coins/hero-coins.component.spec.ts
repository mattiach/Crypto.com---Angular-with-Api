import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCoinsComponent } from './hero-coins.component';

describe('HeroCoinsComponent', () => {
  let component: HeroCoinsComponent;
  let fixture: ComponentFixture<HeroCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominanceComponent } from './dominance.component';

describe('DominanceComponent', () => {
  let component: DominanceComponent;
  let fixture: ComponentFixture<DominanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DominanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendGifsComponent } from './trend-gifs.component';

describe('TrendGifsComponent', () => {
  let component: TrendGifsComponent;
  let fixture: ComponentFixture<TrendGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

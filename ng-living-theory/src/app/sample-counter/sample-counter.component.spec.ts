import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCounterComponent } from './sample-counter.component';

describe('SampleCounterComponent', () => {
  let component: SampleCounterComponent;
  let fixture: ComponentFixture<SampleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

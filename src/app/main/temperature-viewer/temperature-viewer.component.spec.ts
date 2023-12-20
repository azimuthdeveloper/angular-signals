import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureViewerComponent } from './temperature-viewer.component';

describe('TemperatureViewerComponent', () => {
  let component: TemperatureViewerComponent;
  let fixture: ComponentFixture<TemperatureViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

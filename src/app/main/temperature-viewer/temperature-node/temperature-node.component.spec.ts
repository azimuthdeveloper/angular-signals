import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureNodeComponent } from './temperature-node.component';

describe('TemperatureNodeComponent', () => {
  let component: TemperatureNodeComponent;
  let fixture: ComponentFixture<TemperatureNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

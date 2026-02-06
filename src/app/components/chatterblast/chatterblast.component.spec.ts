import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterblastComponent } from './chatterblast.component';

describe('ChatterblastComponent', () => {
  let component: ChatterblastComponent;
  let fixture: ComponentFixture<ChatterblastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatterblastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatterblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

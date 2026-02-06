import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamweaverComponent } from './dreamweaver.component';

describe('DreamweaverComponent', () => {
  let component: DreamweaverComponent;
  let fixture: ComponentFixture<DreamweaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamweaverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamweaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindreaderComponent } from './mindreader.component';

describe('MindreaderComponent', () => {
  let component: MindreaderComponent;
  let fixture: ComponentFixture<MindreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindreaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

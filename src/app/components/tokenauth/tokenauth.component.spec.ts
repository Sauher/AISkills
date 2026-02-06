import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenauthComponent } from './tokenauth.component';

describe('TokenauthComponent', () => {
  let component: TokenauthComponent;
  let fixture: ComponentFixture<TokenauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

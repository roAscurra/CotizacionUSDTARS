import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioCryptoComponent } from './precio-crypto.component';

describe('PrecioCryptoComponent', () => {
  let component: PrecioCryptoComponent;
  let fixture: ComponentFixture<PrecioCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecioCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

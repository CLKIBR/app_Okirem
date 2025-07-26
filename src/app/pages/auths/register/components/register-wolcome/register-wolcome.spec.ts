import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWolcome } from './register-wolcome';

describe('RegisterWolcome', () => {
  let component: RegisterWolcome;
  let fixture: ComponentFixture<RegisterWolcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWolcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWolcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

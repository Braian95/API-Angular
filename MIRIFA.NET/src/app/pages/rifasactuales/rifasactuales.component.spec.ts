import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifasactualesComponent } from './rifasactuales.component';

describe('RifasactualesComponent', () => {
  let component: RifasactualesComponent;
  let fixture: ComponentFixture<RifasactualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifasactualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RifasactualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

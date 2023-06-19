import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcarritoComponent } from './upcarrito.component';

describe('UpcarritoComponent', () => {
  let component: UpcarritoComponent;
  let fixture: ComponentFixture<UpcarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterifaComponent } from './updaterifa.component';

describe('UpdaterifaComponent', () => {
  let component: UpdaterifaComponent;
  let fixture: ComponentFixture<UpdaterifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

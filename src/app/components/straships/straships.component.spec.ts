import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrashipsComponent } from './straships.component';

describe('StrashipsComponent', () => {
  let component: StrashipsComponent;
  let fixture: ComponentFixture<StrashipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrashipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrashipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

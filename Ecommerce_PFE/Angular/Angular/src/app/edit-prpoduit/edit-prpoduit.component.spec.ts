import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrpoduitComponent } from './edit-prpoduit.component';

describe('EditPrpoduitComponent', () => {
  let component: EditPrpoduitComponent;
  let fixture: ComponentFixture<EditPrpoduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPrpoduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPrpoduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

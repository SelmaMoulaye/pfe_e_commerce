import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrpoduitComponent } from './create-prpoduit.component';

describe('CreatePrpoduitComponent', () => {
  let component: CreatePrpoduitComponent;
  let fixture: ComponentFixture<CreatePrpoduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePrpoduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePrpoduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

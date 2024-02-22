import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConserveComponent } from './conserve.component';

describe('ConserveComponent', () => {
  let component: ConserveComponent;
  let fixture: ComponentFixture<ConserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

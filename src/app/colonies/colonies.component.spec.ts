import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoniesComponent } from './colonies.component';

describe('ColoniesComponent', () => {
  let component: ColoniesComponent;
  let fixture: ComponentFixture<ColoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteHabilidadesComponent } from './teste-habilidades.component';

describe('TesteHabilidadesComponent', () => {
  let component: TesteHabilidadesComponent;
  let fixture: ComponentFixture<TesteHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteHabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

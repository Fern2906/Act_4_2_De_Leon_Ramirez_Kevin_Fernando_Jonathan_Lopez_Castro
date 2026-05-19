import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Celdas } from './celdas';

describe('Celdas', () => {
  let component: Celdas;
  let fixture: ComponentFixture<Celdas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Celdas],
    }).compileComponents();

    fixture = TestBed.createComponent(Celdas);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Celdas se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** El tipo por defecto debe ser 'Texto'. */
  it('debe tener tipo "Texto" por defecto', () => {
    expect(component.tipo).toBe('Texto');
  });

  /** El color por defecto debe ser 'Predeterminado'. */
  it('debe tener color "Predeterminado" por defecto', () => {
    expect(component.color).toBe('Predeterminado');
  });

  /** El tamano por defecto debe ser 'Desktop'. */
  it('debe tener tamano "Desktop" por defecto', () => {
    expect(component.tamano).toBe('Desktop');
  });

  // ── Inputs ────────────────────────────────────────────────────
  /** El @Input tipo debe aceptar y reflejar el valor recibido. */
  it('debe reflejar tipo recibido por @Input', () => {
    component.tipo = 'Tema';
    expect(component.tipo).toBe('Tema');
  });

  /** El @Input color debe aceptar y reflejar el valor recibido. */
  it('debe reflejar color recibido por @Input', () => {
    component.color = 'Clase';
    expect(component.color).toBe('Clase');
  });

  // ── claseHost ────────────────────────────────────────────────
  /** claseHost debe incluir las clases BEM correspondientes al tipo, color y tamano actuales. */
  it('claseHost debe incluir clases BEM correctas', () => {
    component.tipo = 'Texto';
    component.color = 'Predeterminado';
    component.tamano = 'Desktop';
    const clase = component.claseHost();
    expect(clase).toContain('celda--tipo-texto');
    expect(clase).toContain('celda--color-predeterminado');
    expect(clase).toContain('celda--tamano-desktop');
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Dropdown se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Comprueba que los cuatro @Input tienen sus valores iniciales correctos. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.estado).toBe('default');
    expect(component.tamano).toBe('grande');
    expect(component.label).toBe('Seleccionar');
    expect(component.items).toEqual([]);
  });

  // ── Inputs ────────────────────────────────────────────────────────────
  /** El @Input items debe actualizarse y reflejarse en la propiedad del componente. */
  it('debe reflejar items recibidos por @Input', () => {
    component.items = ['Enero', 'Febrero', 'Marzo'];
    fixture.detectChanges();
    expect(component.items.length).toBe(3);
  });

  /** El @Input label debe actualizarse y reflejarse en la propiedad del componente. */
  it('debe reflejar el label recibido por @Input', () => {
    component.label = 'Elegir mes';
    fixture.detectChanges();
    expect(component.label).toBe('Elegir mes');
  });

  /** El @Input estado debe actualizarse y reflejarse en la propiedad del componente. */
  it('debe reflejar el estado recibido por @Input', () => {
    component.estado = 'error';
    fixture.detectChanges();
    expect(component.estado).toBe('error');
  });
});


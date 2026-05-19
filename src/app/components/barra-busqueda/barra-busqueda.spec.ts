import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraBusqueda } from './barra-busqueda';

describe('BarraBusqueda', () => {
  let component: BarraBusqueda;
  let fixture: ComponentFixture<BarraBusqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraBusqueda],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraBusqueda);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente BarraBusqueda se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** El @Input placeholder debe iniciar con 'Buscar tema...' como texto guía. */
  it('debe tener placeholder por defecto "Buscar tema..."', () => {
    expect(component.placeholder).toBe('Buscar tema...');
  });

  /** La propiedad valor (modelo del campo de texto) debe iniciar vacía. */
  it('debe tener valor vacío al iniciar', () => {
    expect(component.valor).toBe('');
  });

  // ── Emisión del evento busqueda ─────────────────────────────────────────
  describe('onInput / evento busqueda', () => {
    /** onInput debe emitir el valor actual de `valor` a través del @Output busqueda. */
    it('debe emitir el valor actual al llamar onInput()', () => {
      const emitted: string[] = [];
      component.busqueda.subscribe((v: string) => emitted.push(v));

      component.valor = 'Angular';
      component.onInput();

      expect(emitted).toEqual(['Angular']);
    });

    /** onInput debe emitir cadena vacía cuando el campo no tiene texto. */
    it('debe emitir cadena vacía si el campo está vacío', () => {
      const emitted: string[] = [];
      component.busqueda.subscribe((v: string) => emitted.push(v));

      component.valor = '';
      component.onInput();

      expect(emitted).toEqual(['']);
    });

    /** Cada llamada sucesiva a onInput debe emitir el valor acumulado correctamente. */
    it('debe emitir múltiples veces en cada llamada a onInput()', () => {
      const emitted: string[] = [];
      component.busqueda.subscribe((v: string) => emitted.push(v));

      component.valor = 'a';
      component.onInput();
      component.valor = 'an';
      component.onInput();
      component.valor = 'ang';
      component.onInput();

      expect(emitted).toEqual(['a', 'an', 'ang']);
    });
  });

  // ── Placeholder en el DOM ──────────────────────────────────────────────────────────────────
  /** El atributo placeholder del <input> renderizado debe coincidir con el @Input recibido. */
  it('debe aplicar el placeholder al <input> del DOM', () => {
    component.placeholder = 'Buscar materia...';
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input?.placeholder).toBe('Buscar materia...');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Icon } from './icon';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Icon se instancia correctamente con TestBed. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Al no recibir inputs, name debe ser cadena vacía, size=24 y svg=cadena vacía. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.name).toBe('');
    expect(component.size).toBe(24);
    expect(component.svg).toBe('');
  });

  // ── Inputs ────────────────────────────────────────────
  /** El @Input name debe aceptar y conservar el nombre del icono SVG. */
  it('debe reflejar name recibido por @Input', () => {
    component.name = 'Icono_agregar';
    expect(component.name).toBe('Icono_agregar');
  });

  /** El @Input size debe aceptar un tamaño personalizado en píxeles. */
  it('debe reflejar size recibido por @Input', () => {
    component.size = 32;
    expect(component.size).toBe(32);
  });

  // ── ngOnChanges: no dispara fetch con name vacío ─────────────────
  /**
   * Cuando name es cadena vacía, ngOnChanges debe omitir la llamada a fetch
   * para evitar peticiones HTTP inútiles en el entorno de pruebas.
   */
  it('no debe llamar a fetch si name está vacío', () => {
    const fetchSpy = vi.spyOn(window, 'fetch');
    component.name = '';
    component.ngOnChanges();
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});


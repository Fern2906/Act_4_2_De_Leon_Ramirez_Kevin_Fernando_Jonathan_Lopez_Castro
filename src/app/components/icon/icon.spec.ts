import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  /** Al no recibir inputs, name debe ser cadena vacía y size debe ser 24. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.name).toBe('');
    expect(component.size).toBe(24);
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

  // ── maskUrl ───────────────────────────────────────────────────
  /** maskUrl debe retornar un SafeStyle cuyo valor incluya el nombre del icono. */
  it('maskUrl debe incluir el nombre del icono', () => {
    component.name = 'Icono_agregar';
    const url = (component.maskUrl as any).changingThisBreaksApplicationSecurity as string;
    expect(url).toContain('Icono_agregar');
  });
});


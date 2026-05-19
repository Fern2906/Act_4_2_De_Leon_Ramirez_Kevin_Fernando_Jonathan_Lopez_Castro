import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inputs } from './inputs';

describe('Inputs', () => {
  let component: Inputs;
  let fixture: ComponentFixture<Inputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputs],
    }).compileComponents();

    fixture = TestBed.createComponent(Inputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Inputs se instancia correctamente con TestBed. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Sin configuración externa, tipo debe ser 'texto' y tamaño 'grande'. */
  it('debe tener tipo texto y tamano grande por defecto', () => {
    expect(component.tipo).toBe('texto');
    expect(component.tamano).toBe('grande');
  });

  // ── Getter htmlInputType ─────────────────────────────────
  describe('inputType', () => {
    /** htmlInputType debe retornar 'text' cuando tipo='texto'. */
    it('debe devolver text para tipo texto', () => {
      component.tipo = 'texto';
      expect(component.htmlInputType).toBe('text');
    });

    /** htmlInputType debe retornar 'number' cuando tipo='numero'. */
    it('debe devolver number para tipo numero', () => {
      component.tipo = 'numero';
      expect(component.htmlInputType).toBe('number');
    });

    /** htmlInputType debe retornar 'date' cuando tipo='fecha'. */
    it('debe devolver date para tipo fecha', () => {
      component.tipo = 'fecha';
      expect(component.htmlInputType).toBe('date');
    });

    /** Para cualquier tipo no reconocido, htmlInputType debe retornar 'text' como valor seguro. */
    it('debe devolver text para tipo desconocido', () => {
      component.tipo = 'desconocido';
      expect(component.htmlInputType).toBe('text');
    });
  });

  // ── Getter placeholder ───────────────────────────────────
  describe('inputPlaceholder', () => {
    it('debe devolver el placeholder correcto para texto', () => {
      component.tipo = 'texto';
      expect(component.placeholder).toBe('Inserte texto...');
    });

    it('debe devolver el placeholder correcto para numero', () => {
      component.tipo = 'numero';
      expect(component.placeholder).toBe('Inserte cantidad...');
    });

    it('debe devolver el placeholder correcto para fecha', () => {
      component.tipo = 'fecha';
      expect(component.placeholder).toBe('Fecha');
    });

    it('debe devolver el placeholder por defecto para tipo desconocido', () => {
      component.tipo = 'otro';
      expect(component.placeholder).toBe('Inserte texto...');
    });
  });
});


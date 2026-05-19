import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Etiqueta } from './etiqueta';

describe('Etiqueta', () => {
  let component: Etiqueta;
  let fixture: ComponentFixture<Etiqueta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etiqueta],
    }).compileComponents();

    fixture = TestBed.createComponent(Etiqueta);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Etiqueta se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Comprueba que porcentaje y estados tienen valores placeholder por defecto. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.porcentaje).toBe('value%');
    expect(component.estados).toBe('clase');
  });

  // ── Inputs ────────────────────────────────────────────
  /** El @Input porcentaje debe actualizarse y reflejarse en la propiedad del componente. */
  it('debe reflejar el porcentaje recibido por @Input', () => {
    component.porcentaje = '75%';
    fixture.detectChanges();
    expect(component.porcentaje).toBe('75%');
  });

  /** El @Input estados='verde' debe reflejarse para representar un estado exitoso. */
  it('debe reflejar el estado recibido por @Input', () => {
    component.estados = 'verde';
    fixture.detectChanges();
    expect(component.estados).toBe('verde');
  });

  /** El @Input estados='rojo' debe reflejarse para representar un estado de alerta crítica. */
  it('debe reflejar el estado rojo', () => {
    component.estados = 'rojo';
    fixture.detectChanges();
    expect(component.estados).toBe('rojo');
  });
});


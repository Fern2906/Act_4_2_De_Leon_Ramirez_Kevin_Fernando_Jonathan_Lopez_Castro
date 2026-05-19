import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMes, TablaFila } from './tabla-mes';

const filaVacia = (): TablaFila => ({
  titulo: 'Tema', descripcion: 'Desc',
  hp: null, hr: null, problemas: null, teoria: null,
  trabajos: null, tareas: null, examenes: null, porcentaje: null,
});

describe('TablaMes', () => {
  let component: TablaMes;
  let fixture: ComponentFixture<TablaMes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMes],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMes);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente TablaMes se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ─────────────────────────────────────────────────
  /** El @Input filas debe inicializarse con 4 filas de ejemplo al no recibir datos. */
  it('debe tener 4 filas por defecto', () => {
    expect(component.filas.length).toBe(4);
  });

  /** mesActual debe iniciar como 'MES' hasta que el usuario navegue entre meses. */
  it('debe tener mesActual igual a "MES" por defecto', () => {
    expect(component.mesActual).toBe('MES');
  });

  /** La tabla muestra exactamente 14 columnas de días (2 semanas de planeación). */
  it('debe tener exactamente 14 columnas de días', () => {
    expect(component.dias.length).toBe(14);
  });

  /** Ninguna fila por defecto debe tener porcentaje asignado; todas deben ser null. */
  it('todas las filas por defecto deben tener porcentaje null', () => {
    component.filas.forEach(f => expect(f.porcentaje).toBeNull());
  });

  // ── Input filas personalizado ───────────────────────────────────────────
  /** Al recibir un arreglo personalizado en @Input filas, el componente debe reflejarlo. */
  it('debe aceptar filas personalizadas via @Input', () => {
    const custom: TablaFila[] = [filaVacia(), filaVacia()];
    custom[0].titulo = 'Álgebra';
    custom[0].hp = 10;
    component.filas = custom;
    expect(component.filas.length).toBe(2);
    expect(component.filas[0].titulo).toBe('Álgebra');
    expect(component.filas[0].hp).toBe(10);
  });

  // ── Métodos de navegación ───────────────────────────────────────────────
  /** anteriorMes debe poder ejecutarse sin lanzar excepciones. */
  it('anteriorMes no debe lanzar errores', () => {
    expect(() => component.anteriorMes()).not.toThrow();
  });

  /** siguienteMes debe poder ejecutarse sin lanzar excepciones. */
  it('siguienteMes no debe lanzar errores', () => {
    expect(() => component.siguienteMes()).not.toThrow();
  });

  // ── Estructura TablaFila ───────────────────────────────────────────
  /** Cada fila debe exponer las 10 propiedades definidas en la interfaz TablaFila. */
  it('una fila debe contener todas las propiedades requeridas', () => {
    const fila = component.filas[0];
    const props: (keyof TablaFila)[] = [
      'titulo', 'descripcion', 'hp', 'hr', 'problemas',
      'teoria', 'trabajos', 'tareas', 'examenes', 'porcentaje',
    ];
    props.forEach(p => expect(fila).toHaveProperty(p));
  });
});

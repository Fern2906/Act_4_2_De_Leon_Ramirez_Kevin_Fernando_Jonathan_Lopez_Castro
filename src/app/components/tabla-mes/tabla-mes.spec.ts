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

  /** mostrarMolecula debe iniciar en false por defecto. */
  it('debe tener mostrarMolecula en false por defecto', () => {
    expect(component.mostrarMolecula).toBe(false);
  });

  /** textoNum debe retornar el número como string cuando no es null. */
  it('textoNum debe retornar string del número', () => {
    expect(component.textoNum(5)).toBe('5');
  });

  /** textoNum debe retornar "Num" cuando el valor es null. */
  it('textoNum debe retornar "Num" cuando es null', () => {
    expect(component.textoNum(null)).toBe('Num');
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
  /** onMesAnterior debe poder ejecutarse sin lanzar excepciones. */
  it('onMesAnterior no debe lanzar errores', () => {
    expect(() => component.onMesAnterior()).not.toThrow();
  });

  /** onMesSiguiente debe poder ejecutarse sin lanzar excepciones. */
  it('onMesSiguiente no debe lanzar errores', () => {
    expect(() => component.onMesSiguiente()).not.toThrow();
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

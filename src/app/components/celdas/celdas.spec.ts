import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Celdas, CeldaItem } from './celdas';

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
  /** El arreglo items debe inicializarse con exactamente 3 filas de ejemplo. */
  it('debe tener 3 items por defecto', () => {
    expect(component.items.length).toBe(3);
  });

  /** La lista colores debe contener los 5 colores permitidos en el selector de celda. */
  it('debe tener 5 colores disponibles', () => {
    expect(component.colores).toEqual(['blanco', 'gris', 'verde', 'amarillo', 'rojo']);
  });

  /** El tercer item por defecto debe tener colorSeleccionado='amarillo' según los datos de prueba. */
  it('el tercer item por defecto debe tener colorSeleccionado amarillo', () => {
    expect(component.items[2].colorSeleccionado).toBe('amarillo');
  });

  // ── seleccionarColor ────────────────────────────────────────
  describe('seleccionarColor', () => {
    /** seleccionarColor debe asignar el color elegido a la propiedad colorSeleccionado del item. */
    it('debe actualizar colorSeleccionado del item', () => {
      const item = component.items[0];
      component.seleccionarColor(item, 'verde');
      expect(item.colorSeleccionado).toBe('verde');
    });

    /** Una segunda llamada a seleccionarColor debe sobreescribir el color previo del mismo item. */
    it('debe sobreescribir el color previo', () => {
      const item = component.items[2]; // colorSeleccionado='amarillo'
      component.seleccionarColor(item, 'rojo');
      expect(item.colorSeleccionado).toBe('rojo');
    });

    /** seleccionarColor solo debe modificar el item recibido; los demás items no deben cambiar. */
    it('no debe afectar a los demás items', () => {
      const item0 = component.items[0];
      component.seleccionarColor(item0, 'gris');
      expect(component.items[1].colorSeleccionado).toBe('');
    });
  });

  // ── Input items personalizado ──────────────────────────────
  /** Al asignar un arreglo de CeldaItem al @Input items, el componente debe reflejarlo y renderizarlo. */
  it('debe aceptar items personalizados via @Input', () => {
    const custom: CeldaItem[] = [
      { texto1: 'A', texto2: 'B', mes: 'Ene', colorSeleccionado: 'blanco', titulo: 'T', descripcion: 'D' },
    ];
    component.items = custom;
    fixture.detectChanges();
    expect(component.items.length).toBe(1);
    expect(component.items[0].titulo).toBe('T');
  });
});


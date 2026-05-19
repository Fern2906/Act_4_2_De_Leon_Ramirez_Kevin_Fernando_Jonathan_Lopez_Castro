import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card, CardEtiqueta, CardBoton } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ────────────────────────────────────────────────────────────
  /** Verifica que el componente Card se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ─────────────────────────────────────────────────
  /** Sin configuración externa, todos los @Input deben tener sus valores iniciales por defecto. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.titulo).toBe('');
    expect(component.subtitulo).toBe('');
    expect(component.etiqueta).toBeNull();
    expect(component.etiquetas).toEqual([]);
    expect(component.mostrarBusqueda).toBe(false);
    expect(component.mostrarDropdown).toBe(false);
    expect(component.botones).toEqual([]);
  });

  // ── Inputs básicos ──────────────────────────────────────────────────────
  /** Los @Input titulo y subtitulo deben actualizarse y conservarse en la propiedad del componente. */
  it('debe reflejar titulo y subtitulo recibidos por @Input', () => {
    component.titulo = 'Planeación';
    component.subtitulo = 'Enero 2026';
    expect(component.titulo).toBe('Planeación');
    expect(component.subtitulo).toBe('Enero 2026');
  });

  // ── Etiqueta única ──────────────────────────────────────────────────────
  /** El @Input etiqueta debe aceptar un objeto CardEtiqueta con estado y porcentaje. */
  it('debe aceptar una etiqueta única via @Input', () => {
    const eta: CardEtiqueta = { estado: 'verde', porcentaje: '80%' };
    component.etiqueta = eta;
    expect(component.etiqueta?.porcentaje).toBe('80%');
    expect(component.etiqueta?.estado).toBe('verde');
  });

  // ── Lista de etiquetas ──────────────────────────────────────────────────
  /** El @Input etiquetas debe aceptar múltiples objetos CardEtiqueta para mostrar varios estados. */
  it('debe aceptar lista de etiquetas via @Input', () => {
    const lista: CardEtiqueta[] = [
      { estado: 'verde', porcentaje: '50%' },
      { estado: 'rojo', porcentaje: '10%' },
    ];
    component.etiquetas = lista;
    expect(component.etiquetas.length).toBe(2);
  });

  // ── Botones ─────────────────────────────────────────────────────────────
  /** El @Input botones debe aceptar una lista de CardBoton que define las acciones del pie del card. */
  it('debe aceptar lista de botones via @Input', () => {
    const bots: CardBoton[] = [
      { label: 'Cancelar', type: 'secundario' },
      { label: 'Guardar', type: 'primario' },
    ];
    component.botones = bots;
    expect(component.botones.length).toBe(2);
    expect(component.botones[1].label).toBe('Guardar');
  });

  // ── Flags de visibilidad ────────────────────────────────────────────────
  /** El @Input mostrarBusqueda=true debe habilitar la barra de búsqueda dentro del card. */
  it('mostrarBusqueda debe activarse con true', () => {
    component.mostrarBusqueda = true;
    expect(component.mostrarBusqueda).toBe(true);
  });

  /** El @Input mostrarDropdown=true debe habilitar el selector desplegable dentro del card. */
  it('mostrarDropdown debe activarse con true', () => {
    component.mostrarDropdown = true;
    expect(component.mostrarDropdown).toBe(true);
  });

  // ── Dropdown items ──────────────────────────────────────────────────────
  /** El @Input dropdownItems debe aceptar un arreglo de cadenas para poblar el dropdown interno. */
  it('debe reflejar dropdownItems recibidos por @Input', () => {
    component.dropdownItems = ['Enero', 'Febrero'];
    expect(component.dropdownItems).toEqual(['Enero', 'Febrero']);
  });
});

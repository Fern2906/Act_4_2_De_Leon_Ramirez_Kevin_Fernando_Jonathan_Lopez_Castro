import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modal, ModalBoton } from './modal';

describe('Modal', () => {
  let component: Modal;
  let fixture: ComponentFixture<Modal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal],
    }).compileComponents();

    fixture = TestBed.createComponent(Modal);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace tras configurar sus inputs
  });

  // ── Creación ────────────────────────────────────────────────────────────
  /** Verifica que el componente Modal se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Sin configuración externa, el modal debe tener título genérico, estar oculto y tener 2 botones por defecto. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.titulo).toBe('Texto principal');
    expect(component.visible).toBe(false);
    expect(component.botones.length).toBe(2);
    expect(component.botones[0].type).toBe('secundario');
    expect(component.botones[1].type).toBe('primario');
  });

  // ── Inputs ──────────────────────────────────────────────────────────────
  /** El @Input titulo debe actualizarse en la propiedad del componente. */
  it('debe reflejar titulo recibido por @Input', () => {
    component.titulo = 'Confirmar acción';
    expect(component.titulo).toBe('Confirmar acción');
  });

  /** El @Input visible=true debe hacer que el modal esté disponible para mostrarse. */
  it('debe volverse visible con visible=true', () => {
    component.visible = true;
    expect(component.visible).toBe(true);
  });

  /** El @Input botones debe reemplazar la lista de acciones del pie del modal. */
  it('debe reflejar botones recibidos por @Input', () => {
    const bots: ModalBoton[] = [{ label: 'Aceptar', type: 'exito' }];
    component.botones = bots;
    expect(component.botones[0].label).toBe('Aceptar');
  });

  // ── onCerrar ────────────────────────────────────────────────────────────
  describe('onCerrar', () => {
    it('debe poner visible en false', () => {
      component.visible = true;
      component.onCerrar();
      expect(component.visible).toBe(false);
    });

    it('debe emitir el evento cerrar', () => {
      let emitido = false;
      component.cerrar.subscribe(() => (emitido = true));
      component.onCerrar();
      expect(emitido).toBe(true);
    });

    it('debe emitir cerrar incluso si ya estaba invisible', () => {
      let conteo = 0;
      component.cerrar.subscribe(() => conteo++);
      component.visible = false;
      component.onCerrar();
      expect(conteo).toBe(1);
    });
  });
});

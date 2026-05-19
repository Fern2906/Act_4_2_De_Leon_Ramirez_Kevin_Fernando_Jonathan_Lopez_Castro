import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    // No se llama detectChanges() aquí; cada test lo hace después de configurar sus inputs
  });

  // ── Creación ──────────────────────────────────────────────────
  /** Verifica que el componente Button se instancia correctamente con TestBed. */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // ── Valores por defecto ──────────────────────────────────
  /** Comprueba que todos los @Input tienen sus valores por defecto al no recibir ningún binding externo. */
  it('debe tener valores por defecto correctos', () => {
    expect(component.size).toBe('desktop');
    expect(component.type).toBe('primario');
    expect(component.hover).toBe('predeterminado');
    expect(component.showIcon).toBe(true);
    expect(component.icon).toBe('Icono_agregar');
    expect(component.label).toBe('');
  });

  // ── Getter iconSize ───────────────────────────────────
  describe('iconSize', () => {
    /** El getter iconSize debe retornar 16 cuando size='mobile'. */
    it('debe devolver 16 para mobile', () => {
      component.size = 'mobile';
      expect(component.iconSize).toBe(16);
    });

    /** El getter iconSize debe retornar 18 cuando size='tablet'. */
    it('debe devolver 18 para tablet', () => {
      component.size = 'tablet';
      expect(component.iconSize).toBe(18);
    });

    /** El getter iconSize debe retornar 20 cuando size='desktop' (valor predeterminado). */
    it('debe devolver 20 para desktop', () => {
      component.size = 'desktop';
      expect(component.iconSize).toBe(20);
    });
  });

  // ── Clases CSS responsivas ────────────────────────────────
  describe('clases CSS', () => {
    /** Con los valores por defecto, el <button> debe tener las clases btn--primario y btn--desktop. */
    it('debe aplicar btn--primario y btn--desktop por defecto', () => {
      fixture.detectChanges();
      const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      expect(btn.classList).toContain('btn--primario');
      expect(btn.classList).toContain('btn--desktop');
    });

    /** Al asignar size='mobile', el <button> renderizado debe incluir la clase btn--mobile. */
    it('debe aplicar btn--mobile al cambiar size a mobile', () => {
      component.size = 'mobile';
      fixture.detectChanges();
      const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      expect(btn.classList).toContain('btn--mobile');
    });

    /** Al asignar size='tablet', el <button> renderizado debe incluir la clase btn--tablet. */
    it('debe aplicar btn--tablet al cambiar size a tablet', () => {
      component.size = 'tablet';
      fixture.detectChanges();
      const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      expect(btn.classList).toContain('btn--tablet');
    });

    /** Con hover='resaltado', el <button> debe incluir la clase CSS btn--resaltado. */
    it('debe aplicar btn--resaltado cuando hover es resaltado', () => {
      component.hover = 'resaltado';
      fixture.detectChanges();
      const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      expect(btn.classList).toContain('btn--resaltado');
    });

    /** Con hover='predeterminado', la clase btn--resaltado NO debe aparecer en el <button>. */
    it('NO debe aplicar btn--resaltado con hover predeterminado', () => {
      component.hover = 'predeterminado';
      fixture.detectChanges();
      const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      expect(btn.classList).not.toContain('btn--resaltado');
    });
  });

  // ── Renderizado de label ──────────────────────────────────
  /** Cuando type!='icono', el span .btn__label debe mostrar el texto del @Input label. */
  it('debe mostrar el label cuando type no es icono', () => {
    component.type = 'primario';
    component.label = 'Guardar';
    fixture.detectChanges();
    const span: HTMLElement = fixture.nativeElement.querySelector('.btn__label');
    expect(span?.textContent?.trim()).toBe('Guardar');
  });

  /** Cuando type='icono', el span .btn__label no debe renderizarse en el DOM. */
  it('NO debe mostrar el span de label cuando type es icono', () => {
    component.type = 'icono';
    fixture.detectChanges();
    const span: HTMLElement = fixture.nativeElement.querySelector('.btn__label');
    expect(span).toBeNull();
  });
});

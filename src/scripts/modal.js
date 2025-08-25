/* ================================================
   SISTEMA DE MODALES - REPROPLAST HR SYSTEM
   ================================================ */

const Modal = {
  // Configuración por defecto
  defaults: {
    size: 'md',
    closable: true,
    backdrop: true,
    animation: true,
    zIndex: 10000
  },

  // Estado actual
  current: null,

  // Mostrar modal
  show(options = {}) {
    const config = { ...this.defaults, ...options };

    // Crear contenedor si no existe
    let container = document.getElementById('modalContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'modalContainer';
      container.className = 'modal-container';
      document.body.appendChild(container);
    }

    // Generar HTML del modal
    const modalHTML = this.generateModalHTML(config);
    container.innerHTML = modalHTML;

    // Mostrar modal
    container.style.display = 'flex';

    // Aplicar animación
    if (config.animation) {
      setTimeout(() => {
        container.classList.add('show');
      }, 10);
    } else {
      container.classList.add('show');
    }

    // Configurar eventos
    this.setupEvents(container, config);

    // Guardar referencia
    this.current = container;

    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';

    return container;
  },

  // Generar HTML del modal
  generateModalHTML(config) {
    const sizeClass = this.getSizeClass(config.size);
    const closeButton = config.closable ? `
      <button class="modal-close" onclick="Modal.hide()" aria-label="Cerrar modal">✕</button>
    ` : '';

    const header = config.title ? `
      <div class="modal-header modal-header--brand">
        <div class="modal-title-wrap">
          <h2 class="modal-title">${config.title}</h2>
          ${config.subtitle ? `<p class="modal-subtitle">${config.subtitle}</p>` : ''}
        </div>
      </div>
    ` : '';

    return `
      <div class="modal-content ${sizeClass}" role="dialog" aria-modal="true" style="max-width: ${this.getMaxWidth(config.size)};">
        ${closeButton}
        ${header}
        <div class="modal-body ${config.title ? 'modal-body--with-header' : ''}">
          ${config.content || ''}
        </div>
        ${config.footer ? `<div class="modal-footer">${config.footer}</div>` : ''}
      </div>
    `;
  },

  // Obtener clase de tamaño
  getSizeClass(size) {
    const norm = (size || 'md').toString().toLowerCase();
    const alias = {
      small: 'sm',
      medium: 'md',
      large: 'lg',
      xlarge: 'xl'
    };
    const key = alias[norm] || norm;
    const sizeClasses = {
      sm: 'modal-sm',
      md: 'modal-md',
      lg: 'modal-lg',
      xl: 'modal-xl',
      full: 'modal-full'
    };
    return sizeClasses[key] || 'modal-md';
  },

  // Obtener ancho máximo
  getMaxWidth(size) {
    const norm = (size || 'md').toString().toLowerCase();
    const alias = { small: 'sm', medium: 'md', large: 'lg', xlarge: 'xl' };
    const key = alias[norm] || norm;
    const maxWidths = {
      sm: '400px',
      md: '600px',
      lg: '900px',
      xl: '1200px',
      full: '95vw'
    };
    return maxWidths[key] || '600px';
  },

  // Configurar eventos
  setupEvents(container, config) {
    // Cerrar con ESC
    if (config.closable) {
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          this.hide();
          document.removeEventListener('keydown', escHandler);
        }
      };
      document.addEventListener('keydown', escHandler);
    }

    // Cerrar con click en backdrop
    if (config.backdrop && config.closable) {
      container.addEventListener('click', (e) => {
        if (e.target === container) {
          this.hide();
        }
      });
    }

    // Prevenir cierre con click en el contenido
    const modalContent = container.querySelector('.modal-content');
    if (modalContent) {
      modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  },

  // Ocultar modal
  hide() {
    const container = this.current || document.getElementById('modalContainer');

    if (container) {
      // Aplicar animación de salida
      container.classList.remove('show');

      setTimeout(() => {
        container.style.display = 'none';
        container.innerHTML = '';
      }, 300);
    }

    // Restaurar scroll del body
    document.body.style.overflow = '';

    // Limpiar referencia
    this.current = null;
  },

  // Modal de confirmación
  confirm(options = {}) {
    const config = {
      title: options.title || '⚠️ Confirmar Acción',
      content: `
                <div style="padding: 30px; text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 20px;">❓</div>
                    <p style="font-size: 18px; color: #2c3e50; margin-bottom: 30px;">
                        ${options.message || '¿Está seguro de que desea continuar?'}
                    </p>
                </div>
            `,
      footer: `
                <button class="btn btn-secondary" onclick="Modal.hide()">
                    ${options.cancelText || 'Cancelar'}
                </button>
                <button class="btn btn-danger" onclick="Modal.handleConfirm()">
                    ${options.confirmText || 'Confirmar'}
                </button>
            `,
      size: 'sm',
      ...options
    };

    // Guardar callback
    this.confirmCallback = options.onConfirm;

    return this.show(config);
  },

  // Manejar confirmación
  handleConfirm() {
    if (this.confirmCallback && typeof this.confirmCallback === 'function') {
      this.confirmCallback();
    }
    this.hide();
  },

  // Modal de alerta
  alert(options = {}) {
    const config = {
      title: options.title || 'ℹ️ Información',
      content: `
                <div style="padding: 30px; text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 20px;">
                        ${options.icon || 'ℹ️'}
                    </div>
                    <p style="font-size: 16px; color: #2c3e50; margin-bottom: 30px;">
                        ${options.message || 'Información del sistema'}
                    </p>
                </div>
            `,
      footer: `
                <button class="btn btn-primary" onclick="Modal.hide()">
                    ${options.buttonText || 'Entendido'}
                </button>
            `,
      size: 'sm',
      ...options
    };

    return this.show(config);
  },

  // Modal de loading
  loading(message = 'Cargando...') {
    const config = {
      content: `
                <div style="padding: 60px 40px; text-align: center;">
                    <div class="loading" style="width: 40px; height: 40px; margin: 0 auto 20px;"></div>
                    <p style="font-size: 16px; color: #7f8c8d; margin: 0;">${message}</p>
                </div>
            `,
      closable: false,
      backdrop: false,
      size: 'sm'
    };

    return this.show(config);
  },

  // Modal de éxito
  success(message = 'Operación completada exitosamente') {
    return this.alert({
      title: '✅ Éxito',
      message: message,
      icon: '✅',
      buttonText: 'Continuar'
    });
  },

  // Modal de error
  error(message = 'Ha ocurrido un error') {
    return this.alert({
      title: '❌ Error',
      message: message,
      icon: '❌',
      buttonText: 'Cerrar'
    });
  },

  // Modal de advertencia
  warning(message = 'Advertencia del sistema') {
    return this.alert({
      title: '⚠️ Advertencia',
      message: message,
      icon: '⚠️',
      buttonText: 'Entendido'
    });
  }
};

// Exportar para uso global
window.Modal = Modal;

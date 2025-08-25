/* ================================================
   APLICACIÓN PRINCIPAL - REPROPLAST HR SYSTEM
   ================================================ */

const App = {
  // Estado de la aplicación
  state: {
    currentModule: 'dashboard',
    sidebarCollapsed: false,
    user: {
      name: 'Administrador',
      role: 'Sistema',
      avatar: '👤'
    }
  },

  // Configuración de módulos
  modules: {
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Resumen general del sistema',
      icon: '🏠'
    },
    employees: {
      title: 'Gestión de Empleados',
      subtitle: 'Administración de personal',
      icon: '�'
    },
    vacations: {
      title: 'Vacaciones',
      subtitle: 'Solicitudes y calendario de vacaciones',
      icon: '�'
    },
    advances: {
      title: 'Anticipos',
      subtitle: 'Gestión de anticipos de nómina',
      icon: '💰'
    },
    planilla: {
      title: 'Planilla de Pago',
      subtitle: 'Gestión de nóminas y pagos',
      icon: '📊'
    },
    'horas-extra': {
      title: 'Horas Extra',
      subtitle: 'Control de horas extra trabajadas',
      icon: '⏰'
    },
    prestamos: {
      title: 'Préstamos',
      subtitle: 'Gestión de préstamos a empleados',
      icon: '🏦'
    },
    reclutamiento: {
      title: 'Reclutamiento y Selección',
      subtitle: 'Proceso de contratación de personal',
      icon: '🎯'
    },
    asistencia: {
      title: 'Control de Asistencia',
      subtitle: 'Registro y control de asistencia',
      icon: '📅'
    },
    liquidaciones: {
      title: 'Liquidaciones',
      subtitle: 'Liquidaciones de empleados',
      icon: '📋'
    },
    maintenance: {
      title: 'Mantenimiento',
      subtitle: 'Administración del sistema',
      icon: '⚙️'
    }
  },

  // Inicializar aplicación
  init() {
    console.log('🚀 Inicializando Reproplast HR System...');

    this.setupEventListeners();
    this.loadModule('dashboard');
    this.updateUserInterface();

    console.log('✅ Sistema inicializado correctamente');
  },

  // Configurar event listeners
  setupEventListeners() {
    // Navegación del sidebar
    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const module = e.currentTarget.getAttribute('data-module');
        this.loadModule(module);
      });
    });

    // Toggle del sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Botones de notificaciones y perfil
    const notificationBtn = document.querySelector('.notification-btn');
    const profileBtn = document.querySelector('.profile-btn');

    if (notificationBtn) {
      notificationBtn.addEventListener('click', () => {
        this.showNotifications();
      });
    }

    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        this.showProfile();
      });
    }

    // Responsive: cerrar sidebar en mobile
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.closeSidebarOnMobile();
      }
    });
  },

  // Cargar módulo
  loadModule(moduleName) {
    if (!this.modules[moduleName]) {
      console.error(`❌ Módulo ${moduleName} no encontrado`);
      return;
    }

    console.log(`📄 Cargando módulo: ${moduleName}`);

    // Actualizar estado
    this.state.currentModule = moduleName;

    // Actualizar navegación activa
    this.updateActiveNavigation(moduleName);

    // Actualizar título de página
    this.updatePageTitle(moduleName);

    // Cargar contenido del módulo
    this.loadModuleContent(moduleName);

    // Cerrar sidebar en mobile después de navegar
    if (window.innerWidth <= 768) {
      this.closeSidebarOnMobile();
    }
  },

  // Actualizar navegación activa
  updateActiveNavigation(moduleName) {
    // Remover clase active de todos los items
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('active');
    });

    // Agregar clase active al item actual
    const activeLink = document.querySelector(`[onclick*="${moduleName}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  },

  // Actualizar título de página
  updatePageTitle(moduleName) {
    const module = this.modules[moduleName];
    const titleElement = document.getElementById('pageTitle');
    const subtitleElement = document.getElementById('pageSubtitle');

    if (titleElement) titleElement.textContent = module.title;
    if (subtitleElement) subtitleElement.textContent = module.subtitle;
  },

  // Cargar contenido del módulo
  loadModuleContent(moduleName) {
    const contentArea = document.getElementById('contentArea');

    if (!contentArea) {
      console.error('❌ Área de contenido no encontrada');
      return;
    }

    // Mostrar loading
    contentArea.innerHTML = `
            <div class="d-flex justify-center align-center" style="height: 200px;">
                <div class="loading"></div>
                <span style="margin-left: 1rem;">Cargando ${this.modules[moduleName].title}...</span>
            </div>
        `;

    // Simular carga y ejecutar función del módulo
    setTimeout(() => {
      switch (moduleName) {
        case 'dashboard':
          if (typeof Dashboard !== 'undefined') {
            Dashboard.render(contentArea);
          } else {
            this.showModuleInDevelopment(moduleName, contentArea);
          }
          break;
        case 'employees':
          if (typeof Employees !== 'undefined') {
            Employees.render(contentArea);
          } else {
            this.showModuleInDevelopment(moduleName, contentArea);
          }
          break;
        case 'vacations':
          if (typeof Vacations !== 'undefined') {
            Vacations.render(contentArea);
          } else {
            this.showModuleInDevelopment(moduleName, contentArea);
          }
          break;
        case 'advances':
          if (typeof Advances !== 'undefined') {
            Advances.render(contentArea);
          } else {
            this.showModuleInDevelopment(moduleName, contentArea);
          }
          break;
        case 'maintenance':
          if (typeof Maintenance !== 'undefined') {
            Maintenance.render(contentArea);
          } else {
            this.showModuleInDevelopment(moduleName, contentArea);
          }
          break;
        case 'planilla':
        case 'horas-extra':
        case 'prestamos':
        case 'reclutamiento':
        case 'asistencia':
        case 'liquidaciones':
        default:
          this.showModuleInDevelopment(moduleName, contentArea);
      }
    }, 500);
  },

  // Mostrar módulo en desarrollo
  showModuleInDevelopment(moduleName, contentArea) {
    const module = this.modules[moduleName];
    contentArea.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="font-size: 64px; margin-bottom: 20px; opacity: 0.3;">${module.icon}</div>
        <h2 style="color: #558b2f; margin-bottom: 15px; font-size: 28px;">Módulo en Desarrollo</h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 10px;">
          El módulo <strong>${module.title}</strong> está en desarrollo.
        </p>
        <p style="color: #999; font-size: 14px;">
          ${module.subtitle}
        </p>
        <div style="margin-top: 30px;">
          <button onclick="App.loadModule('dashboard')" 
                  style="background: linear-gradient(135deg, #7cb342, #8bc34a); color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 14px;">
            🏠 Volver al Dashboard
          </button>
        </div>
      </div>
    `;
  },

  // Toggle sidebar
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar && mainContent) {
      this.state.sidebarCollapsed = !this.state.sidebarCollapsed;

      if (this.state.sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('sidebar-collapsed');
      } else {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('sidebar-collapsed');
      }
    }
  },

  // Cerrar sidebar en mobile
  closeSidebarOnMobile() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth <= 768) {
      sidebar.classList.remove('mobile-open');
    }
  },

  // Mostrar notificaciones
  showNotifications() {
    Modal.show({
      title: '🔔 Notificaciones',
      content: `
                <div class="p-4">
                    <div class="alert alert-primary">
                        <strong>Nueva solicitud de vacaciones</strong><br>
                        Juan Pérez ha solicitado vacaciones del 15 al 25 de septiembre.
                        <small class="d-block mt-2 text-muted">Hace 2 horas</small>
                    </div>
                    <div class="alert alert-warning">
                        <strong>Anticipo pendiente de aprobación</strong><br>
                        María González tiene un anticipo pendiente por $500.
                        <small class="d-block mt-2 text-muted">Hace 4 horas</small>
                    </div>
                    <div class="alert alert-success">
                        <strong>Respaldo completado</strong><br>
                        El respaldo automático se ejecutó correctamente.
                        <small class="d-block mt-2 text-muted">Hace 6 horas</small>
                    </div>
                </div>
            `,
      size: 'lg'
    });
  },

  // Mostrar perfil
  showProfile() {
    Modal.show({
      title: '👤 Perfil de Usuario',
      content: `
                <div class="p-4">
                    <div class="text-center mb-4">
                        <div class="user-avatar" style="width: 80px; height: 80px; margin: 0 auto; font-size: 2rem;">
                            ${this.state.user.avatar}
                        </div>
                        <h3 class="mt-3">${this.state.user.name}</h3>
                        <p class="text-muted">${this.state.user.role}</p>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" value="${this.state.user.name}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Rol</label>
                        <input type="text" class="form-control" value="${this.state.user.role}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Último acceso</label>
                        <input type="text" class="form-control" value="${new Date().toLocaleString()}" readonly>
                    </div>
                    
                    <div class="d-flex gap-2 mt-4">
                        <button class="btn btn-primary flex-1">Cambiar Contraseña</button>
                        <button class="btn btn-secondary">Configuración</button>
                        <button class="btn btn-danger" onclick="App.logout()">Cerrar Sesión</button>
                    </div>
                </div>
            `,
      size: 'md'
    });
  },

  // Actualizar interfaz de usuario
  updateUserInterface() {
    // Actualizar información del usuario en el sidebar
    const userNameElement = document.querySelector('.user-name');
    const userRoleElement = document.querySelector('.user-role');
    const userAvatarElement = document.querySelector('.user-avatar');

    if (userNameElement) userNameElement.textContent = this.state.user.name;
    if (userRoleElement) userRoleElement.textContent = this.state.user.role;
    if (userAvatarElement) userAvatarElement.textContent = this.state.user.avatar;
  },

  // Cerrar sesión
  logout() {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
      // Aquí iría la lógica de logout
      alert('Sesión cerrada correctamente');
      // window.location.href = 'login.html';
    }
  },

  // Utilidades
  utils: {
    // Formatear fecha
    formatDate(date) {
      return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },

    // Formatear moneda
    formatCurrency(amount) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    },

    // Generar ID único
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // Mostrar toast
    showToast(message, type = 'info') {
      // Implementación simple de toast
      const toast = document.createElement('div');
      toast.className = `alert alert-${type}`;
      toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10001;
                min-width: 300px;
                animation: slideInRight 0.3s ease;
            `;
      toast.textContent = message;

      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    }
  }
};

// Exportar para uso global
window.App = App;

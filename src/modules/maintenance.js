/* ================================================
   MÓDULO DE MANTENIMIENTO - REPROPLAST HR SYSTEM
   ================================================ */

const Maintenance = {
  // Datos de configuración
  data: {
    tables: [
      // === PERSONAL ===
      {
        name: 'empleados',
        title: 'Empleados',
        icon: '👤',
        category: 'personal',
        records: 247,
        description: 'Información completa de empleados',
        color: '#3498db'
      },
      {
        name: 'tipo_empleados',
        title: 'Tipos de Empleados',
        icon: '👥',
        category: 'personal',
        records: 12,
        description: 'Categorías de empleados',
        color: '#9b59b6'
      },
      {
        name: 'departamento',
        title: 'Departamentos',
        icon: '🏢',
        category: 'personal',
        records: 18,
        description: 'Estructura departamental',
        color: '#e67e22'
      },
      {
        name: 'puesto_trabajo',
        title: 'Puestos de Trabajo',
        icon: '💼',
        category: 'personal',
        records: 34,
        description: 'Puestos y cargos laborales',
        color: '#16a085'
      },
      // === NÓMINA Y PAGOS ===
      {
        name: 'planilla',
        title: 'Planilla',
        icon: '💰',
        category: 'nomina',
        records: 156,
        description: 'Registro de planillas de pago',
        color: '#27ae60'
      },
      {
        name: 'detalle_planilla',
        title: 'Detalle de Planilla',
        icon: '📊',
        category: 'nomina',
        records: 3847,
        description: 'Detalles de pagos por empleado',
        color: '#2ecc71'
      },
      {
        name: 'anticipos_salarios',
        title: 'Anticipos de Salarios',
        icon: '💸',
        category: 'nomina',
        records: 89,
        description: 'Anticipos de sueldo solicitados',
        color: '#f39c12'
      },
      {
        name: 'tipos_sueldo',
        title: 'Tipos de Sueldo',
        icon: '💵',
        category: 'nomina',
        records: 8,
        description: 'Categorías de sueldos',
        color: '#e67e22'
      },
      {
        name: 'tipos_pago',
        title: 'Tipos de Pago',
        icon: '💳',
        category: 'nomina',
        records: 15,
        description: 'Formas de pago disponibles',
        color: '#e74c3c'
      },
      // === PRÉSTAMOS Y CRÉDITOS ===
      {
        name: 'creditos_personales',
        title: 'Créditos Personales',
        icon: '🏦',
        category: 'prestamos',
        records: 45,
        description: 'Créditos otorgados a empleados',
        color: '#8e44ad'
      },
      {
        name: 'prestamos',
        title: 'Préstamos',
        icon: '💰',
        category: 'prestamos',
        records: 78,
        description: 'Préstamos empresariales',
        color: '#9b59b6'
      },
      {
        name: 'detalle_prestamos',
        title: 'Detalle de Préstamos',
        icon: '📋',
        category: 'prestamos',
        records: 234,
        description: 'Detalles y pagos de préstamos',
        color: '#663399'
      },
      // === VACACIONES ===
      {
        name: 'vacaciones',
        title: 'Vacaciones',
        icon: '🏖️',
        category: 'vacaciones',
        records: 312,
        description: 'Períodos de vacaciones',
        color: '#3498db'
      },
      {
        name: 'vacaciones_detalle',
        title: 'Detalle de Vacaciones',
        icon: '📅',
        category: 'vacaciones',
        records: 567,
        description: 'Detalles de solicitudes',
        color: '#5dade2'
      },
      {
        name: 'movimientos_vacaciones',
        title: 'Movimientos de Vacaciones',
        icon: '🔄',
        category: 'vacaciones',
        records: 189,
        description: 'Historial de cambios',
        color: '#85c1e9'
      },
      // === ASISTENCIA Y HORARIOS ===
      {
        name: 'asistencia',
        title: 'Asistencia',
        icon: '⏰',
        category: 'asistencia',
        records: 12456,
        description: 'Registro de asistencia diaria',
        color: '#17a2b8'
      },
      {
        name: 'horarios',
        title: 'Horarios',
        icon: '🕐',
        category: 'asistencia',
        records: 23,
        description: 'Horarios de trabajo definidos',
        color: '#20c997'
      },
      {
        name: 'tipos_horas_extra',
        title: 'Tipos de Horas Extra',
        icon: '⏱️',
        category: 'asistencia',
        records: 6,
        description: 'Categorías de horas extra',
        color: '#fd7e14'
      },
      {
        name: 'biometrico',
        title: 'Biométrico',
        icon: '👆',
        category: 'asistencia',
        records: 247,
        description: 'Datos biométricos de empleados',
        color: '#6f42c1'
      },
      // === SISTEMA ===
      {
        name: 'users',
        title: 'Usuarios',
        icon: '👤',
        category: 'sistema',
        records: 67,
        description: 'Usuarios del sistema',
        color: '#e74c3c'
      },
      {
        name: 'roles',
        title: 'Roles',
        icon: '👔',
        category: 'sistema',
        records: 12,
        description: 'Roles de usuario',
        color: '#f39c12'
      },
      {
        name: 'permisos',
        title: 'Permisos',
        icon: '🔐',
        category: 'sistema',
        records: 45,
        description: 'Permisos del sistema',
        color: '#16a085'
      },
      {
        name: 'rol_permisos',
        title: 'Roles-Permisos',
        icon: '🔗',
        category: 'sistema',
        records: 156,
        description: 'Relación roles y permisos',
        color: '#148b84'
      },
      {
        name: 'user_roles',
        title: 'Usuario-Roles',
        icon: '👥',
        category: 'sistema',
        records: 78,
        description: 'Asignación de roles a usuarios',
        color: '#dc3545'
      },
      {
        name: 'refresh_tokens',
        title: 'Tokens de Sesión',
        icon: '🔑',
        category: 'sistema',
        records: 234,
        description: 'Tokens de autenticación',
        color: '#28a745'
      },
      // === CONFIGURACIÓN ===
      {
        name: 'municipio',
        title: 'Municipios',
        icon: '🏘️',
        category: 'configuracion',
        records: 298,
        description: 'Catálogo de municipios',
        color: '#6c757d'
      },
      {
        name: 'estado_civil',
        title: 'Estados Civiles',
        icon: '💑',
        category: 'configuracion',
        records: 5,
        description: 'Estados civiles disponibles',
        color: '#e83e8c'
      },
      {
        name: 'tipos_contrato',
        title: 'Tipos de Contrato',
        icon: '📄',
        category: 'configuracion',
        records: 8,
        description: 'Modalidades de contratación',
        color: '#fd7e14'
      }
    ],
    currentTab: 'tables'
  },

  // Renderizar módulo
  render(container) {
    container.innerHTML = `
            <div style="background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
                
                <!-- Header Principal con estilo Reproplast -->
                ${this.renderHeader()}

                <!-- Navegación por pestañas -->
                ${this.renderNavigation()}

                <!-- Contenido de las pestañas -->
                <div style="padding: 30px;">
                    ${this.renderTabContent()}
                </div>
            </div>
        `;

    this.setupEventListeners();
  },

  // Renderizar header con estilo Reproplast
  renderHeader() {
    return `
            <div style="background: linear-gradient(135deg, #7cb342, #8bc34a); color: white; padding: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                    <div>
                        <h2 style="margin: 0; font-size: 32px; font-weight: 700; display: flex; align-items: center; gap: 15px;">
                            🔧 Mantenimiento del Sistema
                        </h2>
                        <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
                            Panel de administración y configuración Reproplast HR
                        </p>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <button onclick="Maintenance.showSystemStatus()" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid rgba(255,255,255,0.3); padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            📊 Estado del Sistema
                        </button>
                        <button onclick="Maintenance.exportSystemData()" style="background: #558b2f; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            � Exportar Datos
                        </button>
                    </div>
                </div>
            </div>
        `;
  },

  // Renderizar navegación
  renderNavigation() {
    const tabs = [
      { id: 'tables', label: '🗃️ Gestión de Datos', active: true },
      { id: 'users', label: '👥 Usuarios y Roles', active: false },
      { id: 'system', label: '🔧 Configuración', active: false },
      { id: 'tools', label: '�️ Herramientas', active: false }
    ];

    return `
            <div id="maintenanceNav" style="background: #f1f8e9; padding: 0; border-bottom: 2px solid #7cb342; display: flex; overflow-x: auto;">
                ${tabs.map(tab => `
                    <button class="maintenance-tab ${tab.active ? 'active' : ''}" 
                            data-tab="${tab.id}" 
                            style="padding: 20px 30px; background: ${tab.active ? 'white' : 'transparent'}; 
                                   border: none; border-bottom: 3px solid ${tab.active ? '#7cb342' : 'transparent'}; 
                                   cursor: pointer; font-weight: 600; 
                                   color: ${tab.active ? '#558b2f' : '#7f8c8d'}; white-space: nowrap; 
                                   transition: all 0.3s ease;">
                        ${tab.label}
                    </button>
                `).join('')}
            </div>
        `;
  },

  // Renderizar contenido de pestañas
  renderTabContent() {
    return `
            <!-- Pestaña: Gestión de Datos -->
            <div id="tables-tab" class="maintenance-tab-content" style="display: block;">
                ${this.renderTablesContent()}
            </div>

            <!-- Pestaña: Usuarios y Roles -->
            <div id="users-tab" class="maintenance-tab-content" style="display: none;">
                ${this.renderUsersContent()}
            </div>

            <!-- Pestaña: Configuración -->
            <div id="system-tab" class="maintenance-tab-content" style="display: none;">
                ${this.renderSystemContent()}
            </div>

            <!-- Pestaña: Herramientas -->
            <div id="tools-tab" class="maintenance-tab-content" style="display: none;">
                ${this.renderToolsContent()}
            </div>
        `;
  },

  // Renderizar contenido de tablas
  renderTablesContent() {
    return `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 24px;">📊 Administración de Tablas del Sistema</h3>
                <p style="color: #7f8c8d; margin: 0; font-size: 16px;">Gestionar CRUD completo de todas las tablas de la base de datos</p>
            </div>

            <!-- Filtros y búsqueda -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
                <input type="text" id="tableSearch" placeholder="🔍 Buscar tabla..." style="flex: 1; min-width: 250px; padding: 12px; border: 2px solid #dee2e6; border-radius: 6px; font-size: 14px;">
                <select id="categoryFilter" style="padding: 12px; border: 2px solid #dee2e6; border-radius: 6px; font-size: 14px; min-width: 180px;">
                    <option value="">Todas las categorías</option>
                    <option value="personal">👤 Personal</option>
                    <option value="nomina">💰 Nómina y Pagos</option>
                    <option value="prestamos">🏦 Préstamos y Créditos</option>
                    <option value="vacaciones">�️ Vacaciones</option>
                    <option value="asistencia">⏰ Asistencia y Horarios</option>
                    <option value="sistema">🔧 Sistema</option>
                    <option value="configuracion">⚙️ Configuración</option>
                </select>
                <button onclick="Maintenance.refreshTableList()" class="btn btn-primary">
                    🔄 Actualizar
                </button>
            </div>

            <!-- Grid de Tablas -->
            <div id="tablesGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px; margin-bottom: 30px;">
                ${this.renderTableCards()}
            </div>

            <!-- Panel de estadísticas -->
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin-top: 30px;">
                <h4 style="margin: 0 0 20px 0; color: #558b2f; font-size: 20px; text-align: center;">📊 Estadísticas del Sistema</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    ${this.renderStatsCards()}
                </div>
                <div style="text-align: center; margin-top: 25px;">
                    <button onclick="Maintenance.generateSystemReport()" 
                            style="background: linear-gradient(135deg, #7cb342, #8bc34a); color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 16px;">
                        📊 Generar Reporte Completo
                    </button>
                </div>
            </div>
        `;
  },

  // Renderizar tarjetas de tablas con estilo Reproplast
  renderTableCards() {
    return this.data.tables.map(table => `
            <div class="table-maintenance-card" data-table="${table.name}" data-category="${table.category}" 
                 style="background: white; border: 2px solid #e0e0e0; border-radius: 12px; padding: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                    <div style="background: linear-gradient(135deg, ${table.color}, ${table.color}dd); color: white; width: 55px; height: 55px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; box-shadow: 0 4px 12px rgba(${table.color.replace('#', '')}, 0.3);">
                        ${table.icon}
                    </div>
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 5px 0; color: #558b2f; font-size: 18px; font-weight: 700;">${table.title}</h4>
                        <p style="margin: 0; color: #6a6a6a; font-size: 14px; line-height: 1.4;">${table.description}</p>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <span style="background: linear-gradient(135deg, #e8f5e8, #c8e6c8); color: #2e7d32; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                        📊 ${table.records.toLocaleString()} registros
                    </span>
                    <span style="background: linear-gradient(135deg, #f1f8e9, #e8f5e8); color: #558b2f; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                        ${this.getCategoryLabel(table.category)}
                    </span>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr auto auto auto; gap: 8px;">
                    <button onclick="Maintenance.openTableCRUD('${table.name}', '${table.title}')" 
                            style="background: #7cb342; color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; transition: background 0.3s;">
                        ✏️ Gestionar
                    </button>
                    <button onclick="Maintenance.viewTableStructure('${table.name}', '${table.title}')" 
                            style="background: #558b2f; color: white; border: none; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: background 0.3s;" 
                            title="Ver estructura">
                        🔍
                    </button>
                    <button onclick="Maintenance.exportTable('${table.name}', '${table.title}')" 
                            style="background: #2e7d32; color: white; border: none; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: background 0.3s;" 
                            title="Exportar datos">
                        📤
                    </button>
                    <button onclick="Maintenance.showTableMenu('${table.name}', '${table.title}')" 
                            style="background: #4caf50; color: white; border: none; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: background 0.3s;" 
                            title="Más opciones">
                        ⋮
                    </button>
                </div>
            </div>
        `).join('');
  },

  // Renderizar tarjetas de estadísticas
  renderStatsCards() {
    const categories = this.getUniqueCategories();
    const statsData = [
      {
        label: 'Tablas Totales',
        value: this.data.tables.length,
        icon: '📋',
        color: '#7cb342',
        gradient: 'linear-gradient(135deg, #e8f5e8, #c8e6c8)'
      },
      {
        label: 'Registros Totales',
        value: this.getTotalRecords(),
        icon: '📊',
        color: '#558b2f',
        gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)'
      },
      {
        label: 'Categorías',
        value: categories.length,
        icon: '🏷️',
        color: '#2e7d32',
        gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)'
      },
      {
        label: 'Tablas Críticas',
        value: this.data.tables.filter(t => t.records > 1000).length,
        icon: '⚠️',
        color: '#f57c00',
        gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd9)'
      }
    ];

    return statsData.map(stat => `
      <div style="background: ${stat.gradient}; padding: 20px; border-radius: 12px; text-align: center; border: 2px solid ${stat.color}20;">
        <div style="font-size: 28px; margin-bottom: 10px;">${stat.icon}</div>
        <div style="font-size: 32px; font-weight: bold; color: ${stat.color}; margin-bottom: 5px;">${stat.value}</div>
        <div style="font-size: 14px; color: #6a6a6a; font-weight: 600;">${stat.label}</div>
      </div>
    `).join('');
  },

  // Renderizar contenido de usuarios
  renderUsersContent() {
    return `
            <h3 style="color: #2c3e50; margin: 0 0 20px 0;">👥 Gestión de Usuarios y Roles</h3>
            
            <div class="grid grid-3 gap-4 mb-4">
                <div class="widget" style="background: #3498db; color: white;">
                    <div class="widget-header">
                        <h4 style="margin: 0; color: white;">👤 Usuarios Activos</h4>
                    </div>
                    <div class="widget-value" style="color: white;">67</div>
                    <button onclick="Maintenance.manageUsers()" class="btn btn-outline" style="margin-top: 15px; width: 100%; border-color: rgba(255,255,255,0.3); color: white;">
                        Gestionar Usuarios
                    </button>
                </div>
                
                <div class="widget" style="background: #e74c3c; color: white;">
                    <div class="widget-header">
                        <h4 style="margin: 0; color: white;">👔 Roles Definidos</h4>
                    </div>
                    <div class="widget-value" style="color: white;">12</div>
                    <button onclick="Maintenance.manageRoles()" class="btn btn-outline" style="margin-top: 15px; width: 100%; border-color: rgba(255,255,255,0.3); color: white;">
                        Gestionar Roles
                    </button>
                </div>
                
                <div class="widget" style="background: #27ae60; color: white;">
                    <div class="widget-header">
                        <h4 style="margin: 0; color: white;">🔐 Permisos</h4>
                    </div>
                    <div class="widget-value" style="color: white;">45</div>
                    <button onclick="Maintenance.managePermissions()" class="btn btn-outline" style="margin-top: 15px; width: 100%; border-color: rgba(255,255,255,0.3); color: white;">
                        Gestionar Permisos
                    </button>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h4 style="margin: 0;">⚡ Acciones Rápidas</h4>
                </div>
                <div class="card-body">
                    <div class="d-flex gap-2 flex-wrap">
                        <button onclick="Maintenance.createNewUser()" class="btn btn-primary">➕ Nuevo Usuario</button>
                        <button onclick="Maintenance.resetPasswords()" class="btn btn-warning">🔑 Resetear Contraseñas</button>
                        <button onclick="Maintenance.auditUserActivity()" class="btn btn-secondary">📊 Auditoría de Usuarios</button>
                    </div>
                </div>
            </div>
        `;
  },

  // Renderizar contenido del sistema
  renderSystemContent() {
    return `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #558b2f; margin: 0 0 10px 0; font-size: 28px; font-weight: 600;">🔧 Administración del Sistema</h3>
                <p style="color: #7f8c8d; margin: 0; font-size: 16px;">Panel de control principal para gestionar todas las configuraciones del sistema Reproplast</p>
            </div>
            
            <!-- Estado del Sistema -->
            <div style="background: linear-gradient(135deg, #7cb342 0%, #8bc34a 100%); border-radius: 15px; padding: 25px; margin-bottom: 30px; color: white; box-shadow: 0 4px 15px rgba(124, 179, 66, 0.3);">
                <h4 style="margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
                    � Estado Actual del Sistema
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
                    <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 12px; text-align: center; backdrop-filter: blur(10px);">
                        <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">✅</div>
                        <div style="font-size: 18px; font-weight: 600;">Sistema Activo</div>
                        <div style="font-size: 14px; opacity: 0.9;">Funcionando correctamente</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 12px; text-align: center; backdrop-filter: blur(10px);">
                        <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;" id="activeUsersCount">42</div>
                        <div style="font-size: 18px; font-weight: 600;">Usuarios Activos</div>
                        <div style="font-size: 14px; opacity: 0.9;">Sesiones abiertas</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 12px; text-align: center; backdrop-filter: blur(10px);">
                        <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">98%</div>
                        <div style="font-size: 18px; font-weight: 600;">Rendimiento</div>
                        <div style="font-size: 14px; opacity: 0.9;">Óptimo</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 12px; text-align: center; backdrop-filter: blur(10px);">
                        <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">24.3 GB</div>
                        <div style="font-size: 18px; font-weight: 600;">Espacio Libre</div>
                        <div style="font-size: 14px; opacity: 0.9;">De 50 GB totales</div>
                    </div>
                </div>
            </div>

            <!-- Panel de Configuraciones Principales -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin-bottom: 30px;">
                
                <!-- Configuración General -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 25px; transition: all 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(124, 179, 66, 0.2)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #7cb342, #558b2f); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 28px; color: white;">⚙️</div>
                        <div>
                            <h4 style="margin: 0; color: #558b2f; font-size: 20px; font-weight: 600;">Configuración General</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Ajustes principales del sistema</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button onclick="Maintenance.configureCompany()" style="background: #7cb342; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s; border: 2px solid #7cb342;" onmouseover="this.style.background='#558b2f'" onmouseout="this.style.background='#7cb342'">🏢 Datos de la Empresa</button>
                        <button onclick="Maintenance.configureSystem()" style="background: #8bc34a; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s; border: 2px solid #8bc34a;" onmouseover="this.style.background='#7cb342'" onmouseout="this.style.background='#8bc34a'">🔧 Parámetros del Sistema</button>
                        <button onclick="Maintenance.configureTheme()" style="background: #689f38; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s; border: 2px solid #689f38;" onmouseover="this.style.background='#558b2f'" onmouseout="this.style.background='#689f38'">🎨 Personalización</button>
                    </div>
                </div>

                <!-- Seguridad y Accesos -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 25px; transition: all 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(124, 179, 66, 0.2)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #e74c3c, #c0392b); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 28px; color: white;">🔒</div>
                        <div>
                            <h4 style="margin: 0; color: #558b2f; font-size: 20px; font-weight: 600;">Seguridad y Accesos</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Control de seguridad del sistema</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button onclick="Maintenance.configureSecurity()" style="background: #e74c3c; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'">🛡️ Políticas de Seguridad</button>
                        <button onclick="Maintenance.managePermissions()" style="background: #f39c12; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#d68910'" onmouseout="this.style.background='#f39c12'">👥 Permisos y Roles</button>
                        <button onclick="Maintenance.viewSecurityLog()" style="background: #e67e22; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#d35400'" onmouseout="this.style.background='#e67e22'">📋 Registro de Seguridad</button>
                    </div>
                </div>

                <!-- Comunicaciones -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 25px; transition: all 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(124, 179, 66, 0.2)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3498db, #2980b9); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 28px; color: white;">📧</div>
                        <div>
                            <h4 style="margin: 0; color: #558b2f; font-size: 20px; font-weight: 600;">Comunicaciones</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Email y notificaciones</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button onclick="Maintenance.configureEmail()" style="background: #3498db; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#2980b9'" onmouseout="this.style.background='#3498db'">📨 Configurar Email</button>
                        <button onclick="Maintenance.configureNotifications()" style="background: #1abc9c; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#16a085'" onmouseout="this.style.background='#1abc9c'">🔔 Notificaciones</button>
                        <button onclick="Maintenance.testCommunications()" style="background: #9b59b6; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#8e44ad'" onmouseout="this.style.background='#9b59b6'">📤 Probar Envíos</button>
                    </div>
                </div>

                <!-- Respaldos y Mantenimiento -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 25px; transition: all 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(124, 179, 66, 0.2)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #27ae60, #229954); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 28px; color: white;">💾</div>
                        <div>
                            <h4 style="margin: 0; color: #558b2f; font-size: 20px; font-weight: 600;">Respaldos y Mantenimiento</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Protección de datos</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button onclick="Maintenance.configureBackup()" style="background: #27ae60; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#229954'" onmouseout="this.style.background='#27ae60'">🗄️ Configurar Respaldos</button>
                        <button onclick="Maintenance.createBackup()" style="background: #16a085; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#138d75'" onmouseout="this.style.background='#16a085'">📦 Crear Respaldo Ahora</button>
                        <button onclick="Maintenance.viewBackups()" style="background: #f39c12; color: white; border: none; padding: 14px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#d68910'" onmouseout="this.style.background='#f39c12'">📂 Ver Respaldos</button>
                    </div>
                </div>
            </div>

            <!-- Administración de Usuarios -->
            <div style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 25px; margin-bottom: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h4 style="color: #558b2f; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    � Administración de Usuarios y Sesiones
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <button onclick="Maintenance.viewActiveSessions()" style="background: #3498db; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#2980b9'" onmouseout="this.style.background='#3498db'">👁️ Ver Sesiones Activas</button>
                    <button onclick="Maintenance.manageUsers()" style="background: #7cb342; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#558b2f'" onmouseout="this.style.background='#7cb342'">👤 Gestionar Usuarios</button>
                    <button onclick="Maintenance.forceLogoutAll()" style="background: #e74c3c; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'">⏹️ Cerrar Todas las Sesiones</button>
                    <button onclick="Maintenance.sendSystemMessage()" style="background: #9b59b6; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#8e44ad'" onmouseout="this.style.background='#9b59b6'">📢 Mensaje del Sistema</button>
                </div>
                
                <!-- Estadísticas de Usuarios -->
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <h5 style="margin: 0 0 15px 0; color: #558b2f; font-weight: 600;">Estadísticas de Uso</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: bold; color: #7cb342;">157</div>
                            <div style="font-size: 12px; color: #7f8c8d;">Total Usuarios</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: bold; color: #3498db;" id="currentActiveUsers">42</div>
                            <div style="font-size: 12px; color: #7f8c8d;">Activos Ahora</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: bold; color: #f39c12;">89</div>
                            <div style="font-size: 12px; color: #7f8c8d;">Últimas 24h</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; font-weight: bold; color: #e74c3c;">3</div>
                            <div style="font-size: 12px; color: #7f8c8d;">Bloqueados</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Herramientas de Mantenimiento Rápido -->
            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; padding: 25px; margin-bottom: 20px;">
                <h4 style="color: #558b2f; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    � Herramientas de Mantenimiento Rápido
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                    <button onclick="Maintenance.clearCache()" style="background: #e74c3c; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'">🗑️ Limpiar Cache</button>
                    <button onclick="Maintenance.optimizeSystem()" style="background: #27ae60; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#229954'" onmouseout="this.style.background='#27ae60'">⚡ Optimizar Sistema</button>
                    <button onclick="Maintenance.runSystemCheck()" style="background: #3498db; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#2980b9'" onmouseout="this.style.background='#3498db'">✅ Verificar Sistema</button>
                    <button onclick="Maintenance.restartServices()" style="background: #f39c12; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#d68910'" onmouseout="this.style.background='#f39c12'">🔄 Reiniciar Servicios</button>
                </div>
            </div>
        `;
  },

  // Renderizar contenido de herramientas
  renderToolsContent() {
    return `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 24px;">�️ Herramientas del Sistema</h3>
                <p style="color: #7f8c8d; margin: 0; font-size: 16px;">Utilidades y herramientas de administración para optimizar el rendimiento del sistema</p>
            </div>
            
            <!-- Herramientas de Sistema -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
                
                <!-- Cache y Rendimiento -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px; transition: all 0.3s;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #e74c3c, #c0392b); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;">🚀</div>
                        <div>
                            <h4 style="margin: 0; color: #2c3e50; font-size: 18px;">Cache y Rendimiento</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Optimización del sistema</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button onclick="Maintenance.clearCache()" style="background: #e74c3c; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">�️ Limpiar Cache</button>
                        <button onclick="Maintenance.optimizeSystem()" style="background: #27ae60; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">⚡ Optimizar Sistema</button>
                        <button onclick="Maintenance.checkPerformance()" style="background: #3498db; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">📊 Analizar Rendimiento</button>
                    </div>
                </div>

                <!-- Sesiones y Usuarios -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px; transition: all 0.3s;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9b59b6, #8e44ad); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;">👥</div>
                        <div>
                            <h4 style="margin: 0; color: #2c3e50; font-size: 18px;">Gestión de Sesiones</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Control de usuarios activos</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button onclick="Maintenance.viewActiveSessions()" style="background: #3498db; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">👁️ Ver Sesiones Activas</button>
                        <button onclick="Maintenance.forceLogoutAll()" style="background: #f39c12; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">⏹️ Cerrar Todas las Sesiones</button>
                        <button onclick="Maintenance.cleanExpiredSessions()" style="background: #27ae60; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">🧹 Limpiar Sesiones Expiradas</button>
                    </div>
                </div>

                <!-- Archivos Temporales -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px; transition: all 0.3s;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #f39c12, #d68910); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;">📁</div>
                        <div>
                            <h4 style="margin: 0; color: #2c3e50; font-size: 18px;">Archivos del Sistema</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Limpieza y mantenimiento</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button onclick="Maintenance.cleanTempFiles()" style="background: #e67e22; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">🗂️ Limpiar Archivos Temporales</button>
                        <button onclick="Maintenance.checkDiskSpace()" style="background: #16a085; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">💾 Verificar Espacio en Disco</button>
                        <button onclick="Maintenance.cleanUploads()" style="background: #c0392b; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">📤 Limpiar Uploads Antiguos</button>
                    </div>
                </div>

                <!-- Notificaciones y Alertas -->
                <div style="background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px; transition: all 0.3s;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #1abc9c, #16a085); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;">🔔</div>
                        <div>
                            <h4 style="margin: 0; color: #2c3e50; font-size: 18px;">Sistema de Notificaciones</h4>
                            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Gestión de alertas</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button onclick="Maintenance.sendTestNotification()" style="background: #3498db; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">📨 Enviar Notificación de Prueba</button>
                        <button onclick="Maintenance.clearNotifications()" style="background: #95a5a6; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">🧹 Limpiar Notificaciones</button>
                        <button onclick="Maintenance.configureAlerts()" style="background: #e74c3c; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">⚙️ Configurar Alertas</button>
                    </div>
                </div>
            </div>

            <!-- Herramientas de Desarrollo -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
                    🔧 Herramientas de Desarrollo
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <button onclick="Maintenance.generateTestData()" style="background: #9b59b6; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">🎲 Generar Datos de Prueba</button>
                    <button onclick="Maintenance.resetDemoData()" style="background: #f39c12; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">🔄 Restablecer Demo</button>
                    <button onclick="Maintenance.runSystemCheck()" style="background: #27ae60; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">✅ Verificación del Sistema</button>
                    <button onclick="Maintenance.exportConfiguration()" style="background: #34495e; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">� Exportar Configuración</button>
                </div>
            </div>

            <!-- Estado del Sistema -->
            <div style="background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px;">
                <h4 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
                    📊 Estado Actual del Sistema
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #27ae60;">98%</div>
                        <div style="font-size: 12px; color: #27ae60;">Rendimiento</div>
                    </div>
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #3498db;">67</div>
                        <div style="font-size: 12px; color: #3498db;">Usuarios Activos</div>
                    </div>
                    <div style="background: #fff3e0; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #f39c12;">2.1 GB</div>
                        <div style="font-size: 12px; color: #f39c12;">Memoria en Uso</div>
                    </div>
                    <div style="background: #fce4ec; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: #e91e63;">15.7 GB</div>
                        <div style="font-size: 12px; color: #e91e63;">Espacio Disponible</div>
                    </div>
                </div>
            </div>
        `;
  },

  // Configurar event listeners
  setupEventListeners() {
    // Pestañas
    document.querySelectorAll('.maintenance-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabId = e.target.getAttribute('data-tab');
        this.switchTab(tabId);
      });
    });

    // Hover effects en tarjetas con estilo Reproplast
    document.querySelectorAll('.table-maintenance-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.borderColor = '#7cb342';
        this.style.boxShadow = '0 6px 20px rgba(124, 179, 66, 0.15)';
        this.style.transform = 'translateY(-3px)';
      });

      card.addEventListener('mouseleave', function () {
        this.style.borderColor = '#e0e0e0';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        this.style.transform = 'translateY(0)';
      });
    });

    // Búsqueda y filtros
    const searchInput = document.getElementById('tableSearch');
    const categoryFilter = document.getElementById('categoryFilter');

    if (searchInput) {
      searchInput.addEventListener('input', () => this.filterTables());
    }

    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.filterTables());
    }
  },

  // Cambiar pestaña
  switchTab(tabId) {
    // Actualizar botones
    document.querySelectorAll('.maintenance-tab').forEach(tab => {
      tab.classList.remove('active');
      tab.style.background = 'transparent';
      tab.style.borderBottom = '3px solid transparent';
      tab.style.color = '#7f8c8d';
    });

    // Ocultar contenido
    document.querySelectorAll('.maintenance-tab-content').forEach(content => {
      content.style.display = 'none';
    });

    // Activar pestaña seleccionada
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(`${tabId}-tab`);

    if (activeTab) {
      activeTab.classList.add('active');
      activeTab.style.background = 'white';
      activeTab.style.borderBottom = '3px solid #7cb342';
      activeTab.style.color = '#558b2f';
    }

    if (activeContent) {
      activeContent.style.display = 'block';
    }

    this.data.currentTab = tabId;
  },

  // Obtener etiqueta de categoría
  getCategoryLabel(category) {
    const labels = {
      personal: '👤 Personal',
      nomina: '💰 Nómina',
      prestamos: '🏦 Préstamos',
      vacaciones: '�️ Vacaciones',
      asistencia: '⏰ Asistencia',
      sistema: '🔧 Sistema',
      configuracion: '⚙️ Configuración'
    };
    return labels[category] || '📋 General';
  },

  // Filtrar tablas
  filterTables() {
    const search = document.getElementById('tableSearch')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';

    document.querySelectorAll('.table-maintenance-card').forEach(card => {
      const tableName = card.getAttribute('data-table').toLowerCase();
      const tableCategory = card.getAttribute('data-category');

      const matchesSearch = !search || tableName.includes(search);
      const matchesCategory = !category || tableCategory === category;

      card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
  },

  // ============= MÉTODOS DE ACCIÓN =============

  // Estado del sistema
  showSystemStatus() {
    Utils.toast.info('Mostrando estado del sistema...');
  },

  // Respaldo de emergencia
  emergencyBackup() {
    Modal.confirm({
      title: '🚨 Respaldo de Emergencia',
      message: '¿Desea crear un respaldo de emergencia inmediato? Esta operación puede tomar varios minutos.',
      onConfirm: () => {
        Modal.loading('Creando respaldo de emergencia...');
        setTimeout(() => {
          Modal.hide();
          Utils.toast.success('Respaldo de emergencia creado exitosamente');
        }, 3000);
      }
    });
  },

  // CRUD de tabla mejorado
  openTableCRUD(tableName) {
    const table = this.data.tables.find(t => t.name === tableName);
    if (!table) return;

    Modal.show({
      title: `${table.icon} CRUD - ${table.title}`,
      subtitle: `Sistema de gestión completa para ${table.title}`,
      content: `
        <style>
          .crud-modern-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .crud-header-card { 
            background: linear-gradient(135deg, ${table.color}, ${table.color}dd); 
            color: white; 
            padding: 30px; 
            border-radius: 20px; 
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          .crud-stats { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
            gap: 20px; 
            margin-top: 20px; 
          }
          .crud-stat-card { 
            background: rgba(255,255,255,0.15); 
            padding: 20px; 
            border-radius: 15px; 
            text-align: center; 
            backdrop-filter: blur(10px);
          }
          .crud-toolbar { 
            background: white; 
            padding: 25px; 
            border-radius: 20px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .crud-action-btn { 
            background: linear-gradient(135deg, #6c5ce7, #a29bfe); 
            color: white; 
            border: none; 
            padding: 12px 20px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            display: flex; 
            align-items: center; 
            gap: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
          }
          .crud-action-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(108, 92, 231, 0.4); 
          }
          .crud-action-btn.success { background: linear-gradient(135deg, #00b894, #00cec9); }
          .crud-action-btn.primary { background: linear-gradient(135deg, #0984e3, #74b9ff); }
          .crud-action-btn.secondary { background: linear-gradient(135deg, #636e72, #b2bec3); }
          .crud-search-section { 
            display: grid; 
            grid-template-columns: 2fr auto auto; 
            gap: 15px; 
            align-items: center; 
          }
          .crud-search-input { 
            padding: 15px 20px; 
            border: 2px solid #e9ecef; 
            border-radius: 12px; 
            font-size: 16px; 
            background: white;
            transition: all 0.3s ease;
          }
          .crud-search-input:focus { 
            border-color: #6c5ce7; 
            box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1); 
            outline: none; 
          }
          .crud-table-container { 
            background: white; 
            border-radius: 20px; 
            overflow: hidden; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .crud-table-header { 
            background: linear-gradient(135deg, #2d3436, #636e72); 
            color: white; 
            padding: 20px; 
            font-weight: 700; 
            font-size: 14px; 
            text-transform: uppercase; 
            letter-spacing: 1px;
            display: grid; 
            grid-template-columns: 80px 2fr 1fr 1fr 150px; 
            gap: 20px; 
            align-items: center;
          }
          .crud-table-row { 
            padding: 20px; 
            border-bottom: 1px solid #f1f3f4; 
            display: grid; 
            grid-template-columns: 80px 2fr 1fr 1fr 150px; 
            gap: 20px; 
            align-items: center;
            transition: all 0.3s ease;
          }
          .crud-table-row:hover { 
            background: linear-gradient(135deg, #74b9ff10, #6c5ce710) !important; 
            transform: translateX(5px); 
          }
          .crud-status-badge { 
            padding: 8px 16px; 
            border-radius: 25px; 
            font-size: 12px; 
            font-weight: 700; 
            text-transform: uppercase; 
            letter-spacing: 0.5px;
          }
          .crud-pagination { 
            background: white; 
            padding: 25px; 
            border-radius: 20px; 
            margin-top: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
            display: flex; 
            justify-content: space-between; 
            align-items: center;
          }
          .crud-row-actions { 
            display: flex; 
            gap: 8px; 
            justify-content: center; 
          }
          .crud-row-btn { 
            padding: 8px 12px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer; 
            font-weight: 600; 
            font-size: 12px;
            transition: all 0.2s ease;
          }
          .crud-row-btn:hover { transform: scale(1.1); }
        </style>
        
        <div class="crud-modern-container">
          <!-- Header mejorado con estadísticas -->
          <div class="crud-header-card">
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
              <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 36px;">${table.icon}</div>
              </div>
              <div>
                <h2 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">Gestión de ${table.title}</h2>
                <p style="margin: 0; opacity: 0.9; font-size: 16px;">${table.description}</p>
              </div>
            </div>
            
            <div class="crud-stats">
              <div class="crud-stat-card">
                <div style="font-size: 28px; font-weight: 700; margin-bottom: 5px;">${table.records}</div>
                <div style="font-size: 14px; opacity: 0.9;">Registros Totales</div>
              </div>
              <div class="crud-stat-card">
                <div style="font-size: 28px; font-weight: 700; margin-bottom: 5px;">${Math.floor(table.records * 0.85)}</div>
                <div style="font-size: 14px; opacity: 0.9;">Registros Activos</div>
              </div>
              <div class="crud-stat-card">
                <div style="font-size: 28px; font-weight: 700; margin-bottom: 5px;">${Math.floor(table.records * 0.15)}</div>
                <div style="font-size: 14px; opacity: 0.9;">Inactivos</div>
              </div>
              <div class="crud-stat-card">
                <div style="font-size: 28px; font-weight: 700; margin-bottom: 5px;">98%</div>
                <div style="font-size: 14px; opacity: 0.9;">Integridad</div>
              </div>
            </div>
          </div>

          <!-- Toolbar de acciones mejorado -->
          <div class="crud-toolbar">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h4 style="margin: 0; color: #2d3436; font-size: 18px; font-weight: 600;">🛠️ Herramientas de Gestión</h4>
              <div style="display: flex; gap: 12px;">
                <button class="crud-action-btn success" onclick="Maintenance.crudAction('${tableName}', 'create')">
                  <span style="font-size: 16px;">➕</span>
                  <span>Nuevo Registro</span>
                </button>
                <button class="crud-action-btn primary" onclick="Maintenance.crudAction('${tableName}', 'import')">
                  <span style="font-size: 16px;">📥</span>
                  <span>Importar</span>
                </button>
                <button class="crud-action-btn secondary" onclick="Maintenance.crudAction('${tableName}', 'export')">
                  <span style="font-size: 16px;">📤</span>
                  <span>Exportar</span>
                </button>
              </div>
            </div>
            
            <div class="crud-search-section">
              <input type="text" class="crud-search-input" placeholder="🔍 Buscar registros..." onkeyup="Maintenance.searchInTable('${tableName}', this.value)">
              <select class="crud-search-input" style="cursor: pointer;" onchange="Maintenance.filterByStatus('${tableName}', this.value)">
                <option value="">📊 Todos los Estados</option>
                <option value="activo">✅ Solo Activos</option>
                <option value="inactivo">❌ Solo Inactivos</option>
              </select>
              <button class="crud-action-btn" onclick="Maintenance.crudAction('${tableName}', 'refresh')" style="padding: 15px 20px;">
                🔄 Actualizar
              </button>
            </div>
          </div>

          <!-- Tabla de datos mejorada -->
          <div class="crud-table-container">
            <div class="crud-table-header">
              <div>🆔 ID</div>
              <div>📝 Nombre/Título</div>
              <div>📊 Estado</div>
              <div>📅 Fecha</div>
              <div>⚡ Acciones</div>
            </div>
            
            <div style="max-height: 500px; overflow-y: auto;">
              ${this.generateEnhancedTableData(tableName, table)}
            </div>
          </div>

          <!-- Paginación mejorada -->
          <div class="crud-pagination">
            <div style="color: #636e72; font-weight: 500; font-size: 14px;">
              📊 Mostrando <strong>1-${Math.min(10, table.records)}</strong> de <strong>${table.records}</strong> registros totales
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
              <button style="padding: 12px 18px; border: 2px solid #e9ecef; background: white; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#f8f9fa'; this.style.borderColor='#6c5ce7'" onmouseout="this.style.background='white'; this.style.borderColor='#e9ecef'">❮ Anterior</button>
              <button style="padding: 12px 18px; border: 2px solid #6c5ce7; background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; border-radius: 10px; cursor: pointer; font-weight: 600;">1</button>
              <button style="padding: 12px 18px; border: 2px solid #e9ecef; background: white; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#f8f9fa'; this.style.borderColor='#6c5ce7'" onmouseout="this.style.background='white'; this.style.borderColor='#e9ecef'">2</button>
              <button style="padding: 12px 18px; border: 2px solid #e9ecef; background: white; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#f8f9fa'; this.style.borderColor='#6c5ce7'" onmouseout="this.style.background='white'; this.style.borderColor='#e9ecef'">3</button>
              <span style="padding: 0 10px; color: #636e72;">...</span>
              <button style="padding: 12px 18px; border: 2px solid #e9ecef; background: white; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.background='#f8f9fa'; this.style.borderColor='#6c5ce7'" onmouseout="this.style.background='white'; this.style.borderColor='#e9ecef'">Siguiente ❯</button>
            </div>
          </div>
        </div>
      `,
      size: 'xlarge'
    });
  },

  // Generar datos de tabla mejorados
  generateEnhancedTableData(tableName, table) {
    const sampleData = this.getSampleDataForTable(tableName);

    return sampleData.map((row, index) => `
      <div class="crud-table-row" style="${index % 2 === 0 ? 'background: #fafbfc;' : 'background: white;'}">
        <div style="font-weight: 700; color: #2d3436; font-family: 'Courier New', monospace;">#${String(row.id).padStart(3, '0')}</div>
        <div style="font-weight: 600; color: #2d3436;">${row.name}</div>
        <div>
          <span class="crud-status-badge" style="background: ${this.getStatusColor(row.status)}; color: ${this.getStatusTextColor(row.status)};">
            ${this.getStatusIcon(row.status)} ${row.status}
          </span>
        </div>
        <div style="color: #636e72; font-weight: 500;">${this.formatDate(row.date)}</div>
        <div class="crud-row-actions">
          <button class="crud-row-btn" onclick="Maintenance.crudAction('${tableName}', 'view', ${row.id})" style="background: linear-gradient(135deg, #0984e3, #74b9ff); color: white;" title="Ver detalles">👁️</button>
          <button class="crud-row-btn" onclick="Maintenance.crudAction('${tableName}', 'edit', ${row.id})" style="background: linear-gradient(135deg, #00b894, #00cec9); color: white;" title="Editar">✏️</button>
          <button class="crud-row-btn" onclick="Maintenance.crudAction('${tableName}', 'delete', ${row.id})" style="background: linear-gradient(135deg, #e17055, #d63031); color: white;" title="Eliminar">🗑️</button>
        </div>
      </div>
    `).join('');
  },

  // Obtener datos de ejemplo según la tabla
  getSampleDataForTable(tableName) {
    const sampleDataSets = {
      empleados: [
        { id: 1, name: 'Juan Carlos Pérez Martínez', status: 'Activo', date: '2025-01-15' },
        { id: 2, name: 'María Elena García López', status: 'Activo', date: '2025-02-20' },
        { id: 3, name: 'Carlos Alberto López Silva', status: 'Inactivo', date: '2024-12-10' },
        { id: 4, name: 'Ana Sofía Martínez Torres', status: 'Activo', date: '2025-03-05' },
        { id: 5, name: 'Roberto Miguel Silva Herrera', status: 'Activo', date: '2025-01-08' },
        { id: 6, name: 'Lucía Patricia Vásquez Ruiz', status: 'Activo', date: '2025-02-12' },
        { id: 7, name: 'Diego Fernando Castro Morales', status: 'Inactivo', date: '2024-11-20' },
        { id: 8, name: 'Carmen Rosa Jiménez Delgado', status: 'Activo', date: '2025-03-18' }
      ],
      planilla: [
        { id: 1, name: 'Planilla Enero 2025 - Ejecutivos', status: 'Cerrada', date: '2025-01-31' },
        { id: 2, name: 'Planilla Febrero 2025 - Administrativos', status: 'Procesando', date: '2025-02-28' },
        { id: 3, name: 'Planilla Marzo 2025 - Operarios', status: 'Pendiente', date: '2025-03-31' },
        { id: 4, name: 'Planilla Bonus Trimestral Q1', status: 'Aprobada', date: '2025-03-15' }
      ],
      departamento: [
        { id: 1, name: 'Recursos Humanos y Desarrollo Organizacional', status: 'Activo', date: '2024-01-01' },
        { id: 2, name: 'Contabilidad y Finanzas Corporativas', status: 'Activo', date: '2024-01-01' },
        { id: 3, name: 'Producción y Control de Calidad', status: 'Activo', date: '2024-01-01' },
        { id: 4, name: 'Ventas y Marketing Digital', status: 'Activo', date: '2024-01-01' },
        { id: 5, name: 'Tecnología e Innovación', status: 'Activo', date: '2024-02-15' },
        { id: 6, name: 'Logística y Distribución', status: 'Reestructuración', date: '2024-03-01' }
      ],
      anticipos_salarios: [
        { id: 1, name: 'Anticipo Emergencia - Juan Pérez', status: 'Aprobado', date: '2025-08-20' },
        { id: 2, name: 'Anticipo Médico - María García', status: 'Pendiente', date: '2025-08-22' },
        { id: 3, name: 'Anticipo Educativo - Carlos López', status: 'Rechazado', date: '2025-08-18' },
        { id: 4, name: 'Anticipo Vivienda - Ana Martínez', status: 'En Revisión', date: '2025-08-24' }
      ],
      vacaciones: [
        { id: 1, name: 'Vacaciones Anuales - Ana Martínez', status: 'Aprobado', date: '2025-09-01' },
        { id: 2, name: 'Vacaciones Familiares - Roberto Silva', status: 'Pendiente', date: '2025-08-25' },
        { id: 3, name: 'Permiso Especial - Lucía Vásquez', status: 'Aprobado', date: '2025-09-10' }
      ],
      asistencia: [
        { id: 1, name: 'Control Agosto 2025 - Turno Mañana', status: 'Activo', date: '2025-08-01' },
        { id: 2, name: 'Control Agosto 2025 - Turno Tarde', status: 'Activo', date: '2025-08-01' },
        { id: 3, name: 'Control Agosto 2025 - Turno Noche', status: 'Pendiente', date: '2025-08-01' }
      ]
    };

    return sampleDataSets[tableName] || [
      { id: 1, name: 'Registro de Ejemplo 1', status: 'Activo', date: '2025-08-24' },
      { id: 2, name: 'Registro de Ejemplo 2', status: 'Inactivo', date: '2025-08-23' },
      { id: 3, name: 'Registro de Ejemplo 3', status: 'Pendiente', date: '2025-08-22' }
    ];
  },

  // Métodos auxiliares para el styling mejorado
  getStatusColor(status) {
    const colors = {
      'Activo': '#d1fae5',
      'Inactivo': '#fee2e2',
      'Pendiente': '#fef3c7',
      'Aprobado': '#dcfce7',
      'Rechazado': '#fecaca',
      'Procesando': '#dbeafe',
      'Cerrada': '#f3e8ff',
      'En Revisión': '#fed7aa',
      'Reestructuración': '#fde68a'
    };
    return colors[status] || '#f1f5f9';
  },

  getStatusTextColor(status) {
    const colors = {
      'Activo': '#065f46',
      'Inactivo': '#991b1b',
      'Pendiente': '#92400e',
      'Aprobado': '#166534',
      'Rechazado': '#dc2626',
      'Procesando': '#1e40af',
      'Cerrada': '#7c3aed',
      'En Revisión': '#ea580c',
      'Reestructuración': '#d97706'
    };
    return colors[status] || '#475569';
  },

  getStatusIcon(status) {
    const icons = {
      'Activo': '✅',
      'Inactivo': '❌',
      'Pendiente': '⏳',
      'Aprobado': '✅',
      'Rechazado': '❌',
      'Procesando': '⚙️',
      'Cerrada': '🔒',
      'En Revisión': '👁️',
      'Reestructuración': '🔄'
    };
    return icons[status] || '📋';
  },

  formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    };
    return date.toLocaleDateString('es-ES', options);
  },

  // Acciones del CRUD
  // Acciones del CRUD mejoradas
  crudAction(tableName, action, recordId = null) {
    switch (action) {
      case 'create':
        this.showCreateRecordModal(tableName);
        break;
      case 'edit':
        this.showEditRecordModal(tableName, recordId);
        break;
      case 'view':
        this.showViewRecordModal(tableName, recordId);
        break;
      case 'delete':
        this.showDeleteConfirmation(tableName, recordId);
        break;
      case 'import':
        this.showImportModal(tableName);
        break;
      case 'export':
        this.exportTable(tableName);
        break;
      case 'refresh':
        Utils.toast.info(`🔄 Actualizando datos de ${tableName}...`);
        setTimeout(() => {
          Utils.toast.success('✅ Datos actualizados correctamente');
          // Aquí iría la lógica real de refresh
        }, 1000);
        break;
      default:
        Utils.toast.warning(`Acción "${action}" no reconocida`);
    }
  },

  // Confirmación de eliminación mejorada
  showDeleteConfirmation(tableName, recordId) {
    const table = this.data.tables.find(t => t.name === tableName);
    Modal.confirm({
      title: '🗑️ Confirmar Eliminación',
      message: `¿Está seguro de que desea eliminar el registro #${recordId} de ${table.title}?\n\nEsta acción no se puede deshacer.`,
      onConfirm: () => {
        Utils.toast.loading('Eliminando registro...');
        setTimeout(() => {
          Utils.toast.success(`✅ Registro #${recordId} eliminado de ${table.title}`);
        }, 1000);
      }
    });
  },

  // Modal para crear nuevo registro
  showCreateRecordModal(tableName) {
    const table = this.data.tables.find(t => t.name === tableName);
    if (!table) return;

    Modal.show({
      title: `➕ Nuevo ${table.title}`,
      subtitle: `Crear un nuevo registro en ${table.title}`,
      content: `
        <style>
          .form-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .form-header { 
            background: linear-gradient(135deg, #00b894, #00cec9); 
            color: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .form-section { 
            background: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .form-group { 
            margin-bottom: 20px; 
            display: grid; 
            grid-template-columns: 140px 1fr; 
            gap: 15px; 
            align-items: center; 
          }
          .form-input { 
            padding: 12px 16px; 
            border: 2px solid #e9ecef; 
            border-radius: 10px; 
            font-size: 14px; 
            transition: all 0.3s ease;
          }
          .form-input:focus { 
            border-color: #00b894; 
            box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.1); 
            outline: none; 
          }
          .form-label { 
            font-weight: 600; 
            color: #2d3436; 
            font-size: 14px; 
          }
          .form-btn { 
            background: linear-gradient(135deg, #00b894, #00cec9); 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .form-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(0, 184, 148, 0.4); 
          }
          .form-btn.secondary { 
            background: linear-gradient(135deg, #636e72, #b2bec3); 
          }
          .form-btn.secondary:hover { 
            box-shadow: 0 8px 25px rgba(99, 110, 114, 0.4); 
          }
        </style>

        <div class="form-container">
          <!-- Header -->
          <div class="form-header">
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">➕</div>
            </div>
            <div>
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Crear Nuevo ${table.title}</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">Complete la información requerida para el nuevo registro</p>
            </div>
          </div>

          <!-- Formulario dinámico -->
          <div class="form-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📝 Información Principal
            </h4>
            
            ${this.generateFormFields(tableName)}
          </div>

          <!-- Botones de acción -->
          <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 30px;">
            <button type="button" class="form-btn secondary" onclick="Modal.hide();">
              ❌ Cancelar
            </button>
            <button type="button" class="form-btn" onclick="Maintenance.saveNewRecord('${tableName}');">
              💾 Guardar ${table.title}
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Generar campos de formulario dinámicamente
  generateFormFields(tableName) {
    const fieldSets = {
      empleados: [
        { label: 'Código:', type: 'text', placeholder: 'EMP-2025-001', required: true },
        { label: 'Nombres:', type: 'text', placeholder: 'Juan Carlos', required: true },
        { label: 'Apellidos:', type: 'text', placeholder: 'Pérez Martínez', required: true },
        { label: 'DUI:', type: 'text', placeholder: '12345678-9', required: true },
        { label: 'Fecha Nac.:', type: 'date', required: false },
        { label: 'Departamento:', type: 'select', options: ['Seleccionar...', 'RRHH', 'Producción', 'Ventas', 'Contabilidad'] },
        { label: 'Puesto:', type: 'text', placeholder: 'Analista Senior', required: true },
        { label: 'Salario Base:', type: 'number', placeholder: '1200.00', step: '0.01' },
        { label: 'Fecha Ingreso:', type: 'date', required: true }
      ],
      planilla: [
        { label: 'Período:', type: 'month', required: true },
        { label: 'Tipo:', type: 'select', options: ['Seleccionar...', 'Quincenal', 'Mensual', 'Especial'] },
        { label: 'Descripción:', type: 'text', placeholder: 'Planilla Agosto 2025', required: true },
        { label: 'Fecha Cierre:', type: 'date', required: true }
      ],
      departamento: [
        { label: 'Nombre:', type: 'text', placeholder: 'Recursos Humanos', required: true },
        { label: 'Código:', type: 'text', placeholder: 'RRHH', required: true },
        { label: 'Responsable:', type: 'text', placeholder: 'María García', required: true },
        { label: 'Presupuesto:', type: 'number', placeholder: '50000.00', step: '100' },
        { label: 'Ubicación:', type: 'text', placeholder: 'Edificio A, Piso 2' }
      ]
    };

    const fields = fieldSets[tableName] || [
      { label: 'Nombre:', type: 'text', placeholder: 'Ingrese el nombre', required: true },
      { label: 'Descripción:', type: 'text', placeholder: 'Descripción del registro' }
    ];

    return fields.map(field => {
      let inputHtml = '';

      if (field.type === 'select') {
        inputHtml = `<select class="form-input" ${field.required ? 'required' : ''}>
          ${field.options.map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>`;
      } else {
        inputHtml = `<input type="${field.type}" class="form-input" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''} ${field.step ? `step="${field.step}"` : ''}>`;
      }

      return `
        <div class="form-group">
          <label class="form-label">${field.label} ${field.required ? '<span style="color: #e74c3c;">*</span>' : ''}</label>
          ${inputHtml}
        </div>
      `;
    }).join('');
  },

  // Guardar cambios en registro editado
  saveEditRecord(tableName, recordId) {
    Utils.toast.loading('💾 Guardando cambios...');
    setTimeout(() => {
      Utils.toast.success(`✅ Registro #${recordId} actualizado exitosamente`);
      Modal.hide();
    }, 1500);
  },

  // Generar campos para edición
  generateEditFormFields(tableName, record) {
    const fieldSets = {
      empleados: [
        { label: 'Código:', type: 'text', value: 'EMP-2025-' + String(record.id).padStart(3, '0'), required: true },
        { label: 'Nombres:', type: 'text', value: record.name.split(' ').slice(0, 2).join(' '), required: true },
        { label: 'Apellidos:', type: 'text', value: record.name.split(' ').slice(2).join(' '), required: true },
        { label: 'DUI:', type: 'text', value: '0' + record.id + '234567-' + record.id, required: true },
        { label: 'Fecha Nac.:', type: 'date', value: '1985-03-15', required: false },
        { label: 'Departamento:', type: 'select', value: 'RRHH', options: ['RRHH', 'Producción', 'Ventas', 'Contabilidad'] },
        { label: 'Puesto:', type: 'text', value: 'Analista Senior', required: true },
        { label: 'Salario Base:', type: 'number', value: '1500.00', step: '0.01' },
        { label: 'Estado:', type: 'select', value: record.status, options: ['Activo', 'Inactivo', 'Pendiente'] }
      ],
      planilla: [
        { label: 'Período:', type: 'month', value: '2025-08', required: true },
        { label: 'Tipo:', type: 'select', value: 'Mensual', options: ['Quincenal', 'Mensual', 'Especial'] },
        { label: 'Descripción:', type: 'text', value: record.name, required: true },
        { label: 'Estado:', type: 'select', value: record.status, options: ['Pendiente', 'Procesando', 'Cerrada', 'Aprobada'] },
        { label: 'Fecha Cierre:', type: 'date', value: record.date, required: true }
      ],
      departamento: [
        { label: 'Nombre:', type: 'text', value: record.name, required: true },
        { label: 'Código:', type: 'text', value: record.name.substring(0, 4).toUpperCase(), required: true },
        { label: 'Responsable:', type: 'text', value: 'Director ' + record.name.split(' ')[0], required: true },
        { label: 'Presupuesto:', type: 'number', value: '75000.00', step: '100' },
        { label: 'Ubicación:', type: 'text', value: 'Edificio Principal, Piso ' + (record.id % 3 + 1) },
        { label: 'Estado:', type: 'select', value: record.status, options: ['Activo', 'Inactivo', 'Reestructuración'] }
      ]
    };

    const fields = fieldSets[tableName] || [
      { label: 'Nombre:', type: 'text', value: record.name, required: true },
      { label: 'Estado:', type: 'select', value: record.status, options: ['Activo', 'Inactivo'] }
    ];

    return fields.map(field => {
      let inputHtml = '';

      if (field.type === 'select') {
        inputHtml = `<select class="edit-input" ${field.required ? 'required' : ''}>
          ${field.options.map(option => `<option value="${option}" ${option === field.value ? 'selected' : ''}>${option}</option>`).join('')}
        </select>`;
      } else {
        inputHtml = `<input type="${field.type}" class="edit-input" value="${field.value}" ${field.required ? 'required' : ''} ${field.step ? `step="${field.step}"` : ''}>`;
      }

      return `
        <div class="edit-form-group">
          <label class="edit-label">${field.label} ${field.required ? '<span style="color: #e74c3c;">*</span>' : ''}</label>
          ${inputHtml}
        </div>
      `;
    }).join('');
  },

  // Generar campos para visualización
  generateViewFields(tableName, record) {
    const fieldSets = {
      empleados: [
        { label: 'Código Empleado:', value: 'EMP-2025-' + String(record.id).padStart(3, '0') },
        { label: 'Nombre Completo:', value: record.name },
        { label: 'DUI:', value: '0' + record.id + '234567-' + record.id },
        { label: 'Fecha Nacimiento:', value: '15 de marzo, 1985' },
        { label: 'Departamento:', value: 'Recursos Humanos' },
        { label: 'Puesto:', value: 'Analista Senior' },
        { label: 'Salario Base:', value: '$1,500.00 USD' },
        { label: 'Fecha Ingreso:', value: this.formatDate(record.date) },
        { label: 'Estado:', value: record.status, isStatus: true }
      ],
      planilla: [
        { label: 'Descripción:', value: record.name },
        { label: 'Período:', value: 'Agosto 2025' },
        { label: 'Tipo de Planilla:', value: 'Mensual' },
        { label: 'Empleados Incluidos:', value: Math.floor(Math.random() * 50 + 20) + ' empleados' },
        { label: 'Monto Total:', value: '$' + (Math.floor(Math.random() * 50000 + 30000)).toLocaleString() + '.00' },
        { label: 'Fecha Cierre:', value: this.formatDate(record.date) },
        { label: 'Estado:', value: record.status, isStatus: true }
      ],
      departamento: [
        { label: 'Nombre Departamento:', value: record.name },
        { label: 'Código:', value: record.name.substring(0, 4).toUpperCase() },
        { label: 'Responsable:', value: 'Director ' + record.name.split(' ')[0] },
        { label: 'Número de Empleados:', value: Math.floor(Math.random() * 25 + 5) + ' empleados' },
        { label: 'Presupuesto Anual:', value: '$' + (Math.floor(Math.random() * 100000 + 50000)).toLocaleString() + '.00' },
        { label: 'Ubicación:', value: 'Edificio Principal, Piso ' + (record.id % 3 + 1) },
        { label: 'Fecha Creación:', value: this.formatDate(record.date) },
        { label: 'Estado:', value: record.status, isStatus: true }
      ]
    };

    const fields = fieldSets[tableName] || [
      { label: 'Nombre:', value: record.name },
      { label: 'Fecha:', value: this.formatDate(record.date) },
      { label: 'Estado:', value: record.status, isStatus: true }
    ];

    return fields.map(field => {
      let valueHtml = field.value;

      if (field.isStatus) {
        valueHtml = `<span class="status-indicator" style="background: ${this.getStatusColor(field.value)}; color: ${this.getStatusTextColor(field.value)};">
          ${this.getStatusIcon(field.value)} ${field.value}
        </span>`;
      }

      return `
        <div class="view-field">
          <label class="view-label">${field.label}</label>
          <div class="view-value">${valueHtml}</div>
        </div>
      `;
    }).join('');
  },

  // Métodos para la funcionalidad de importación
  selectImportFormat(format) {
    Utils.toast.info(`📁 Formato seleccionado: ${format.toUpperCase()}`);
  },

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      Utils.toast.success(`✅ Archivo seleccionado: ${file.name}`);
    }
  },

  processImport(tableName) {
    Utils.toast.loading('🚀 Procesando importación...');
    setTimeout(() => {
      const recordsImported = Math.floor(Math.random() * 50 + 10);
      Utils.toast.success(`✅ ${recordsImported} registros importados exitosamente a ${tableName}`);
      Modal.hide();
    }, 2500);
  },

  // Placeholder para otros modales - ahora completamente funcionales
  showEditRecordModal(tableName, recordId) {
    const table = this.data.tables.find(t => t.name === tableName);
    const record = this.getSampleDataForTable(tableName).find(r => r.id == recordId);

    if (!record) {
      Utils.toast.error('Registro no encontrado');
      return;
    }

    Modal.show({
      title: `✏️ Editar ${table.title}`,
      subtitle: `Modificar registro #${recordId} de ${table.title}`,
      content: `
        <style>
          .edit-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .edit-header { 
            background: linear-gradient(135deg, #0984e3, #74b9ff); 
            color: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .edit-section { 
            background: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .edit-form-group { 
            margin-bottom: 20px; 
            display: grid; 
            grid-template-columns: 140px 1fr; 
            gap: 15px; 
            align-items: center; 
          }
          .edit-input { 
            padding: 12px 16px; 
            border: 2px solid #e9ecef; 
            border-radius: 10px; 
            font-size: 14px; 
            transition: all 0.3s ease;
          }
          .edit-input:focus { 
            border-color: #0984e3; 
            box-shadow: 0 0 0 3px rgba(9, 132, 227, 0.1); 
            outline: none; 
          }
          .edit-label { 
            font-weight: 600; 
            color: #2d3436; 
            font-size: 14px; 
          }
          .edit-btn { 
            background: linear-gradient(135deg, #0984e3, #74b9ff); 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .edit-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(9, 132, 227, 0.4); 
          }
          .edit-btn.secondary { 
            background: linear-gradient(135deg, #636e72, #b2bec3); 
          }
          .edit-btn.delete { 
            background: linear-gradient(135deg, #e17055, #d63031); 
          }
        </style>

        <div class="edit-container">
          <!-- Header -->
          <div class="edit-header">
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">✏️</div>
            </div>
            <div>
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Editar ${table.title}</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">Registro ID: #${recordId} • ${record.name}</p>
            </div>
          </div>

          <!-- Formulario de edición -->
          <div class="edit-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📝 Información del Registro
            </h4>
            
            ${this.generateEditFormFields(tableName, record)}
          </div>

          <!-- Información adicional -->
          <div class="edit-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📊 Información del Sistema
            </h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <div style="font-size: 12px; color: #636e72; margin-bottom: 5px;">FECHA DE CREACIÓN</div>
                <div style="font-weight: 600; color: #2d3436;">${this.formatDate(record.date)}</div>
              </div>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <div style="font-size: 12px; color: #636e72; margin-bottom: 5px;">ÚLTIMA MODIFICACIÓN</div>
                <div style="font-weight: 600; color: #2d3436;">Hace 2 horas</div>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 30px;">
            <button type="button" class="edit-btn delete" onclick="Maintenance.showDeleteConfirmation('${tableName}', ${recordId});">
              🗑️ Eliminar
            </button>
            <button type="button" class="edit-btn secondary" onclick="Modal.hide();">
              ❌ Cancelar
            </button>
            <button type="button" class="edit-btn" onclick="Maintenance.saveEditRecord('${tableName}', ${recordId});">
              💾 Guardar Cambios
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  showViewRecordModal(tableName, recordId) {
    const table = this.data.tables.find(t => t.name === tableName);
    const record = this.getSampleDataForTable(tableName).find(r => r.id == recordId);

    if (!record) {
      Utils.toast.error('Registro no encontrado');
      return;
    }

    Modal.show({
      title: `👁️ Ver ${table.title}`,
      subtitle: `Detalles completos del registro #${recordId}`,
      content: `
        <style>
          .view-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .view-header { 
            background: linear-gradient(135deg, #6c5ce7, #a29bfe); 
            color: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .view-section { 
            background: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .view-field { 
            margin-bottom: 20px; 
            display: grid; 
            grid-template-columns: 140px 1fr; 
            gap: 15px; 
            align-items: center; 
            padding: 12px;
            border-radius: 8px;
            background: #f8f9fa;
          }
          .view-label { 
            font-weight: 600; 
            color: #2d3436; 
            font-size: 14px; 
          }
          .view-value { 
            color: #2d3436; 
            font-size: 14px; 
            padding: 8px 12px;
            background: white;
            border-radius: 6px;
            border: 1px solid #e9ecef;
          }
          .view-btn { 
            background: linear-gradient(135deg, #6c5ce7, #a29bfe); 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .view-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(108, 92, 231, 0.4); 
          }
          .view-btn.edit { 
            background: linear-gradient(135deg, #0984e3, #74b9ff); 
          }
          .status-indicator { 
            display: inline-block; 
            padding: 8px 16px; 
            border-radius: 25px; 
            font-weight: 600; 
            font-size: 13px;
          }
        </style>

        <div class="view-container">
          <!-- Header -->
          <div class="view-header">
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">👁️</div>
            </div>
            <div>
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Detalles de ${table.title}</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">Vista completa del registro #${recordId}</p>
            </div>
          </div>

          <!-- Información principal -->
          <div class="view-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📋 Información Principal
            </h4>
            
            ${this.generateViewFields(tableName, record)}
          </div>

          <!-- Estado y metadatos -->
          <div class="view-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📊 Estado y Metadatos
            </h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
              <div style="background: linear-gradient(135deg, #e8f5e8, #c8e6c8); padding: 20px; border-radius: 12px; text-align: center;">
                <div style="font-size: 24px; margin-bottom: 10px;">${this.getStatusIcon(record.status)}</div>
                <div style="font-weight: 600; color: #2e7d32;">Estado: ${record.status}</div>
              </div>
              <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); padding: 20px; border-radius: 12px; text-align: center;">
                <div style="font-size: 24px; margin-bottom: 10px;">📅</div>
                <div style="font-weight: 600; color: #1976d2;">Creado: ${this.formatDate(record.date)}</div>
              </div>
              <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); padding: 20px; border-radius: 12px; text-align: center;">
                <div style="font-size: 24px; margin-bottom: 10px;">🔄</div>
                <div style="font-weight: 600; color: #f57c00;">Última modificación: Hace 2 horas</div>
              </div>
            </div>
          </div>

          <!-- Historial (simulado) -->
          <div class="view-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📈 Historial de Cambios
            </h4>
            
            <div style="border-left: 3px solid #6c5ce7; padding-left: 20px;">
              <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-weight: 600; color: #2d3436;">Registro creado</div>
                <div style="font-size: 12px; color: #636e72;">Por: admin • ${this.formatDate(record.date)}</div>
              </div>
              <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-weight: 600; color: #2d3436;">Estado actualizado</div>
                <div style="font-size: 12px; color: #636e72;">Por: supervisor • Hace 1 semana</div>
              </div>
              <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-weight: 600; color: #2d3436;">Información modificada</div>
                <div style="font-size: 12px; color: #636e72;">Por: ${record.name.split(' ')[0].toLowerCase()} • Hace 2 horas</div>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 30px;">
            <button type="button" class="view-btn" onclick="Modal.hide();">
              ❌ Cerrar
            </button>
            <button type="button" class="view-btn edit" onclick="Modal.hide(); Maintenance.showEditRecordModal('${tableName}', ${recordId});">
              ✏️ Editar Registro
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  showImportModal(tableName) {
    const table = this.data.tables.find(t => t.name === tableName);

    Modal.show({
      title: `📥 Importar ${table.title}`,
      subtitle: `Importar datos desde archivo CSV, Excel o JSON`,
      content: `
        <style>
          .import-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .import-header { 
            background: linear-gradient(135deg, #00b894, #00cec9); 
            color: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .import-section { 
            background: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .file-upload-area { 
            border: 3px dashed #00b894; 
            border-radius: 12px; 
            padding: 40px; 
            text-align: center; 
            background: linear-gradient(135deg, #e8f9f6, #d1f2eb);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .file-upload-area:hover { 
            border-color: #00a085; 
            background: linear-gradient(135deg, #d1f2eb, #c8e6c0); 
          }
          .import-btn { 
            background: linear-gradient(135deg, #00b894, #00cec9); 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .import-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(0, 184, 148, 0.4); 
          }
          .format-option { 
            background: #f8f9fa; 
            padding: 15px; 
            border-radius: 10px; 
            margin-bottom: 10px; 
            cursor: pointer; 
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }
          .format-option:hover { 
            background: #e9ecef; 
            border-color: #00b894; 
          }
        </style>

        <div class="import-container">
          <!-- Header -->
          <div class="import-header">
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">📥</div>
            </div>
            <div>
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Importar Datos</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">Importar registros a ${table.title} desde archivos externos</p>
            </div>
          </div>

          <!-- Selección de formato -->
          <div class="import-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📁 Seleccionar Formato de Archivo
            </h4>
            
            <div class="format-option" onclick="Maintenance.selectImportFormat('csv')">
              <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background: #00b894; color: white; padding: 10px; border-radius: 8px; font-size: 20px;">📊</div>
                <div>
                  <div style="font-weight: 600; color: #2d3436;">Archivo CSV</div>
                  <div style="font-size: 12px; color: #636e72;">Valores separados por comas (.csv)</div>
                </div>
              </div>
            </div>
            
            <div class="format-option" onclick="Maintenance.selectImportFormat('excel')">
              <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background: #00b894; color: white; padding: 10px; border-radius: 8px; font-size: 20px;">📗</div>
                <div>
                  <div style="font-weight: 600; color: #2d3436;">Archivo Excel</div>
                  <div style="font-size: 12px; color: #636e72;">Libro de Excel (.xlsx, .xls)</div>
                </div>
              </div>
            </div>
            
            <div class="format-option" onclick="Maintenance.selectImportFormat('json')">
              <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background: #00b894; color: white; padding: 10px; border-radius: 8px; font-size: 20px;">🔧</div>
                <div>
                  <div style="font-weight: 600; color: #2d3436;">Archivo JSON</div>
                  <div style="font-size: 12px; color: #636e72;">JavaScript Object Notation (.json)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Área de carga -->
          <div class="import-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              ⬆️ Cargar Archivo
            </h4>
            
            <div class="file-upload-area" onclick="document.getElementById('fileInput').click()">
              <div style="font-size: 48px; margin-bottom: 15px;">📁</div>
              <div style="font-size: 18px; font-weight: 600; color: #00b894; margin-bottom: 10px;">Arrastra tu archivo aquí</div>
              <div style="color: #636e72; margin-bottom: 15px;">o haz clic para seleccionar</div>
              <div style="font-size: 12px; color: #636e72;">Formatos soportados: .csv, .xlsx, .xls, .json</div>
              <input type="file" id="fileInput" style="display: none;" accept=".csv,.xlsx,.xls,.json" onchange="Maintenance.handleFileSelect(event)">
            </div>
          </div>

          <!-- Opciones de importación -->
          <div class="import-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              ⚙️ Opciones de Importación
            </h4>
            
            <div style="display: grid; gap: 15px;">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" checked style="transform: scale(1.2);">
                <span>Incluir primera fila como encabezados</span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" style="transform: scale(1.2);">
                <span>Reemplazar registros existentes</span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" checked style="transform: scale(1.2);">
                <span>Validar datos antes de importar</span>
              </label>
            </div>
          </div>

          <!-- Botones de acción -->
          <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 30px;">
            <button type="button" style="background: linear-gradient(135deg, #636e72, #b2bec3); color: white; border: none; padding: 15px 30px; border-radius: 12px; cursor: pointer; font-weight: 600;" onclick="Modal.hide();">
              ❌ Cancelar
            </button>
            <button type="button" class="import-btn" onclick="Maintenance.processImport('${tableName}');">
              🚀 Iniciar Importación
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Ver estructura de tabla
  viewTableStructure(tableName) {
    const table = this.data.tables.find(t => t.name === tableName);
    if (!table) return;

    const structure = this.getTableStructure(tableName);

    Modal.show({
      title: `🔍 Estructura - ${table.title}`,
      content: `
        <div>
          <!-- Header -->
          <div style="background: linear-gradient(135deg, ${table.color}, ${table.color}dd); color: white; padding: 20px; margin: -20px -20px 20px -20px; border-radius: 8px 8px 0 0;">
            <h3 style="margin: 0; display: flex; align-items: center; gap: 10px;">
              ${table.icon} ${table.title}
            </h3>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Tabla: <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 3px;">${tableName}</code></p>
          </div>

          <!-- Información general -->
          <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
              <div>
                <strong style="color: #2c3e50;">Registros:</strong><br>
                <span style="color: #27ae60; font-size: 18px; font-weight: 600;">${table.records.toLocaleString()}</span>
              </div>
              <div>
                <strong style="color: #2c3e50;">Categoría:</strong><br>
                <span style="color: #3498db;">${this.getCategoryLabel(table.category)}</span>
              </div>
              <div>
                <strong style="color: #2c3e50;">Campos:</strong><br>
                <span style="color: #e67e22; font-size: 18px; font-weight: 600;">${structure.length}</span>
              </div>
            </div>
          </div>

          <!-- Estructura de campos -->
          <h4 style="color: #2c3e50; margin-bottom: 15px;">📋 Estructura de Campos</h4>
          <div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
            <!-- Header de la tabla -->
            <div style="background: #f8f9fa; padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: 600; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 2fr; gap: 15px;">
              <div>Campo</div>
              <div>Tipo</div>
              <div>Nulo</div>
              <div>Clave</div>
              <div>Descripción</div>
            </div>
            
            <!-- Filas de campos -->
            ${structure.map((field, index) => `
              <div style="padding: 12px; border-bottom: 1px solid #f1f3f4; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 2fr; gap: 15px; align-items: center; ${index % 2 === 0 ? 'background: #fafbfc;' : ''}"
                   onmouseover="this.style.background='#e3f2fd'" 
                   onmouseout="this.style.background='${index % 2 === 0 ? '#fafbfc' : 'white'}'">
                <div style="font-family: 'Courier New', monospace; font-weight: 600; color: #2c3e50;">
                  ${field.key ? '🔑 ' : ''}${field.name}
                </div>
                <div>
                  <span style="background: #e1f5fe; color: #01579b; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">
                    ${field.type}
                  </span>
                </div>
                <div>
                  <span style="color: ${field.nullable ? '#e74c3c' : '#27ae60'};">
                    ${field.nullable ? '❌' : '✅'}
                  </span>
                </div>
                <div>
                  ${field.key ? '<span style="color: #f39c12;">🔑 PK</span>' : ''}
                  ${field.foreign ? '<span style="color: #9b59b6;">🔗 FK</span>' : ''}
                </div>
                <div style="color: #6c757d; font-size: 14px;">
                  ${field.description}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Índices y relaciones -->
          <div style="margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h5 style="color: #2c3e50; margin-bottom: 10px;">🗂️ Índices</h5>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6;">
                ${this.getTableIndexes(tableName).map(index => `
                  <div style="margin-bottom: 8px; padding: 8px; background: white; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 13px;">
                    <strong style="color: #3498db;">${index.name}</strong>
                    <div style="color: #7f8c8d; margin-top: 2px;">${index.fields.join(', ')}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div>
              <h5 style="color: #2c3e50; margin-bottom: 10px;">🔗 Relaciones</h5>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6;">
                ${this.getTableRelations(tableName).map(relation => `
                  <div style="margin-bottom: 8px; padding: 8px; background: white; border-radius: 4px; font-size: 13px;">
                    <strong style="color: #9b59b6;">${relation.type}</strong>
                    <div style="color: #7f8c8d; margin-top: 2px;">${relation.description}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Obtener estructura de tabla
  getTableStructure(tableName) {
    const structures = {
      empleados: [
        { name: 'id', type: 'INT', nullable: false, key: true, description: 'Identificador único del empleado' },
        { name: 'codigo_empleado', type: 'VARCHAR(20)', nullable: false, description: 'Código único del empleado' },
        { name: 'nombres', type: 'VARCHAR(100)', nullable: false, description: 'Nombres del empleado' },
        { name: 'apellidos', type: 'VARCHAR(100)', nullable: false, description: 'Apellidos del empleado' },
        { name: 'dui', type: 'VARCHAR(15)', nullable: false, description: 'Documento único de identidad' },
        { name: 'fecha_nacimiento', type: 'DATE', nullable: true, description: 'Fecha de nacimiento' },
        { name: 'departamento_id', type: 'INT', nullable: true, foreign: true, description: 'Referencia al departamento' },
        { name: 'puesto_id', type: 'INT', nullable: true, foreign: true, description: 'Referencia al puesto de trabajo' },
        { name: 'salario_base', type: 'DECIMAL(10,2)', nullable: true, description: 'Salario base del empleado' },
        { name: 'fecha_ingreso', type: 'DATE', nullable: false, description: 'Fecha de ingreso a la empresa' },
        { name: 'estado', type: 'ENUM', nullable: false, description: 'Estado del empleado (activo/inactivo)' },
        { name: 'created_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de creación del registro' },
        { name: 'updated_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de última actualización' }
      ],
      planilla: [
        { name: 'id', type: 'INT', nullable: false, key: true, description: 'Identificador único de la planilla' },
        { name: 'periodo', type: 'VARCHAR(20)', nullable: false, description: 'Período de la planilla (YYYY-MM)' },
        { name: 'fecha_inicio', type: 'DATE', nullable: false, description: 'Fecha de inicio del período' },
        { name: 'fecha_fin', type: 'DATE', nullable: false, description: 'Fecha de fin del período' },
        { name: 'fecha_pago', type: 'DATE', nullable: true, description: 'Fecha programada de pago' },
        { name: 'estado', type: 'ENUM', nullable: false, description: 'Estado de la planilla' },
        { name: 'total_planilla', type: 'DECIMAL(12,2)', nullable: true, description: 'Total general de la planilla' },
        { name: 'observaciones', type: 'TEXT', nullable: true, description: 'Observaciones generales' },
        { name: 'created_by', type: 'INT', nullable: false, foreign: true, description: 'Usuario que creó la planilla' },
        { name: 'created_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de creación' }
      ],
      anticipos_salarios: [
        { name: 'id', type: 'INT', nullable: false, key: true, description: 'Identificador único del anticipo' },
        { name: 'empleado_id', type: 'INT', nullable: false, foreign: true, description: 'Referencia al empleado' },
        { name: 'monto', type: 'DECIMAL(10,2)', nullable: false, description: 'Monto del anticipo solicitado' },
        { name: 'fecha_solicitud', type: 'DATE', nullable: false, description: 'Fecha de solicitud' },
        { name: 'fecha_aprobacion', type: 'DATE', nullable: true, description: 'Fecha de aprobación' },
        { name: 'motivo', type: 'TEXT', nullable: true, description: 'Motivo del anticipo' },
        { name: 'estado', type: 'ENUM', nullable: false, description: 'Estado del anticipo' },
        { name: 'aprobado_por', type: 'INT', nullable: true, foreign: true, description: 'Usuario que aprobó' },
        { name: 'created_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de creación' }
      ]
    };

    return structures[tableName] || [
      { name: 'id', type: 'INT', nullable: false, key: true, description: 'Identificador único' },
      { name: 'nombre', type: 'VARCHAR(255)', nullable: false, description: 'Nombre del registro' },
      { name: 'estado', type: 'ENUM', nullable: false, description: 'Estado del registro' },
      { name: 'created_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de creación' },
      { name: 'updated_at', type: 'TIMESTAMP', nullable: false, description: 'Fecha de actualización' }
    ];
  },

  // Obtener índices de tabla
  getTableIndexes(tableName) {
    const indexes = {
      empleados: [
        { name: 'PRIMARY', fields: ['id'] },
        { name: 'idx_codigo_empleado', fields: ['codigo_empleado'] },
        { name: 'idx_dui', fields: ['dui'] },
        { name: 'idx_departamento', fields: ['departamento_id'] },
        { name: 'idx_estado_fecha', fields: ['estado', 'fecha_ingreso'] }
      ],
      planilla: [
        { name: 'PRIMARY', fields: ['id'] },
        { name: 'idx_periodo', fields: ['periodo'] },
        { name: 'idx_fechas', fields: ['fecha_inicio', 'fecha_fin'] },
        { name: 'idx_estado', fields: ['estado'] }
      ]
    };

    return indexes[tableName] || [
      { name: 'PRIMARY', fields: ['id'] },
      { name: 'idx_estado', fields: ['estado'] }
    ];
  },

  // Obtener relaciones de tabla
  getTableRelations(tableName) {
    const relations = {
      empleados: [
        { type: 'Pertenece a', description: 'departamento (departamento_id → departamento.id)' },
        { type: 'Tiene', description: 'puesto_trabajo (puesto_id → puesto_trabajo.id)' },
        { type: 'Tiene muchos', description: 'anticipos_salarios' },
        { type: 'Tiene muchos', description: 'vacaciones' }
      ],
      planilla: [
        { type: 'Tiene muchos', description: 'detalle_planilla' },
        { type: 'Creada por', description: 'users (created_by → users.id)' }
      ],
      anticipos_salarios: [
        { type: 'Pertenece a', description: 'empleados (empleado_id → empleados.id)' },
        { type: 'Aprobado por', description: 'users (aprobado_por → users.id)' }
      ]
    };

    return relations[tableName] || [
      { type: 'Sin relaciones', description: 'Esta tabla no tiene relaciones definidas' }
    ];
  },

  // Exportar tabla
  exportTable(tableName) {
    Utils.toast.success(`Exportando tabla: ${tableName}`);
  },

  // Mostrar todas las tablas
  showAllTables() {
    Utils.toast.info('Mostrando todas las tablas del sistema...');
  },

  // Mostrar tablas por categoría
  showTablesByCategory() {
    const categories = this.getUniqueCategories();
    const categoryStats = categories.map(cat => {
      const tablesInCategory = this.data.tables.filter(t => t.category === cat);
      const totalRecords = tablesInCategory.reduce((sum, t) => sum + t.records, 0);
      return {
        category: cat,
        label: this.getCategoryLabel(cat),
        tables: tablesInCategory.length,
        records: totalRecords
      };
    });

    Modal.show({
      title: '📊 Tablas por Categoría',
      content: `
        <div style="max-height: 500px; overflow-y: auto;">
          ${categoryStats.map(stat => `
            <div style="background: #f8f9fa; margin-bottom: 15px; padding: 20px; border-radius: 8px; border-left: 4px solid var(--primary-color);">
              <h4 style="margin: 0 0 10px 0; color: #2c3e50;">${stat.label}</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                <div>
                  <strong style="color: #3498db;">${stat.tables}</strong> tablas
                </div>
                <div>
                  <strong style="color: #27ae60;">${stat.records.toLocaleString()}</strong> registros
                </div>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${this.data.tables
          .filter(t => t.category === stat.category)
          .map(table => `
                    <span style="background: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; border: 1px solid #dee2e6;">
                      ${table.icon} ${table.name}
                    </span>
                  `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `,
      size: 'large'
    });
  },

  // Obtener categorías únicas
  getUniqueCategories() {
    return [...new Set(this.data.tables.map(table => table.category))];
  },

  // Obtener total de registros
  getTotalRecords() {
    return this.data.tables.reduce((total, table) => total + table.records, 0).toLocaleString();
  },

  // Actualizar lista de tablas
  refreshTableList() {
    Utils.toast.info('Actualizando lista de tablas...');
  },

  // Gestión de usuarios
  manageUsers() { Utils.toast.info('Gestión de usuarios del sistema'); },
  manageRoles() { Utils.toast.info('Gestión de roles y permisos'); },
  managePermissions() { Utils.toast.info('Administración de permisos'); },
  createNewUser() { Utils.toast.info('Crear nuevo usuario'); },
  resetPasswords() { Utils.toast.info('Resetear contraseñas de usuarios'); },
  auditUserActivity() { Utils.toast.info('Auditoría de actividad de usuarios'); },

  // Configuración
  configureEmail() {
    Modal.show({
      title: '📧 Configuración de Email',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #7cb342 0%, #8bc34a 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">✉️ Configuración del Sistema de Email</h4>
            <p style="margin: 0; opacity: 0.9;">Configure los parámetros de correo electrónico para el sistema Reproplast</p>
          </div>
          
          <form style="display: grid; gap: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Servidor SMTP</label>
                <input type="text" value="smtp.reproplast.com" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="servidor.smtp.com">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Puerto</label>
                <input type="number" value="587" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="587">
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Usuario/Email</label>
                <input type="email" value="sistema@reproplast.com" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="usuario@empresa.com">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Contraseña</label>
                <input type="password" value="••••••••" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="••••••••">
              </div>
            </div>
            
            <div style="background: #f1f8e9; padding: 20px; border-radius: 12px; border-left: 4px solid #7cb342;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🔒 Configuración de Seguridad</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Usar encriptación TLS/SSL</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Requerir autenticación</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Verificar certificados SSL</span>
                </label>
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 20px;">
              <button type="button" onclick="Maintenance.testEmailConnection()" style="background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">📨 Probar Conexión</button>
              <button type="button" onclick="Utils.toast.success('Configuración de email guardada'); Modal.hide();" style="background: #7cb342; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">💾 Guardar</button>
            </div>
          </form>
        </div>
      `,
      size: 'large'
    });
  },

  configureBackup() {
    Modal.show({
      title: '💾 Configuración de Respaldos',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">🗄️ Sistema de Respaldos Automáticos</h4>
            <p style="margin: 0; opacity: 0.9;">Configure la política de respaldos para proteger los datos del sistema</p>
          </div>
          
          <div style="display: grid; gap: 25px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">⏰ Programación de Respaldos</h5>
              <div style="display: grid; gap: 15px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="radio" name="backup_frequency" value="daily" checked style="transform: scale(1.2);">
                  <span style="font-weight: 500;">Diario (recomendado)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="radio" name="backup_frequency" value="weekly" style="transform: scale(1.2);">
                  <span style="font-weight: 500;">Semanal</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="radio" name="backup_frequency" value="monthly" style="transform: scale(1.2);">
                  <span style="font-weight: 500;">Mensual</span>
                </label>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center; margin-top: 10px;">
                  <span>Hora de ejecución:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="02:00">02:00 AM</option>
                    <option value="03:00" selected>03:00 AM</option>
                    <option value="04:00">04:00 AM</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🗂️ Contenido del Respaldo</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Base de datos completa</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Archivos de configuración</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Archivos de usuarios</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Logs del sistema</span>
                </label>
              </div>
            </div>
            
            <div style="background: #fff3e0; padding: 20px; border-radius: 12px; border-left: 4px solid #ff9800;">
              <h5 style="margin: 0 0 15px 0; color: #f57c00;">📊 Retención de Respaldos</h5>
              <div style="display: grid; grid-template-columns: auto 1fr; gap: 15px; align-items: center;">
                <span>Mantener respaldos por:</span>
                <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                  <option value="30">30 días</option>
                  <option value="60" selected>60 días</option>
                  <option value="90">90 días</option>
                  <option value="365">1 año</option>
                </select>
              </div>
              <div style="margin-top: 15px; padding: 10px; background: white; border-radius: 6px; font-size: 14px;">
                <strong>Espacio estimado:</strong> ~2.5 GB por respaldo
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button onclick="Maintenance.createBackup()" style="background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">📦 Crear Respaldo Ahora</button>
              <button onclick="Utils.toast.success('Configuración de respaldos guardada'); Modal.hide();" style="background: #27ae60; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">💾 Guardar Configuración</button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  configureSecurity() {
    Modal.show({
      title: '🛡️ Configuración de Seguridad',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">🔐 Políticas de Seguridad del Sistema</h4>
            <p style="margin: 0; opacity: 0.9;">Configure las medidas de seguridad para proteger el sistema Reproplast</p>
          </div>
          
          <div style="display: grid; gap: 25px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🔑 Políticas de Contraseñas</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Mínimo 8 caracteres</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Incluir mayúsculas y minúsculas</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Incluir números</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Incluir caracteres especiales</span>
                </label>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center; margin-top: 10px;">
                  <span>Expiración de contraseña:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="30">30 días</option>
                    <option value="60">60 días</option>
                    <option value="90" selected>90 días</option>
                    <option value="0">Nunca</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🚪 Control de Acceso</h5>
              <div style="display: grid; gap: 15px;">
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Intentos de login fallidos permitidos:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="3" selected>3 intentos</option>
                    <option value="5">5 intentos</option>
                    <option value="10">10 intentos</option>
                  </select>
                </div>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Tiempo de bloqueo:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="15" selected>15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="60">1 hora</option>
                  </select>
                </div>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Cerrar sesión automáticamente por inactividad</span>
                </label>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center; margin-left: 32px;">
                  <span>Tiempo de inactividad:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="30" selected>30 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="120">2 horas</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style="background: #fff3e0; padding: 20px; border-radius: 12px; border-left: 4px solid #ff9800;">
              <h5 style="margin: 0 0 15px 0; color: #f57c00;">📋 Registro de Actividad</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Registrar todos los accesos al sistema</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Registrar cambios en datos críticos</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Notificar actividad sospechosa</span>
                </label>
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button onclick="Maintenance.viewSecurityLog()" style="background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">📋 Ver Registro</button>
              <button onclick="Utils.toast.success('Configuración de seguridad guardada'); Modal.hide();" style="background: #e74c3c; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">🔒 Guardar</button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  configureNotifications() {
    Modal.show({
      title: '🔔 Configuración de Notificaciones',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">📢 Sistema de Notificaciones</h4>
            <p style="margin: 0; opacity: 0.9;">Configure las notificaciones para usuarios y administradores del sistema</p>
          </div>
          
          <div style="display: grid; gap: 25px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">📧 Notificaciones por Email</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Notificar nuevos empleados</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Alertas de vencimiento de documentos</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Resumen diario de actividad</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Alertas de seguridad</span>
                </label>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🖥️ Notificaciones del Sistema</h5>
              <div style="display: grid; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Mostrar alertas en pantalla</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Sonido en notificaciones importantes</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Notificaciones push del navegador</span>
                </label>
              </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 20px; border-radius: 12px; border-left: 4px solid #2196f3;">
              <h5 style="margin: 0 0 15px 0; color: #1976d2;">👥 Destinatarios</h5>
              <div style="display: grid; gap: 15px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: 600;">Administradores del Sistema:</label>
                  <input type="email" value="admin@reproplast.com" style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 6px;" placeholder="admin@empresa.com">
                </div>
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: 600;">RRHH:</label>
                  <input type="email" value="rrhh@reproplast.com" style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 6px;" placeholder="rrhh@empresa.com">
                </div>
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: 600;">Supervisores:</label>
                  <input type="email" value="supervisores@reproplast.com" style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 6px;" placeholder="supervisores@empresa.com">
                </div>
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button onclick="Maintenance.testCommunications()" style="background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">📤 Enviar Prueba</button>
              <button onclick="Utils.toast.success('Configuración de notificaciones guardada'); Modal.hide();" style="background: #1abc9c; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">🔔 Guardar</button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Herramientas del Sistema
  // Cache y Rendimiento
  clearCache() {
    Utils.toast.info('Limpiando cache del sistema...');
    setTimeout(() => Utils.toast.success('Cache limpiado correctamente'), 1500);
  },
  optimizeSystem() {
    Utils.toast.info('Optimizando rendimiento del sistema...');
    setTimeout(() => Utils.toast.success('Sistema optimizado correctamente'), 2000);
  },
  checkPerformance() {
    Utils.toast.info('Analizando rendimiento del sistema...');
    setTimeout(() => {
      Modal.show({
        title: '📊 Análisis de Rendimiento',
        content: `
          <div style="padding: 20px;">
            <h4>Resultados del Análisis</h4>
            <div style="margin: 15px 0;">
              <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>CPU:</span> <span style="color: #27ae60; font-weight: bold;">12% promedio</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Memoria:</span> <span style="color: #f39c12; font-weight: bold;">2.1 GB / 8 GB</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Espacio en disco:</span> <span style="color: #27ae60; font-weight: bold;">15.7 GB disponible</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Conexiones activas:</span> <span style="color: #3498db; font-weight: bold;">67 usuarios</span>
              </div>
            </div>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 15px;">
              <strong style="color: #27ae60;">✅ El sistema está funcionando de manera óptima</strong>
            </div>
          </div>
        `,
        size: 'medium'
      });
    }, 1500);
  },

  // Sesiones y Usuarios
  viewActiveSessions() {
    Modal.show({
      title: '👥 Sesiones Activas',
      content: `
        <div style="padding: 20px;">
          <h4>Usuarios Conectados (67)</h4>
          <div style="max-height: 300px; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee;">
              <span><strong>admin</strong> - Administrador</span>
              <span style="color: #27ae60;">Activo hace 2 min</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee;">
              <span><strong>rrhh_manager</strong> - RRHH</span>
              <span style="color: #27ae60;">Activo hace 5 min</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee;">
              <span><strong>supervisor1</strong> - Supervisor</span>
              <span style="color: #f39c12;">Activo hace 15 min</span>
            </div>
            <div style="text-align: center; padding: 20px; color: #666;">
              ... y 64 usuarios más
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },
  forceLogoutAll() {
    Modal.confirm({
      title: '⚠️ Cerrar Todas las Sesiones',
      message: '¿Está seguro de que desea cerrar todas las sesiones activas? Todos los usuarios serán desconectados.',
      onConfirm: () => {
        Utils.toast.warning('Cerrando todas las sesiones...');
        setTimeout(() => Utils.toast.success('Todas las sesiones han sido cerradas'), 2000);
      }
    });
  },
  cleanExpiredSessions() {
    Utils.toast.info('Limpiando sesiones expiradas...');
    setTimeout(() => Utils.toast.success('Sesiones expiradas eliminadas'), 1000);
  },

  // Archivos del Sistema
  cleanTempFiles() {
    Utils.toast.info('Limpiando archivos temporales...');
    setTimeout(() => Utils.toast.success('Archivos temporales eliminados (127 MB liberados)'), 2000);
  },
  checkDiskSpace() {
    Modal.show({
      title: '💾 Espacio en Disco',
      content: `
        <div style="padding: 20px;">
          <h4>Análisis del Espacio en Disco</h4>
          <div style="margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
              <div style="display: flex; justify-content: space-between;">
                <span>Capacidad Total:</span> <strong>50 GB</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Espacio Usado:</span> <strong>34.3 GB (68.6%)</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Espacio Disponible:</span> <strong style="color: #27ae60;">15.7 GB</strong>
              </div>
            </div>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
              <strong style="color: #27ae60;">✅ Espacio suficiente disponible</strong>
            </div>
          </div>
        </div>
      `,
      size: 'medium'
    });
  },
  cleanUploads() {
    Utils.toast.info('Limpiando archivos de upload antiguos...');
    setTimeout(() => Utils.toast.success('Archivos antiguos eliminados (543 MB liberados)'), 2500);
  },

  // Notificaciones y Alertas
  sendTestNotification() {
    Utils.toast.success('📨 Notificación de prueba enviada correctamente');
  },
  clearNotifications() {
    Utils.toast.info('Limpiando notificaciones...');
    setTimeout(() => Utils.toast.success('Notificaciones limpiadas'), 1000);
  },
  configureAlerts() {
    Modal.show({
      title: '⚙️ Configurar Alertas',
      content: `
        <div style="padding: 20px;">
          <h4>Configuración de Alertas del Sistema</h4>
          <div style="margin: 20px 0;">
            <label style="display: block; margin: 15px 0;">
              <input type="checkbox" checked style="margin-right: 10px;">
              Alertas de rendimiento del sistema
            </label>
            <label style="display: block; margin: 15px 0;">
              <input type="checkbox" checked style="margin-right: 10px;">
              Alertas de espacio en disco
            </label>
            <label style="display: block; margin: 15px 0;">
              <input type="checkbox" style="margin-right: 10px;">
              Alertas de sesiones inusuales
            </label>
            <label style="display: block; margin: 15px 0;">
              <input type="checkbox" checked style="margin-right: 10px;">
              Alertas de errores críticos
            </label>
          </div>
          <button onclick="Utils.toast.success('Configuración guardada')" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
            Guardar Configuración
          </button>
        </div>
      `,
      size: 'medium'
    });
  },

  // Herramientas de Desarrollo
  generateTestData() {
    Utils.toast.info('Generando datos de prueba...');
    setTimeout(() => Utils.toast.success('Datos de prueba generados correctamente'), 2000);
  },
  resetDemoData() {
    Modal.confirm({
      title: '🔄 Restablecer Datos Demo',
      message: '¿Está seguro de que desea restablecer los datos demo? Esto eliminará todos los datos actuales.',
      onConfirm: () => {
        Utils.toast.warning('Restableciendo datos demo...');
        setTimeout(() => Utils.toast.success('Datos demo restablecidos'), 3000);
      }
    });
  },
  runSystemCheck() {
    Utils.toast.info('Ejecutando verificación completa del sistema...');
    setTimeout(() => {
      Utils.toast.success('✅ Verificación completada - Sistema funcionando correctamente');
    }, 3000);
  },
  exportConfiguration() {
    Utils.toast.success('📋 Configuración exportada correctamente');
  },

  // Funciones del Header
  showSystemStatus() {
    Modal.show({
      title: '📊 Estado del Sistema',
      content: `
        <div style="padding: 20px;">
          <h4>Estado Actual del Sistema Reproplast HR</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
              <div style="font-size: 24px; font-weight: bold; color: #27ae60;">🟢</div>
              <div style="color: #27ae60; font-weight: bold;">Sistema Operativo</div>
            </div>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; text-align: center;">
              <div style="font-size: 20px; font-weight: bold; color: #3498db;">67</div>
              <div style="color: #3498db;">Usuarios Activos</div>
            </div>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; text-align: center;">
              <div style="font-size: 20px; font-weight: bold; color: #f39c12;">98%</div>
              <div style="color: #f39c12;">Rendimiento</div>
            </div>
            <div style="background: #fce4ec; padding: 15px; border-radius: 8px; text-align: center;">
              <div style="font-size: 20px; font-weight: bold; color: #e91e63;">15.7 GB</div>
              <div style="color: #e91e63;">Espacio Libre</div>
            </div>
          </div>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <h5>Servicios</h5>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Servidor Web:</span> <span style="color: #27ae60; font-weight: bold;">✅ Activo</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Sistema de Archivos:</span> <span style="color: #27ae60; font-weight: bold;">✅ Activo</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Cache del Sistema:</span> <span style="color: #27ae60; font-weight: bold;">✅ Activo</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Notificaciones:</span> <span style="color: #27ae60; font-weight: bold;">✅ Activo</span>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Funciones nuevas para gestión de tablas

  // Abrir CRUD de tabla
  openTableCRUD(tableName, tableTitle) {
    console.log('openTableCRUD llamado con:', tableName, tableTitle);

    if (typeof Modal === 'undefined') {
      console.error('Modal no está definido. Verificar que modal.js se haya cargado.');
      alert('Error: Sistema de modales no cargado. Recargue la página.');
      return;
    }

    Modal.show({
      title: `✏️ Gestión de ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="background: #f1f8e9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #7cb342;">
            <h4 style="margin: 0 0 10px 0; color: #558b2f;">🗃️ Panel de Control - ${tableTitle}</h4>
            <p style="margin: 0; color: #6a6a6a;">Gestión completa de datos de la tabla <strong>${tableName}</strong></p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
            <button onclick="Maintenance.showTableData('${tableName}', '${tableTitle}')" 
                    style="background: #7cb342; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
              📋 Ver Registros
            </button>
            <button onclick="Maintenance.addTableRecord('${tableName}', '${tableTitle}')" 
                    style="background: #558b2f; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
              ➕ Agregar Nuevo
            </button>
            <button onclick="Maintenance.importTableData('${tableName}', '${tableTitle}')" 
                    style="background: #2e7d32; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
              📥 Importar Datos
            </button>
            <button onclick="Maintenance.backupTable('${tableName}', '${tableTitle}')" 
                    style="background: #4caf50; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
              💾 Respaldar
            </button>
          </div>
          
          <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
            <h5 style="margin: 0 0 10px 0; color: #f57c00;">⚠️ Operaciones Avanzadas</h5>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button onclick="Maintenance.optimizeTable('${tableName}')" 
                      style="background: #ff9800; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 14px;">
                🚀 Optimizar
              </button>
              <button onclick="Maintenance.truncateTable('${tableName}')" 
                      style="background: #f44336; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 14px;">
                🗑️ Vaciar
              </button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Ver estructura de tabla
  viewTableStructure(tableName, tableTitle) {
    const table = this.data.tables.find(t => t.name === tableName);
    Modal.show({
      title: `🔍 Estructura de ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="margin: 0; color: #1976d2;">📊 Información de la Tabla</h4>
            <div style="margin-top: 10px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
              <div><strong>Nombre:</strong> ${tableName}</div>
              <div><strong>Categoría:</strong> ${this.getCategoryLabel(table.category)}</div>
              <div><strong>Registros:</strong> ${table.records.toLocaleString()}</div>
              <div><strong>Estado:</strong> <span style="color: #27ae60;">✅ Activa</span></div>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5 style="margin: 0 0 15px 0;">🗂️ Campos Principales</h5>
            <div style="background: white; border-radius: 6px; overflow: hidden; border: 1px solid #dee2e6;">
              <div style="background: #7cb342; color: white; padding: 10px; font-weight: 600;">
                Estructura estimada para ${tableTitle}
              </div>
              <div style="padding: 15px;">
                <div style="font-family: monospace; font-size: 14px; line-height: 1.6;">
                  • id (INT, PRIMARY KEY, AUTO_INCREMENT)<br>
                  • nombre (VARCHAR(255), NOT NULL)<br>
                  • fecha_creacion (DATETIME, DEFAULT CURRENT_TIMESTAMP)<br>
                  • fecha_actualizacion (DATETIME, ON UPDATE CURRENT_TIMESTAMP)<br>
                  • activo (BOOLEAN, DEFAULT 1)<br>
                  • ... y más campos específicos de ${tableTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Mostrar menú contextual de tabla
  showTableMenu(tableName, tableTitle) {
    Modal.show({
      title: `⋮ Opciones para ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="display: grid; gap: 10px;">
            <button onclick="Maintenance.analyzeTable('${tableName}', '${tableTitle}')" 
                    style="background: #2196f3; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;">
              <span>📈</span> Analizar Rendimiento
            </button>
            <button onclick="Maintenance.repairTable('${tableName}', '${tableTitle}')" 
                    style="background: #ff9800; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;">
              <span>🔧</span> Reparar y Optimizar
            </button>
            <button onclick="Maintenance.cloneTable('${tableName}', '${tableTitle}')" 
                    style="background: #9c27b0; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;">
              <span>📋</span> Duplicar Estructura
            </button>
            <button onclick="Maintenance.showTableHistory('${tableName}', '${tableTitle}')" 
                    style="background: #607d8b; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;">
              <span>📚</span> Historial de Cambios
            </button>
            <button onclick="Maintenance.configureTableAlerts('${tableName}', '${tableTitle}')" 
                    style="background: #795548; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;">
              <span>🔔</span> Configurar Alertas
            </button>
          </div>
        </div>
      `,
      size: 'medium'
    });
  },

  // Funciones de acción para tablas
  showTableData(tableName, tableTitle) {
    // Generar datos de muestra
    const sampleData = this.generateSampleData(tableName);

    Modal.show({
      title: `📋 Datos de ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h4 style="margin: 0; color: #2c3e50;">Registros de ${tableTitle}</h4>
            <button onclick="Maintenance.addTableRecord('${tableName}', '${tableTitle}')" 
                    style="background: #27ae60; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
              ➕ Nuevo Registro
            </button>
          </div>
          
          <div style="overflow-x: auto; max-height: 400px;">
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
              <thead style="background: #34495e; color: white;">
                <tr>
                  <th style="padding: 12px; text-align: left;">ID</th>
                  <th style="padding: 12px; text-align: left;">Nombre</th>
                  <th style="padding: 12px; text-align: left;">Fecha</th>
                  <th style="padding: 12px; text-align: left;">Estado</th>
                  <th style="padding: 12px; text-align: center;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${sampleData.map((record, index) => `
                  <tr style="border-bottom: 1px solid #ecf0f1; ${index % 2 === 0 ? 'background: #f8f9fa;' : ''}">
                    <td style="padding: 12px;">#${record.id}</td>
                    <td style="padding: 12px; font-weight: 500;">${record.name}</td>
                    <td style="padding: 12px;">${record.date}</td>
                    <td style="padding: 12px;">
                      <span style="background: ${this.getStatusColor(record.status)}; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                        ${this.getStatusIcon(record.status)} ${record.status}
                      </span>
                    </td>
                    <td style="padding: 12px; text-align: center;">
                      <button onclick="Maintenance.showViewRecordModal('${tableName}', ${record.id})" 
                              style="background: #3498db; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin: 0 2px; font-size: 12px;" 
                              title="Ver detalles">👁️</button>
                      <button onclick="Maintenance.showEditRecordModal('${tableName}', ${record.id})" 
                              style="background: #f39c12; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin: 0 2px; font-size: 12px;" 
                              title="Editar">✏️</button>
                      <button onclick="Maintenance.deleteRecord('${tableName}', ${record.id})" 
                              style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin: 0 2px; font-size: 12px;" 
                              title="Eliminar">🗑️</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          
          <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
            <div style="color: #7f8c8d;">
              Mostrando ${sampleData.length} registros de ${tableTitle}
            </div>
            <button onclick="Maintenance.showImportModal('${tableName}', '${tableTitle}')" 
                    style="background: #9b59b6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
              📥 Importar Datos
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  addTableRecord(tableName, tableTitle) {
    Modal.show({
      title: `➕ Nuevo Registro - ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="background: linear-gradient(135deg, #d5f4e6, #f8f9fa); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #27ae60;">
            <h4 style="margin: 0 0 8px 0; color: #27ae60;">✨ Crear Nuevo Registro</h4>
            <p style="margin: 0; color: #34495e;">Complete la información para agregar un nuevo registro a ${tableTitle}</p>
          </div>
          
          <form id="newRecordForm">
            ${this.generateEditFormFields(tableName, { id: 'NUEVO', name: '', status: 'Activo', date: new Date().toISOString().split('T')[0] })}
            
            <div class="modal-actions">
              <button type="button" onclick="Modal.hide()" class="btn-cancel">
                ❌ Cancelar
              </button>
              <button type="button" onclick="Maintenance.saveNewRecord('${tableName}')" class="btn-save">
                💾 Guardar Registro
              </button>
            </div>
          </form>
        </div>
      `,
      size: 'medium'
    });
  },

  importTableData(tableName, tableTitle) {
    this.showImportModal(tableName, tableTitle);
  },

  // Generar datos de muestra para las tablas
  generateSampleData(tableName) {
    const baseData = {
      empleados: [
        { id: 1, name: 'María González Herrera', status: 'Activo', date: '2024-01-15' },
        { id: 2, name: 'Carlos Alberto Ruíz', status: 'Activo', date: '2024-02-10' },
        { id: 3, name: 'Ana Sofía López', status: 'Inactivo', date: '2023-11-20' },
        { id: 4, name: 'Roberto Martín Torres', status: 'Pendiente', date: '2024-03-05' },
        { id: 5, name: 'Lucía Fernanda Castro', status: 'Activo', date: '2024-01-30' }
      ],
      planilla: [
        { id: 1, name: 'Planilla Enero 2025', status: 'Cerrada', date: '2025-01-31' },
        { id: 2, name: 'Planilla Febrero 2025', status: 'Procesando', date: '2025-02-28' },
        { id: 3, name: 'Planilla Marzo 2025', status: 'Pendiente', date: '2025-03-31' },
        { id: 4, name: 'Planilla Especial Navidad', status: 'Aprobada', date: '2024-12-25' }
      ],
      departamento: [
        { id: 1, name: 'Recursos Humanos', status: 'Activo', date: '2023-01-01' },
        { id: 2, name: 'Contabilidad y Finanzas', status: 'Activo', date: '2023-01-01' },
        { id: 3, name: 'Producción Industrial', status: 'Activo', date: '2023-01-01' },
        { id: 4, name: 'Ventas y Marketing', status: 'Reestructuración', date: '2023-06-15' }
      ]
    };

    return baseData[tableName] || [
      { id: 1, name: `Registro Ejemplo 1 - ${tableName}`, status: 'Activo', date: '2024-01-15' },
      { id: 2, name: `Registro Ejemplo 2 - ${tableName}`, status: 'Pendiente', date: '2024-02-10' },
      { id: 3, name: `Registro Ejemplo 3 - ${tableName}`, status: 'Inactivo', date: '2024-03-05' }
    ];
  },

  // Eliminar un registro
  deleteRecord(tableName, recordId) {
    Modal.confirm({
      title: '🗑️ Confirmar Eliminación',
      message: `¿Está seguro de que desea eliminar el registro #${recordId}? Esta acción no se puede deshacer.`,
      onConfirm: () => {
        Utils.toast.loading('🗑️ Eliminando registro...');
        setTimeout(() => {
          Utils.toast.success(`✅ Registro #${recordId} eliminado exitosamente`);
          // Aquí se actualizaría la vista de datos
        }, 1500);
      }
    });
  },

  backupTable(tableName, tableTitle) {
    Utils.toast.info(`💾 Creando respaldo de ${tableTitle}...`);
    setTimeout(() => Utils.toast.success(`✅ Respaldo de ${tableTitle} completado`), 2000);
  },

  optimizeTable(tableName) {
    Utils.toast.info(`🚀 Optimizando tabla ${tableName}...`);
    setTimeout(() => Utils.toast.success(`✅ Tabla ${tableName} optimizada`), 1500);
  },

  truncateTable(tableName) {
    Modal.confirm({
      title: '⚠️ Confirmar Vaciado de Tabla',
      message: `¿Está seguro de que desea vaciar completamente la tabla ${tableName}? Esta acción eliminará TODOS los registros y no se puede deshacer.`,
      onConfirm: () => {
        Utils.toast.warning(`🗑️ Vaciando tabla ${tableName}...`);
        setTimeout(() => Utils.toast.success(`✅ Tabla ${tableName} vaciada`), 2000);
      }
    });
  },

  analyzeTable(tableName, tableTitle) {
    Utils.toast.info(`📈 Analizando rendimiento de ${tableTitle}...`);
    setTimeout(() => {
      Modal.show({
        title: `📈 Análisis de ${tableTitle}`,
        content: `
          <div style="padding: 20px;">
            <h4>Resultados del Análisis</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <strong>Tamaño:</strong> 2.4 MB<br>
                  <strong>Índices:</strong> 3 activos<br>
                  <strong>Último análisis:</strong> Ahora
                </div>
                <div>
                  <strong>Fragmentación:</strong> 5%<br>
                  <strong>Optimización:</strong> 95%<br>
                  <strong>Estado:</strong> <span style="color: #27ae60;">Óptimo</span>
                </div>
              </div>
            </div>
          </div>
        `,
        size: 'medium'
      });
    }, 1500);
  },

  repairTable(tableName, tableTitle) {
    Utils.toast.info(`🔧 Reparando ${tableTitle}...`);
    setTimeout(() => Utils.toast.success(`✅ ${tableTitle} reparada exitosamente`), 2000);
  },

  cloneTable(tableName, tableTitle) {
    Utils.toast.info(`📋 Clonando estructura de ${tableTitle}...`);
    setTimeout(() => Utils.toast.success(`✅ Estructura de ${tableTitle} duplicada`), 1500);
  },

  showTableHistory(tableName, tableTitle) {
    Modal.show({
      title: `📚 Historial de ${tableTitle}`,
      content: `
        <div style="padding: 20px;">
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5>Actividad Reciente</h5>
            <div style="font-size: 14px; line-height: 1.8;">
              <div>• <strong>Hoy 14:30:</strong> Optimización automática ejecutada</div>
              <div>• <strong>Ayer 09:15:</strong> 15 registros agregados</div>
              <div>• <strong>23/08 16:22:</strong> Índice actualizado</div>
              <div>• <strong>22/08 11:45:</strong> Respaldo programado completado</div>
            </div>
          </div>
        </div>
      `,
      size: 'medium'
    });
  },

  configureTableAlerts(tableName, tableTitle) {
    Utils.toast.info(`🔔 Configurando alertas para ${tableTitle}`);
  },

  // Funciones adicionales del módulo
  exportTablesData() {
    Utils.toast.info('📤 Generando exportación de todas las tablas...');
    setTimeout(() => Utils.toast.success('✅ Datos exportados correctamente'), 2500);
  },

  generateSystemReport() {
    Utils.toast.info('📊 Generando reporte completo del sistema...');
    setTimeout(() => {
      Modal.show({
        title: '📊 Reporte del Sistema Generado',
        content: `
          <div style="padding: 20px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 20px;">📋</div>
            <h3 style="color: #558b2f; margin-bottom: 15px;">Reporte Generado Exitosamente</h3>
            <p style="margin-bottom: 20px;">El reporte completo del sistema ha sido generado con toda la información de las tablas y estadísticas.</p>
            <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <strong>Incluye:</strong> Estructura de tablas, estadísticas, rendimiento, y recomendaciones
            </div>
            <button onclick="Utils.toast.success('📥 Descarga iniciada')" 
                    style="background: #7cb342; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">
              📥 Descargar Reporte PDF
            </button>
          </div>
        `,
        size: 'medium'
      });
    }, 3000);
  },

  exportSystemData() {
    Utils.toast.info('📤 Preparando exportación completa del sistema...');
    setTimeout(() => Utils.toast.success('✅ Exportación completada'), 2000);
  },

  emergencyBackup() {
    Modal.confirm({
      title: '🚨 Respaldo de Emergencia',
      message: '¿Desea crear un respaldo de emergencia del sistema? Este proceso puede tomar varios minutos.',
      onConfirm: () => {
        Utils.toast.warning('🚨 Creando respaldo de emergencia...');
        setTimeout(() => {
          Utils.toast.success('✅ Respaldo de emergencia creado exitosamente');
        }, 3000);
      }
    });
  },

  // ===== NUEVAS FUNCIONES PARA ADMINISTRACIÓN DEL SISTEMA =====

  // Configuración General - Datos de la Empresa mejorada
  configureCompany() {
    Modal.show({
      title: '🏢 Configuración de la Empresa',
      subtitle: 'Gestione la información corporativa y datos de contacto',
      content: `
        <style>
          .config-container { padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          .config-section { 
            background: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
          }
          .config-header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 25px; 
            border-radius: 16px; 
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .config-form-group { 
            margin-bottom: 20px; 
            display: grid; 
            grid-template-columns: 150px 1fr; 
            gap: 15px; 
            align-items: center; 
          }
          .config-input { 
            padding: 12px 16px; 
            border: 2px solid #e9ecef; 
            border-radius: 10px; 
            font-size: 14px; 
            transition: all 0.3s ease;
            width: 100%;
          }
          .config-input:focus { 
            border-color: #667eea; 
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); 
            outline: none; 
          }
          .config-label { 
            font-weight: 600; 
            color: #2d3436; 
            font-size: 14px; 
          }
          .config-textarea { 
            padding: 12px 16px; 
            border: 2px solid #e9ecef; 
            border-radius: 10px; 
            font-size: 14px; 
            min-height: 80px; 
            resize: vertical;
            transition: all 0.3s ease;
          }
          .config-textarea:focus { 
            border-color: #667eea; 
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); 
            outline: none; 
          }
          .config-btn { 
            background: linear-gradient(135deg, #00b894, #00cec9); 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-weight: 600; 
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .config-btn:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(0, 184, 148, 0.4); 
          }
        </style>

        <div class="config-container">
          <!-- Header -->
          <div class="config-header">
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">🏭</div>
            </div>
            <div>
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Información Corporativa</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">Configure los datos de Reproplast S.A.S y información de contacto</p>
            </div>
          </div>

          <!-- Información Básica -->
          <div class="config-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📋 Información Básica
            </h4>
            
            <div class="config-form-group">
              <label class="config-label">Razón Social:</label>
              <input type="text" class="config-input" value="Reproplast S.A.S" placeholder="Nombre completo de la empresa">
            </div>
            
            <div class="config-form-group">
              <label class="config-label">NIT:</label>
              <input type="text" class="config-input" value="900.123.456-7" placeholder="Número de identificación tributaria">
            </div>
            
            <div class="config-form-group">
              <label class="config-label">Industria:</label>
              <select class="config-input">
                <option value="plasticos" selected>Manufactura de Plásticos y Polímeros</option>
                <option value="manufactura">Manufactura General</option>
                <option value="quimicos">Productos Químicos</option>
                <option value="empaques">Empaques y Envases</option>
              </select>
            </div>
            
            <div class="config-form-group">
              <label class="config-label">Tamaño:</label>
              <select class="config-input">
                <option value="mediana" selected>Empresa Mediana (50-200 empleados)</option>
                <option value="pequena">Empresa Pequeña (10-50 empleados)</option>
                <option value="grande">Empresa Grande (200+ empleados)</option>
                <option value="micro">Microempresa (1-10 empleados)</option>
              </select>
            </div>
          </div>

          <!-- Información de Contacto -->
          <div class="config-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              📞 Contacto e Ubicación
            </h4>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 15px; margin-bottom: 20px;">
              <label class="config-label">Dirección Principal:</label>
              <textarea class="config-textarea" placeholder="Dirección completa de la empresa">Calle 50 #25-30, Zona Industrial Los Pinos
Medellín, Antioquia, Colombia
Código Postal: 050026</textarea>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div style="display: grid; grid-template-columns: 80px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Teléfono:</label>
                <input type="tel" class="config-input" value="(4) 123-4567" placeholder="Teléfono principal">
              </div>
              <div style="display: grid; grid-template-columns: 80px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Celular:</label>
                <input type="tel" class="config-input" value="+57 300 123 4567" placeholder="Teléfono móvil">
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="display: grid; grid-template-columns: 80px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Email:</label>
                <input type="email" class="config-input" value="contacto@reproplast.com" placeholder="Email corporativo">
              </div>
              <div style="display: grid; grid-template-columns: 80px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Web:</label>
                <input type="url" class="config-input" value="https://www.reproplast.com" placeholder="Sitio web">
              </div>
            </div>
          </div>

          <!-- Información Legal y Fiscal -->
          <div class="config-section">
            <h4 style="margin: 0 0 20px 0; color: #2d3436; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              ⚖️ Información Legal y Fiscal
            </h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Representante Legal:</label>
                <input type="text" class="config-input" value="Dr. Carlos Eduardo Martínez López" placeholder="Nombre completo">
              </div>
              <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Constitución:</label>
                <input type="date" class="config-input" value="2018-03-15">
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
              <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Capital Social:</label>
                <input type="number" class="config-input" value="500000000" placeholder="En pesos colombianos" step="1000000">
              </div>
              <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; align-items: center;">
                <label class="config-label">Régimen Fiscal:</label>
                <select class="config-input">
                  <option value="comun" selected>Régimen Común</option>
                  <option value="simple">Régimen Simple de Tributación</option>
                  <option value="especial">Régimen Especial</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 30px;">
            <button type="button" onclick="Maintenance.validateCompanyData()" style="background: linear-gradient(135deg, #0984e3, #74b9ff); color: white; border: none; padding: 15px 30px; border-radius: 12px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              🧪 Validar Datos
            </button>
            <button class="config-btn" onclick="Utils.toast.success('✅ Configuración de empresa guardada exitosamente'); Modal.hide();">
              💾 Guardar Configuración
            </button>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Método auxiliar para validar datos de empresa
  validateCompanyData() {
    Utils.toast.loading('Validando datos de la empresa...');
    setTimeout(() => {
      Utils.toast.success('✅ Todos los datos son válidos');
    }, 1500);
  },

  // Método para buscar en tabla
  searchInTable(tableName, searchTerm) {
    if (searchTerm.length > 2) {
      Utils.toast.info(`🔍 Buscando "${searchTerm}" en ${tableName}...`);
    }
  },

  // Método para filtrar por estado
  filterByStatus(tableName, status) {
    if (status) {
      Utils.toast.info(`📊 Filtrando registros ${status} en ${tableName}`);
    } else {
      Utils.toast.info(`🗂️ Mostrando todos los registros de ${tableName}`);
    }
  },

  // Método para limpiar filtros
  clearFilters(tableName) {
    Utils.toast.info(`🧹 Filtros limpiados para ${tableName}`);
    const searchInput = document.querySelector(`input[placeholder*="Buscar"]`);
    const statusSelect = document.querySelector(`select`);
    if (searchInput) searchInput.value = '';
    if (statusSelect) statusSelect.value = '';
  },

  configureSystem() {
    Modal.show({
      title: '🔧 Parámetros del Sistema',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #8bc34a 0%, #7cb342 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">⚙️ Configuración Técnica del Sistema</h4>
            <p style="margin: 0; opacity: 0.9;">Ajuste los parámetros operativos del sistema Reproplast</p>
          </div>
          
          <div style="display: grid; gap: 25px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🎯 Parámetros Generales</h5>
              <div style="display: grid; gap: 15px;">
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Zona horaria del sistema:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="America/Bogota" selected>América/Bogotá (UTC-5)</option>
                    <option value="America/Caracas">América/Caracas (UTC-4)</option>
                  </select>
                </div>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Idioma del sistema:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="es" selected>Español</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Formato de fecha:</span>
                  <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="dd/mm/yyyy" selected>DD/MM/YYYY</option>
                    <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                    <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">📊 Límites del Sistema</h5>
              <div style="display: grid; gap: 15px;">
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Máximo de usuarios simultáneos:</span>
                  <input type="number" value="100" style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px; width: 100px;">
                </div>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Tamaño máximo de archivo (MB):</span>
                  <input type="number" value="50" style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px; width: 100px;">
                </div>
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                  <span>Tiempo de sesión (minutos):</span>
                  <input type="number" value="120" style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px; width: 100px;">
                </div>
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button onclick="Utils.toast.success('Parámetros del sistema guardados'); Modal.hide();" style="background: #8bc34a; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">⚙️ Guardar</button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  configureTheme() {
    Modal.show({
      title: '🎨 Personalización',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #689f38 0%, #558b2f 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">🎨 Tema y Personalización</h4>
            <p style="margin: 0; opacity: 0.9;">Configure la apariencia del sistema según la identidad corporativa</p>
          </div>
          
          <div style="display: grid; gap: 25px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🌈 Colores Corporativos</h5>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="text-align: center;">
                  <div style="width: 80px; height: 80px; background: #7cb342; margin: 0 auto 10px; border-radius: 12px; border: 3px solid #558b2f;"></div>
                  <div style="font-weight: 600;">Verde Reproplast</div>
                  <div style="font-size: 12px; color: #666;">#7cb342</div>
                </div>
                <div style="text-align: center;">
                  <div style="width: 80px; height: 80px; background: #8bc34a; margin: 0 auto 10px; border-radius: 12px; border: 2px solid #e0e0e0;"></div>
                  <div style="font-weight: 600;">Verde Claro</div>
                  <div style="font-size: 12px; color: #666;">#8bc34a</div>
                </div>
                <div style="text-align: center;">
                  <div style="width: 80px; height: 80px; background: #558b2f; margin: 0 auto 10px; border-radius: 12px; border: 2px solid #e0e0e0;"></div>
                  <div style="font-weight: 600;">Verde Oscuro</div>
                  <div style="font-size: 12px; color: #666;">#558b2f</div>
                </div>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
              <h5 style="margin: 0 0 15px 0; color: #558b2f;">🖼️ Logo y Marca</h5>
              <div style="display: grid; gap: 15px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: 600;">Logo del sistema:</label>
                  <div style="border: 2px dashed #7cb342; padding: 30px; text-align: center; border-radius: 8px; cursor: pointer;" onclick="Utils.toast.info('Función de carga de logo')">
                    <div style="font-size: 48px; margin-bottom: 10px;">🏭</div>
                    <div style="color: #7cb342; font-weight: 600;">Hacer clic para subir logo</div>
                    <div style="color: #666; font-size: 12px;">PNG, JPG, SVG (max 2MB)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button onclick="Utils.toast.success('Configuración de tema guardada'); Modal.hide();" style="background: #689f38; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">🎨 Guardar</button>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Gestión de Usuarios
  manageUsers() {
    Modal.show({
      title: '👥 Gestión de Usuarios',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #7cb342 0%, #8bc34a 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">👤 Administración de Usuarios</h4>
            <p style="margin: 0; opacity: 0.9;">Gestione usuarios, roles y permisos del sistema</p>
          </div>
          
          <div style="margin-bottom: 20px; display: flex; gap: 15px; align-items: center;">
            <input type="text" placeholder="Buscar usuario..." style="flex: 1; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px;">
            <button onclick="Maintenance.createNewUser()" style="background: #7cb342; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">➕ Nuevo Usuario</button>
          </div>
          
          <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background: #f8f9fa; padding: 15px; font-weight: 600; border-bottom: 1px solid #e0e0e0; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 15px;">
              <div>Usuario</div>
              <div>Rol</div>
              <div>Estado</div>
              <div>Último Acceso</div>
              <div>Acciones</div>
            </div>
            <div style="max-height: 400px; overflow-y: auto;">
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">admin</div>
                  <div style="font-size: 12px; color: #666;">admin@reproplast.com</div>
                </div>
                <div><span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Administrador</span></div>
                <div><span style="background: #27ae60; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Activo</span></div>
                <div style="font-size: 12px;">Hace 5 min</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">✏️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">rrhh_manager</div>
                  <div style="font-size: 12px; color: #666;">rrhh@reproplast.com</div>
                </div>
                <div><span style="background: #f39c12; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">RRHH</span></div>
                <div><span style="background: #27ae60; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Activo</span></div>
                <div style="font-size: 12px;">Hace 2 horas</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">✏️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">supervisor1</div>
                  <div style="font-size: 12px; color: #666;">supervisor@reproplast.com</div>
                </div>
                <div><span style="background: #9b59b6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Supervisor</span></div>
                <div><span style="background: #f39c12; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Inactivo</span></div>
                <div style="font-size: 12px;">Ayer</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">✏️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  createNewUser() {
    Modal.show({
      title: '➕ Crear Nuevo Usuario',
      content: `
        <div style="padding: 25px;">
          <form style="display: grid; gap: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Nombre de Usuario</label>
                <input type="text" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="usuario">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Email</label>
                <input type="email" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="usuario@reproplast.com">
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Nombre Completo</label>
                <input type="text" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="Nombre completo">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Rol</label>
                <select style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;">
                  <option value="">Seleccionar rol...</option>
                  <option value="admin">Administrador</option>
                  <option value="rrhh">RRHH</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Contraseña Temporal</label>
                <input type="password" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="••••••••">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Confirmar Contraseña</label>
                <input type="password" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="••••••••">
              </div>
            </div>
            
            <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; border-left: 4px solid #7cb342;">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" checked style="transform: scale(1.2);">
                <span>Enviar credenciales por email al usuario</span>
              </label>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button type="button" onclick="Modal.hide()" style="background: #95a5a6; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">Cancelar</button>
              <button type="button" onclick="Utils.toast.success('Usuario creado exitosamente'); Modal.hide();" style="background: #7cb342; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">➕ Crear Usuario</button>
            </div>
          </form>
        </div>
      `,
      size: 'large'
    });
  },

  // Funciones de comunicación
  testCommunications() {
    Utils.toast.info('Enviando emails de prueba...');
    setTimeout(() => {
      Modal.show({
        title: '📤 Resultado de Pruebas de Comunicación',
        content: `
          <div style="padding: 20px;">
            <h4 style="color: #558b2f;">Resultados de las Pruebas</h4>
            <div style="margin: 20px 0;">
              <div style="display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #e8f5e8; border-radius: 6px;">
                <span>📧 Email de prueba:</span> <span style="color: #27ae60; font-weight: bold;">✅ Enviado correctamente</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #e8f5e8; border-radius: 6px;">
                <span>🔔 Notificación del sistema:</span> <span style="color: #27ae60; font-weight: bold;">✅ Funcionando</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #e8f5e8; border-radius: 6px;">
                <span>📱 Notificación push:</span> <span style="color: #27ae60; font-weight: bold;">✅ Activa</span>
              </div>
            </div>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
              <strong style="color: #27ae60;">✅ Todas las comunicaciones funcionan correctamente</strong>
            </div>
          </div>
        `,
        size: 'medium'
      });
    }, 2000);
  },

  testEmailConnection() {
    Utils.toast.info('Probando conexión SMTP...');
    setTimeout(() => {
      Utils.toast.success('✅ Conexión SMTP exitosa - Configuración válida');
    }, 2000);
  },

  // Funciones de respaldos
  createBackup() {
    Modal.confirm({
      title: '💾 Crear Respaldo',
      message: '¿Desea crear un respaldo completo del sistema ahora? Este proceso puede tomar varios minutos.',
      onConfirm: () => {
        Utils.toast.info('🔄 Creando respaldo del sistema...');
        setTimeout(() => {
          Utils.toast.success('✅ Respaldo creado exitosamente - backup_reproplast_' + new Date().toISOString().split('T')[0] + '.sql');
        }, 4000);
      }
    });
  },

  viewBackups() {
    Modal.show({
      title: '📂 Respaldos del Sistema',
      content: `
        <div style="padding: 25px;">
          <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <h4 style="margin: 0; color: #558b2f;">Historial de Respaldos</h4>
            <button onclick="Maintenance.createBackup()" style="background: #7cb342; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: 600;">➕ Nuevo Respaldo</button>
          </div>
          
          <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background: #f8f9fa; padding: 15px; font-weight: 600; border-bottom: 1px solid #e0e0e0; display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 15px;">
              <div>Archivo</div>
              <div>Fecha</div>
              <div>Tamaño</div>
              <div>Acciones</div>
            </div>
            <div style="max-height: 400px; overflow-y: auto;">
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">backup_reproplast_2024-01-15.sql</div>
                  <div style="font-size: 12px; color: #666;">Respaldo automático</div>
                </div>
                <div style="font-size: 14px;">15/01/2024 03:00</div>
                <div style="font-size: 14px;">2.8 GB</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">⬇️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">backup_reproplast_2024-01-14.sql</div>
                  <div style="font-size: 12px; color: #666;">Respaldo automático</div>
                </div>
                <div style="font-size: 14px;">14/01/2024 03:00</div>
                <div style="font-size: 14px;">2.7 GB</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">⬇️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 15px; align-items: center;">
                <div>
                  <div style="font-weight: 600;">backup_manual_2024-01-10.sql</div>
                  <div style="font-size: 12px; color: #666;">Respaldo manual</div>
                </div>
                <div style="font-size: 14px;">10/01/2024 14:30</div>
                <div style="font-size: 14px;">2.6 GB</div>
                <div>
                  <button style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">⬇️</button>
                  <button style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️</button>
                </div>
              </div>
            </div>
          </div>
          
          <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #7cb342;">
            <strong>💡 Información:</strong> Los respaldos se almacenan de forma segura y se mantienen según la política configurada.
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  // Funciones de seguridad
  viewSecurityLog() {
    Modal.show({
      title: '📋 Registro de Seguridad',
      content: `
        <div style="padding: 25px;">
          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #558b2f;">Eventos de Seguridad Recientes</h4>
            <div style="display: flex; gap: 10px; align-items: center;">
              <select style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
                <option value="all">Todos los eventos</option>
                <option value="login">Inicios de sesión</option>
                <option value="failed">Intentos fallidos</option>
                <option value="admin">Acciones administrativas</option>
              </select>
              <input type="date" style="padding: 8px; border: 2px solid #e0e0e0; border-radius: 6px;">
            </div>
          </div>
          
          <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background: #f8f9fa; padding: 15px; font-weight: 600; border-bottom: 1px solid #e0e0e0; display: grid; grid-template-columns: auto 2fr 1fr 1fr; gap: 15px;">
              <div>Tipo</div>
              <div>Evento</div>
              <div>Usuario</div>
              <div>Fecha/Hora</div>
            </div>
            <div style="max-height: 400px; overflow-y: auto;">
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: auto 2fr 1fr 1fr; gap: 15px; align-items: center;">
                <div><span style="background: #27ae60; color: white; padding: 4px 8px; border-radius: 50%; font-size: 12px;">✓</span></div>
                <div>
                  <div style="font-weight: 600;">Inicio de sesión exitoso</div>
                  <div style="font-size: 12px; color: #666;">IP: 192.168.1.100</div>
                </div>
                <div>admin</div>
                <div style="font-size: 12px;">Hoy 14:23</div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: auto 2fr 1fr 1fr; gap: 15px; align-items: center;">
                <div><span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 50%; font-size: 12px;">✗</span></div>
                <div>
                  <div style="font-weight: 600;">Intento de acceso fallido</div>
                  <div style="font-size: 12px; color: #666;">IP: 192.168.1.50 - Contraseña incorrecta</div>
                </div>
                <div>user123</div>
                <div style="font-size: 12px;">Hoy 12:45</div>
              </div>
              <div style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: grid; grid-template-columns: auto 2fr 1fr 1fr; gap: 15px; align-items: center;">
                <div><span style="background: #f39c12; color: white; padding: 4px 8px; border-radius: 50%; font-size: 12px;">⚠</span></div>
                <div>
                  <div style="font-weight: 600;">Cambio en configuración de seguridad</div>
                  <div style="font-size: 12px; color: #666;">Política de contraseñas modificada</div>
                </div>
                <div>admin</div>
                <div style="font-size: 12px;">Ayer 16:30</div>
              </div>
            </div>
          </div>
        </div>
      `,
      size: 'large'
    });
  },

  sendSystemMessage() {
    Modal.show({
      title: '📢 Mensaje del Sistema',
      content: `
        <div style="padding: 25px;">
          <div style="background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h4 style="margin: 0 0 10px 0;">📣 Enviar Mensaje a Usuarios</h4>
            <p style="margin: 0; opacity: 0.9;">Envíe un mensaje importante a todos los usuarios del sistema</p>
          </div>
          
          <form style="display: grid; gap: 20px;">
            <div>
              <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Tipo de Mensaje</label>
              <select style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;">
                <option value="info">Información General</option>
                <option value="warning">Advertencia</option>
                <option value="maintenance">Mantenimiento Programado</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Destinatarios</label>
              <div style="display: grid; gap: 10px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" checked style="transform: scale(1.2);">
                  <span>Todos los usuarios</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Solo administradores</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                  <input type="checkbox" style="transform: scale(1.2);">
                  <span>Solo usuarios activos</span>
                </label>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Asunto</label>
              <input type="text" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px;" placeholder="Asunto del mensaje">
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #558b2f;">Mensaje</label>
              <textarea style="width: 100%; height: 120px; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; resize: vertical;" placeholder="Escriba el mensaje aquí..."></textarea>
            </div>
            
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" style="transform: scale(1.2);">
                <span>Programar envío para más tarde</span>
              </label>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: flex-end;">
              <button type="button" onclick="Modal.hide()" style="background: #95a5a6; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">Cancelar</button>
              <button type="button" onclick="Utils.toast.success('Mensaje enviado a todos los usuarios'); Modal.hide();" style="background: #9b59b6; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">📢 Enviar</button>
            </div>
          </form>
        </div>
      `,
      size: 'large'
    });
  },

  // Métodos auxiliares para el sistema CRUD

  // Formatear fecha
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Obtener color del estado
  getStatusColor(status) {
    const colors = {
      'Activo': 'linear-gradient(135deg, #27ae60, #2ecc71)',
      'Inactivo': 'linear-gradient(135deg, #e74c3c, #c0392b)',
      'Pendiente': 'linear-gradient(135deg, #f39c12, #e67e22)',
      'Procesando': 'linear-gradient(135deg, #3498db, #2980b9)',
      'Cerrada': 'linear-gradient(135deg, #95a5a6, #7f8c8d)',
      'Aprobada': 'linear-gradient(135deg, #27ae60, #2ecc71)',
      'Reestructuración': 'linear-gradient(135deg, #9b59b6, #8e44ad)',
      'Especial': 'linear-gradient(135deg, #e74c3c, #c0392b)'
    };
    return colors[status] || 'linear-gradient(135deg, #95a5a6, #7f8c8d)';
  },

  // Obtener color de texto del estado
  getStatusTextColor(status) {
    return '#ffffff';
  },

  // Obtener icono del estado
  getStatusIcon(status) {
    const icons = {
      'Activo': '✅',
      'Inactivo': '❌',
      'Pendiente': '⏳',
      'Procesando': '⚙️',
      'Cerrada': '🔒',
      'Aprobada': '✅',
      'Reestructuración': '🔄',
      'Especial': '⭐'
    };
    return icons[status] || '📋';
  },

  // Generar historial de cambios simulado
  generateChangeHistory(tableName, recordId) {
    const changes = [
      { date: '2025-01-15', user: 'María González', action: 'Creación de registro', details: 'Registro inicial creado' },
      { date: '2025-01-10', user: 'Carlos Ruíz', action: 'Actualización', details: 'Modificación de estado a Activo' },
      { date: '2024-12-20', user: 'Ana López', action: 'Validación', details: 'Datos verificados y aprobados' },
      { date: '2024-12-15', user: 'Sistema', action: 'Importación', details: 'Datos importados desde Excel' }
    ];

    return changes.map(change => `
      <div class="history-item">
        <div class="history-header">
          <span class="history-date">📅 ${this.formatDate(change.date)}</span>
          <span class="history-user">👤 ${change.user}</span>
        </div>
        <div class="history-content">
          <strong>${change.action}:</strong> ${change.details}
        </div>
      </div>
    `).join('');
  },

  restartServices() {
    Modal.confirm({
      title: '🔄 Reiniciar Servicios',
      message: '¿Está seguro de que desea reiniciar los servicios del sistema? Esto puede afectar temporalmente a los usuarios conectados.',
      onConfirm: () => {
        Utils.toast.warning('🔄 Reiniciando servicios del sistema...');
        setTimeout(() => {
          Utils.toast.success('✅ Servicios reiniciados correctamente');
        }, 3000);
      }
    });
  },

  // CSS para los modales CRUD
  getModalStyles() {
    return `
      <style>
        .edit-form-group {
          margin-bottom: 20px;
        }
        
        .edit-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #2c3e50;
          font-size: 14px;
        }
        
        .edit-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: #ffffff;
        }
        
        .edit-input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .view-field {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f8f9fa;
        }
        
        .view-field:last-child {
          border-bottom: none;
        }
        
        .view-label {
          font-weight: 600;
          color: #2c3e50;
          flex: 0 0 40%;
        }
        
        .view-value {
          flex: 1;
          text-align: right;
          color: #34495e;
        }
        
        .status-indicator {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        
        .system-info {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }
        
        .system-info h4 {
          margin: 0 0 16px 0;
          color: #2c3e50;
          font-size: 16px;
        }
        
        .history-item {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
        }
        
        .history-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .history-content {
          color: #2c3e50;
          font-size: 14px;
        }
        
        .import-upload-area {
          border: 3px dashed #bdc3c7;
          border-radius: 12px;
          padding: 40px 20px;
          text-align: center;
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .import-upload-area:hover {
          border-color: #3498db;
          background: linear-gradient(135deg, #ebf3fd, #f8f9fa);
        }
        
        .import-format-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          margin: 20px 0;
        }
        
        .format-option {
          padding: 16px 12px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #ffffff;
        }
        
        .format-option:hover {
          border-color: #3498db;
          background: linear-gradient(135deg, #ebf3fd, #ffffff);
        }
        
        .format-option.selected {
          border-color: #27ae60;
          background: linear-gradient(135deg, #d5f4e6, #ffffff);
        }
        
        .import-options {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 12px;
          padding: 20px;
          margin-top: 20px;
        }
        
        .import-option {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .import-option input[type="checkbox"] {
          margin-right: 12px;
          transform: scale(1.2);
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }
        
        .btn-save {
          background: linear-gradient(135deg, #27ae60, #2ecc71);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
        }
        
        .btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(39, 174, 96, 0.3);
        }
        
        .btn-cancel {
          background: linear-gradient(135deg, #95a5a6, #7f8c8d);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
        }
        
        .btn-cancel:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(149, 165, 166, 0.3);
        }
        
        .btn-import {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
        }
        
        .btn-import:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
        }
      </style>
    `;
  }
};

// Exportar para uso global
window.Maintenance = Maintenance;

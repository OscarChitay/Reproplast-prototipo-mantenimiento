/* ================================================
   MÓDULO DASHBOARD - REPROPLAST HR SYSTEM
   ================================================ */

const Dashboard = {
  // Datos de ejemplo
  data: {
    stats: {
      totalEmployees: 247,
      activeVacations: 12,
      pendingAdvances: 8,
      systemHealth: 98
    },
    recentActivity: [
      {
        id: 1,
        type: 'vacation',
        message: 'Juan Pérez solicitó vacaciones',
        time: '2 horas',
        status: 'pending'
      },
      {
        id: 2,
        type: 'advance',
        message: 'María González - anticipo aprobado',
        time: '4 horas',
        status: 'approved'
      },
      {
        id: 3,
        type: 'employee',
        message: 'Nuevo empleado: Carlos Ruiz',
        time: '6 horas',
        status: 'success'
      }
    ]
  },

  // Renderizar módulo
  render(container) {
    container.innerHTML = `
            <div class="dashboard-container">
                
                <!-- Estadísticas principales -->
                <div class="dashboard-grid mb-5">
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Total Empleados</h3>
                            <span class="widget-icon">👥</span>
                        </div>
                        <div class="widget-value">${this.data.stats.totalEmployees}</div>
                        <div class="widget-description">Empleados activos en el sistema</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Vacaciones Activas</h3>
                            <span class="widget-icon">🏖️</span>
                        </div>
                        <div class="widget-value">${this.data.stats.activeVacations}</div>
                        <div class="widget-description">Empleados actualmente de vacaciones</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Anticipos Pendientes</h3>
                            <span class="widget-icon">💰</span>
                        </div>
                        <div class="widget-value">${this.data.stats.pendingAdvances}</div>
                        <div class="widget-description">Solicitudes por aprobar</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Salud del Sistema</h3>
                            <span class="widget-icon">⚡</span>
                        </div>
                        <div class="widget-value">${this.data.stats.systemHealth}%</div>
                        <div class="widget-description">Rendimiento general</div>
                    </div>
                </div>

                <!-- Actividad reciente y accesos rápidos -->
                <div class="grid grid-2 gap-4">
                    
                    <!-- Actividad reciente -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">📋 Actividad Reciente</h3>
                            <p class="card-subtitle">Últimas acciones en el sistema</p>
                        </div>
                        <div class="card-body">
                            <div id="recentActivity">
                                ${this.renderRecentActivity()}
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline btn-sm" onclick="Dashboard.viewAllActivity()">
                                Ver toda la actividad
                            </button>
                        </div>
                    </div>

                    <!-- Accesos rápidos -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">🚀 Accesos Rápidos</h3>
                            <p class="card-subtitle">Acciones más utilizadas</p>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-2 gap-3">
                                <button class="btn btn-primary" onclick="App.loadModule('employees')">
                                    👥 Gestión de Empleados
                                </button>
                                <button class="btn btn-success" onclick="App.loadModule('vacations')">
                                    🏖️ Nueva Solicitud de Vacaciones
                                </button>
                                <button class="btn btn-warning" onclick="App.loadModule('advances')">
                                    💰 Procesar Anticipo
                                </button>
                                <button class="btn btn-secondary" onclick="Dashboard.generateReport()">
                                    📊 Generar Reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Gráficos y estadísticas -->
                <div class="card mt-4">
                    <div class="card-header">
                        <h3 class="card-title">📈 Estadísticas del Mes</h3>
                        <p class="card-subtitle">Resumen de actividad mensual</p>
                    </div>
                    <div class="card-body">
                        <div class="grid grid-3 gap-4">
                            <div class="text-center p-4">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">🆕</div>
                                <h4 style="color: var(--success-color); margin-bottom: 0.5rem;">15</h4>
                                <p style="color: var(--text-secondary); margin: 0;">Nuevos Empleados</p>
                            </div>
                            <div class="text-center p-4">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">📅</div>
                                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">42</h4>
                                <p style="color: var(--text-secondary); margin: 0;">Días de Vacaciones</p>
                            </div>
                            <div class="text-center p-4">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">💸</div>
                                <h4 style="color: var(--warning-color); margin-bottom: 0.5rem;">$12,500</h4>
                                <p style="color: var(--text-secondary); margin: 0;">Anticipos Otorgados</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        `;

    // Configurar actualizaciones automáticas
    this.setupAutoRefresh();
  },

  // Renderizar actividad reciente
  renderRecentActivity() {
    return this.data.recentActivity.map(activity => {
      const statusColors = {
        pending: 'warning',
        approved: 'success',
        success: 'primary'
      };

      const statusIcons = {
        pending: '⏳',
        approved: '✅',
        success: '🎉'
      };

      return `
                <div style="
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    border-left: 3px solid var(--${statusColors[activity.status]}-color);
                    background: rgba(var(--${statusColors[activity.status]}-color), 0.05);
                    border-radius: 0 8px 8px 0;
                    margin-bottom: 0.75rem;
                ">
                    <span style="font-size: 1.5rem; margin-right: 1rem;">${statusIcons[activity.status]}</span>
                    <div style="flex: 1;">
                        <p style="margin: 0 0 0.25rem 0; font-weight: 500; color: var(--text-primary);">
                            ${activity.message}
                        </p>
                        <small style="color: var(--text-secondary);">Hace ${activity.time}</small>
                    </div>
                </div>
            `;
    }).join('');
  },

  // Configurar actualización automática
  setupAutoRefresh() {
    // Actualizar cada 30 segundos
    setInterval(() => {
      this.updateStats();
    }, 30000);
  },

  // Actualizar estadísticas
  updateStats() {
    // Simular actualización de datos
    this.data.stats.systemHealth = Math.floor(Math.random() * 5) + 95;

    // Actualizar en la interfaz
    const healthElement = document.querySelector('.widget-value');
    if (healthElement) {
      healthElement.textContent = this.data.stats.systemHealth + '%';
    }
  },

  // Ver toda la actividad
  viewAllActivity() {
    Modal.show({
      title: '📋 Actividad Completa del Sistema',
      content: `
                <div style="padding: 20px;">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="🔍 Buscar actividad..." id="activitySearch">
                    </div>
                    <div style="max-height: 400px; overflow-y: auto;">
                        ${this.renderExtendedActivity()}
                    </div>
                </div>
            `,
      size: 'lg'
    });
  },

  // Renderizar actividad extendida
  renderExtendedActivity() {
    const extendedActivity = [
      ...this.data.recentActivity,
      {
        id: 4,
        type: 'system',
        message: 'Respaldo automático completado',
        time: '8 horas',
        status: 'success'
      },
      {
        id: 5,
        type: 'vacation',
        message: 'Ana Martínez finalizó vacaciones',
        time: '1 día',
        status: 'success'
      },
      {
        id: 6,
        type: 'advance',
        message: 'Roberto Silva - anticipo rechazado',
        time: '2 días',
        status: 'rejected'
      }
    ];

    return extendedActivity.map(activity => `
            <div class="d-flex align-center p-3 mb-2" style="background: var(--bg-secondary); border-radius: 8px;">
                <div style="margin-right: 1rem;">
                    ${this.getActivityIcon(activity.type)}
                </div>
                <div style="flex: 1;">
                    <p style="margin: 0; font-weight: 500;">${activity.message}</p>
                    <small style="color: var(--text-secondary);">Hace ${activity.time}</small>
                </div>
                <span class="badge badge-${this.getStatusColor(activity.status)}">
                    ${activity.status}
                </span>
            </div>
        `).join('');
  },

  // Obtener icono de actividad
  getActivityIcon(type) {
    const icons = {
      vacation: '🏖️',
      advance: '💰',
      employee: '👤',
      system: '⚙️'
    };
    return icons[type] || '📋';
  },

  // Obtener color de estado
  getStatusColor(status) {
    const colors = {
      pending: 'warning',
      approved: 'success',
      success: 'primary',
      rejected: 'danger'
    };
    return colors[status] || 'secondary';
  },

  // Generar reporte
  generateReport() {
    Modal.loading('Generando reporte del dashboard...');

    setTimeout(() => {
      Modal.hide();
      Modal.success('Reporte generado exitosamente. Se ha descargado automáticamente.');
    }, 2000);
  }
};

// Exportar para uso global
window.Dashboard = Dashboard;

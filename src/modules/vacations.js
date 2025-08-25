/* ================================================
   MÓDULO DE VACACIONES - REPROPLAST HR SYSTEM
   ================================================ */

const Vacations = {
  data: {
    requests: [
      {
        id: 1,
        employeeName: 'Juan Pérez',
        startDate: '2025-09-15',
        endDate: '2025-09-25',
        days: 10,
        status: 'pending',
        reason: 'Vacaciones familiares'
      },
      {
        id: 2,
        employeeName: 'María González',
        startDate: '2025-08-01',
        endDate: '2025-08-15',
        days: 14,
        status: 'approved',
        reason: 'Vacaciones anuales'
      }
    ]
  },

  render(container) {
    container.innerHTML = `
            <div class="vacations-container">
                <div class="d-flex justify-between align-center mb-4">
                    <div>
                        <h2 style="margin: 0;">🏖️ Gestión de Vacaciones</h2>
                        <p style="margin: 0; color: var(--text-secondary);">Solicitudes y calendario de vacaciones</p>
                    </div>
                    <button class="btn btn-primary" onclick="Vacations.newRequest()">
                        ➕ Nueva Solicitud
                    </button>
                </div>

                <div class="grid grid-2 gap-4 mb-4">
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Solicitudes Pendientes</h3>
                            <span class="widget-icon">⏳</span>
                        </div>
                        <div class="widget-value">${this.getPendingCount()}</div>
                        <div class="widget-description">Requieren aprobación</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Empleados de Vacaciones</h3>
                            <span class="widget-icon">🏖️</span>
                        </div>
                        <div class="widget-value">${this.getActiveCount()}</div>
                        <div class="widget-description">Actualmente ausentes</div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Solicitudes de Vacaciones</h3>
                    </div>
                    <div class="card-body">
                        <div class="d-flex gap-4 flex-wrap">
                            ${this.renderVacationCards()}
                        </div>
                    </div>
                </div>
            </div>
        `;
  },

  renderVacationCards() {
    return this.data.requests.map(request => `
            <div class="vacation-card" style="min-width: 300px; flex: 1;">
                <div class="vacation-header">
                    <h4 class="vacation-title">${request.employeeName}</h4>
                    <span class="vacation-status ${request.status}">
                        ${this.getStatusLabel(request.status)}
                    </span>
                </div>
                <div class="vacation-dates">
                    <div class="vacation-date">
                        <span>Inicio</span>
                        <strong>${Utils.formatDateShort(request.startDate)}</strong>
                    </div>
                    <div class="vacation-date">
                        <span>Fin</span>
                        <strong>${Utils.formatDateShort(request.endDate)}</strong>
                    </div>
                    <div class="vacation-date">
                        <span>Días</span>
                        <strong>${request.days}</strong>
                    </div>
                </div>
                <p style="margin: 0; opacity: 0.9;">${request.reason}</p>
                
                <div class="d-flex gap-2 mt-3" style="justify-content: flex-end;">
                    ${request.status === 'pending' ? `
                        <button class="btn btn-sm btn-success" onclick="Vacations.approveRequest(${request.id})">✅ Aprobar</button>
                        <button class="btn btn-sm btn-danger" onclick="Vacations.rejectRequest(${request.id})">❌ Rechazar</button>
                    ` : ''}
                    <button class="btn btn-sm btn-secondary" onclick="Vacations.viewDetails(${request.id})">👁️ Ver</button>
                </div>
            </div>
        `).join('');
  },

  getPendingCount() {
    return this.data.requests.filter(r => r.status === 'pending').length;
  },

  getActiveCount() {
    // Simulado - empleados actualmente de vacaciones
    return 5;
  },

  getStatusLabel(status) {
    const labels = {
      pending: 'Pendiente',
      approved: 'Aprobado',
      rejected: 'Rechazado'
    };
    return labels[status] || status;
  },

  newRequest() {
    Utils.toast.info('Función: Nueva solicitud de vacaciones');
  },

  approveRequest(id) {
    Utils.toast.success(`Solicitud ${id} aprobada`);
  },

  rejectRequest(id) {
    Utils.toast.error(`Solicitud ${id} rechazada`);
  },

  viewDetails(id) {
    Utils.toast.info(`Ver detalles de solicitud ${id}`);
  }
};

window.Vacations = Vacations;

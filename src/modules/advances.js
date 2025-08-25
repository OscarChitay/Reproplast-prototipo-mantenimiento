/* ================================================
   MÓDULO DE ANTICIPOS - REPROPLAST HR SYSTEM
   ================================================ */

const Advances = {
  data: {
    advances: [
      {
        id: 1,
        employeeName: 'Roberto Silva',
        amount: 500,
        requestDate: '2025-08-20',
        status: 'pending',
        reason: 'Gastos médicos familiares'
      },
      {
        id: 2,
        employeeName: 'Ana Martínez',
        amount: 750,
        requestDate: '2025-08-18',
        status: 'approved',
        reason: 'Reparación de vehículo'
      },
      {
        id: 3,
        employeeName: 'Carlos Ruiz',
        amount: 300,
        requestDate: '2025-08-15',
        status: 'rejected',
        reason: 'Gastos personales'
      }
    ]
  },

  render(container) {
    container.innerHTML = `
            <div class="advances-container">
                <div class="d-flex justify-between align-center mb-4">
                    <div>
                        <h2 style="margin: 0;">💰 Gestión de Anticipos</h2>
                        <p style="margin: 0; color: var(--text-secondary);">Solicitudes y control de anticipos de nómina</p>
                    </div>
                    <button class="btn btn-primary" onclick="Advances.newAdvance()">
                        ➕ Nuevo Anticipo
                    </button>
                </div>

                <div class="grid grid-3 gap-4 mb-4">
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Total Pendiente</h3>
                            <span class="widget-icon">⏳</span>
                        </div>
                        <div class="widget-value">${Utils.formatCurrency(this.getTotalPending())}</div>
                        <div class="widget-description">Solicitudes por aprobar</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Total Aprobado</h3>
                            <span class="widget-icon">✅</span>
                        </div>
                        <div class="widget-value">${Utils.formatCurrency(this.getTotalApproved())}</div>
                        <div class="widget-description">Este mes</div>
                    </div>
                    
                    <div class="widget">
                        <div class="widget-header">
                            <h3 class="widget-title">Solicitudes</h3>
                            <span class="widget-icon">📋</span>
                        </div>
                        <div class="widget-value">${this.data.advances.length}</div>
                        <div class="widget-description">Total de solicitudes</div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Solicitudes de Anticipos</h3>
                    </div>
                    <div class="card-body">
                        <div class="d-flex gap-4 flex-wrap">
                            ${this.renderAdvanceCards()}
                        </div>
                    </div>
                </div>
            </div>
        `;
  },

  renderAdvanceCards() {
    return this.data.advances.map(advance => `
            <div class="advance-card" style="min-width: 300px; flex: 1;">
                <div class="d-flex justify-between align-center mb-3">
                    <h4 style="margin: 0; color: var(--text-primary);">${advance.employeeName}</h4>
                    <span class="advance-status ${advance.status}">
                        ${this.getStatusIcon(advance.status)} ${this.getStatusLabel(advance.status)}
                    </span>
                </div>
                
                <div class="advance-amount">${Utils.formatCurrency(advance.amount)}</div>
                
                <p style="margin: 0 0 15px 0; color: var(--text-secondary); font-size: 0.875rem;">
                    ${advance.reason}
                </p>
                
                <div style="margin-bottom: 15px; font-size: 0.875rem; color: var(--text-secondary);">
                    Solicitado: ${Utils.formatDateShort(advance.requestDate)}
                </div>
                
                <div class="d-flex gap-2" style="justify-content: flex-end;">
                    ${advance.status === 'pending' ? `
                        <button class="btn btn-sm btn-success" onclick="Advances.approveAdvance(${advance.id})">✅ Aprobar</button>
                        <button class="btn btn-sm btn-danger" onclick="Advances.rejectAdvance(${advance.id})">❌ Rechazar</button>
                    ` : ''}
                    <button class="btn btn-sm btn-secondary" onclick="Advances.viewDetails(${advance.id})">👁️ Ver</button>
                </div>
            </div>
        `).join('');
  },

  getTotalPending() {
    return this.data.advances
      .filter(a => a.status === 'pending')
      .reduce((total, a) => total + a.amount, 0);
  },

  getTotalApproved() {
    return this.data.advances
      .filter(a => a.status === 'approved')
      .reduce((total, a) => total + a.amount, 0);
  },

  getStatusLabel(status) {
    const labels = {
      pending: 'Pendiente',
      approved: 'Aprobado',
      rejected: 'Rechazado'
    };
    return labels[status] || status;
  },

  getStatusIcon(status) {
    const icons = {
      pending: '⏳',
      approved: '✅',
      rejected: '❌'
    };
    return icons[status] || '📋';
  },

  newAdvance() {
    Utils.toast.info('Función: Nueva solicitud de anticipo');
  },

  approveAdvance(id) {
    Utils.toast.success(`Anticipo ${id} aprobado`);
  },

  rejectAdvance(id) {
    Utils.toast.error(`Anticipo ${id} rechazado`);
  },

  viewDetails(id) {
    Utils.toast.info(`Ver detalles del anticipo ${id}`);
  }
};

window.Advances = Advances;

/* ================================================
   MÓDULO DE EMPLEADOS - REPROPLAST HR SYSTEM
   ================================================ */

const Employees = {
  data: {
    employees: [
      {
        id: 1,
        name: 'Juan Carlos Pérez',
        position: 'Operario de Producción',
        department: 'Producción',
        email: 'juan.perez@reproplast.com',
        phone: '+1-234-567-8901',
        status: 'active',
        startDate: '2023-01-15'
      },
      {
        id: 2,
        name: 'María Elena González',
        position: 'Secretaria Administrativa',
        department: 'Administración',
        email: 'maria.gonzalez@reproplast.com',
        phone: '+1-234-567-8902',
        status: 'active',
        startDate: '2022-11-20'
      }
    ]
  },

  render(container) {
    container.innerHTML = `
            <div class="employees-container">
                <div class="d-flex justify-between align-center mb-4">
                    <div>
                        <h2 style="margin: 0;">👥 Gestión de Empleados</h2>
                        <p style="margin: 0; color: var(--text-secondary);">Administrar información del personal</p>
                    </div>
                    <button class="btn btn-primary" onclick="Employees.addEmployee()">
                        ➕ Nuevo Empleado
                    </button>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-between align-center">
                            <h3 class="card-title">Lista de Empleados</h3>
                            <input type="text" class="form-control" placeholder="🔍 Buscar empleado..." style="max-width: 300px;">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-container">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Empleado</th>
                                        <th>Puesto</th>
                                        <th>Departamento</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${this.renderEmployeeRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },

  renderEmployeeRows() {
    return this.data.employees.map(employee => `
            <tr>
                <td>
                    <div class="d-flex align-center gap-3">
                        <div class="employee-avatar">${employee.name.charAt(0)}</div>
                        <div>
                            <div style="font-weight: 600;">${employee.name}</div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">${employee.email}</div>
                        </div>
                    </div>
                </td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <td>
                    <span class="badge badge-${employee.status === 'active' ? 'success' : 'secondary'}">
                        ${employee.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                </td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-primary" onclick="Employees.editEmployee(${employee.id})">✏️</button>
                        <button class="btn btn-sm btn-secondary" onclick="Employees.viewEmployee(${employee.id})">👁️</button>
                    </div>
                </td>
            </tr>
        `).join('');
  },

  addEmployee() {
    Utils.toast.info('Función: Agregar nuevo empleado');
  },

  editEmployee(id) {
    Utils.toast.info(`Función: Editar empleado ${id}`);
  },

  viewEmployee(id) {
    Utils.toast.info(`Función: Ver detalles del empleado ${id}`);
  }
};

window.Employees = Employees;

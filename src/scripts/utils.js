/* ================================================
   UTILIDADES GENERALES - REPROPLAST HR SYSTEM
   ================================================ */

const Utils = {
  // Formateo de fechas
  formatDate(date, options = {}) {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const formatOptions = { ...defaultOptions, ...options };
    return new Date(date).toLocaleDateString('es-ES', formatOptions);
  },

  // Formateo de fecha corta
  formatDateShort(date) {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  },

  // Formateo de moneda
  formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },

  // Formateo de números
  formatNumber(number, decimals = 0) {
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(number);
  },

  // Generar ID único
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  // Validaciones
  validate: {
    // Validar email
    email(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },

    // Validar teléfono
    phone(phone) {
      const regex = /^[\+]?[\d\s\-\(\)]{8,15}$/;
      return regex.test(phone);
    },

    // Validar rango de fechas
    dateRange(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return start <= end;
    },

    // Validar campos requeridos
    required(value) {
      return value !== null && value !== undefined && value.toString().trim() !== '';
    },

    // Validar longitud mínima
    minLength(value, min) {
      return value && value.toString().length >= min;
    },

    // Validar longitud máxima
    maxLength(value, max) {
      return value && value.toString().length <= max;
    }
  },

  // Manipulación de DOM
  dom: {
    // Crear elemento con atributos
    createElement(tag, attributes = {}, content = '') {
      const element = document.createElement(tag);

      Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
          element.className = value;
        } else if (key === 'innerHTML') {
          element.innerHTML = value;
        } else {
          element.setAttribute(key, value);
        }
      });

      if (content) {
        element.innerHTML = content;
      }

      return element;
    },

    // Agregar clase con animación
    addClassWithAnimation(element, className, duration = 300) {
      element.classList.add(className);
      setTimeout(() => {
        element.style.transition = `all ${duration}ms ease`;
      }, 10);
    },

    // Remover elemento con animación
    removeWithAnimation(element, duration = 300) {
      element.style.transition = `all ${duration}ms ease`;
      element.style.opacity = '0';
      element.style.transform = 'scale(0.8)';

      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, duration);
    }
  },

  // Utilidades de datos
  data: {
    // Buscar en array de objetos
    search(array, query, fields = []) {
      if (!query) return array;

      const lowerQuery = query.toLowerCase();

      return array.filter(item => {
        if (fields.length === 0) {
          // Buscar en todas las propiedades
          return Object.values(item).some(value =>
            value && value.toString().toLowerCase().includes(lowerQuery)
          );
        } else {
          // Buscar en campos específicos
          return fields.some(field =>
            item[field] && item[field].toString().toLowerCase().includes(lowerQuery)
          );
        }
      });
    },

    // Ordenar array de objetos
    sort(array, field, direction = 'asc') {
      return [...array].sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];

        if (direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    },

    // Filtrar array de objetos
    filter(array, filters) {
      return array.filter(item => {
        return Object.entries(filters).every(([key, value]) => {
          if (!value) return true;
          return item[key] && item[key].toString().toLowerCase().includes(value.toLowerCase());
        });
      });
    },

    // Paginar array
    paginate(array, page = 1, perPage = 10) {
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      return {
        data: array.slice(startIndex, endIndex),
        pagination: {
          currentPage: page,
          perPage: perPage,
          totalItems: array.length,
          totalPages: Math.ceil(array.length / perPage),
          hasNext: endIndex < array.length,
          hasPrev: page > 1
        }
      };
    }
  },

  // Utilidades de almacenamiento
  storage: {
    // Guardar en localStorage
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error guardando en localStorage:', error);
        return false;
      }
    },

    // Obtener de localStorage
    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error obteniendo de localStorage:', error);
        return defaultValue;
      }
    },

    // Remover de localStorage
    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removiendo de localStorage:', error);
        return false;
      }
    },

    // Limpiar localStorage
    clear() {
      try {
        localStorage.clear();
        return true;
      } catch (error) {
        console.error('Error limpiando localStorage:', error);
        return false;
      }
    }
  },

  // Utilidades de red
  http: {
    // GET request
    async get(url, options = {}) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          ...options
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error en GET request:', error);
        throw error;
      }
    },

    // POST request
    async post(url, data = {}, options = {}) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          body: JSON.stringify(data),
          ...options
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error en POST request:', error);
        throw error;
      }
    },

    // PUT request
    async put(url, data = {}, options = {}) {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          body: JSON.stringify(data),
          ...options
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error en PUT request:', error);
        throw error;
      }
    },

    // DELETE request
    async delete(url, options = {}) {
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          ...options
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error en DELETE request:', error);
        throw error;
      }
    }
  },

  // Notificaciones toast
  toast: {
    show(message, type = 'info', duration = 3000) {
      const toast = document.createElement('div');
      const id = Utils.generateId();

      // Colores por tipo
      const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
      };

      // Iconos por tipo
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      };

      toast.id = id;
      toast.innerHTML = `
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: white;
                    color: #2c3e50;
                    padding: 16px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    border-left: 4px solid ${colors[type]};
                    min-width: 300px;
                    max-width: 400px;
                    margin-bottom: 10px;
                    animation: slideInRight 0.3s ease;
                ">
                    <span style="font-size: 18px;">${icons[type]}</span>
                    <span style="flex: 1; font-weight: 500;">${message}</span>
                    <button onclick="Utils.toast.hide('${id}')" style="
                        background: none;
                        border: none;
                        color: #7f8c8d;
                        cursor: pointer;
                        font-size: 16px;
                        padding: 0;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">✕</button>
                </div>
            `;

      // Contenedor de toasts
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10001;
                `;
        document.body.appendChild(container);
      }

      container.appendChild(toast);

      // Auto-hide
      if (duration > 0) {
        setTimeout(() => {
          this.hide(id);
        }, duration);
      }

      return id;
    },

    hide(id) {
      const toast = document.getElementById(id);
      if (toast) {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 300);
      }
    },

    success(message, duration) {
      return this.show(message, 'success', duration);
    },

    error(message, duration) {
      return this.show(message, 'error', duration);
    },

    warning(message, duration) {
      return this.show(message, 'warning', duration);
    },

    info(message, duration) {
      return this.show(message, 'info', duration);
    }
  },

  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// CSS para animaciones de toast
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyles);

// Exportar para uso global
window.Utils = Utils;

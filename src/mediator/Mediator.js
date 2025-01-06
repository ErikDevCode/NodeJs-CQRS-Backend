 
class Mediator {
    constructor() {
      this.handlers = new Map(); // Mapa para registrar handlers
    }
  
    /**
     * Registra un handler para un comando o query específico.
     * @param {string} key - El nombre del comando o query.
     * @param {object} handler - El handler que procesará el comando o query.
     */
    register(key, handler) {
      if (this.handlers.has(key)) {
        throw new Error(`Handler already registered for ${key}`);
      }
      this.handlers.set(key, handler);
    }
  
    /**
     * Enruta el comando o query al handler correspondiente.
     * @param {object} request - La consulta o comando.
     * @returns {Promise<any>} - La respuesta del handler.
     */
    async send(request) {
      const key = request.constructor.name; // Nombre de la clase del comando/query
      const handler = this.handlers.get(key);
  
      if (!handler) {
        throw new Error(`No handler found for ${key}`);
      }
  
      return await handler.handle(request);
    }
  }
  
  module.exports = new Mediator();
  
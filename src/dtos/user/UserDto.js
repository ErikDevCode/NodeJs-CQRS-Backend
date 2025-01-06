class UserDto {
  constructor(user) {
    this.userId = user.userId;
    this.cediId = user.cediId;
    this.zoneId = user.zoneId;
    this.route = user.route;
    this.code = user.code;
    this.positionId = user.positionId;
    this.documentNumber = user.documentNumber;
    this.paternalSurName = user.paternalSurName;
    this.maternalSurName = user.maternalSurName;
    this.names = user.names;
    this.email = user.email;
    this.phone = user.phone;
    this.isActive = user.isActive;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.createdBy = user.createdBy;
    this.updatedBy = user.updatedBy;
  }

  static getSchema() {
    return {
      type: 'object',
      properties: {
        userId: { type: 'integer', description: 'ID único del usuario' },
        cediId: { type: 'integer', nullable: true, description: 'ID del CEDI asociado' },
        zoneId: { type: 'integer', nullable: true, description: 'ID de la zona' },
        route: { type: 'integer', nullable: true, description: 'Número de ruta' },
        code: { type: 'integer', nullable: true, description: 'Código del usuario' },
        positionId: { type: 'integer', description: 'ID de la posición' },
        documentNumber: { type: 'string', nullable: true, description: 'Número de documento del usuario' },
        paternalSurName: { type: 'string', nullable: true, description: 'Apellido paterno del usuario' },
        maternalSurName: { type: 'string', nullable: true, description: 'Apellido materno del usuario' },
        names: { type: 'string', nullable: true, description: 'Nombres del usuario' },
        email: { type: 'string', format: 'email', nullable: true, description: 'Correo electrónico del usuario' },
        phone: { type: 'string', nullable: true, description: 'Número de teléfono del usuario' },
        isActive: { type: 'boolean', description: 'Estado del usuario', default: true },
        createdAt: { type: 'string', format: 'date-time', description: 'Fecha de creación' },
        updatedAt: { type: 'string', format: 'date-time', description: 'Fecha de última actualización' },
        createdBy: { type: 'integer', nullable: true, description: 'ID del usuario que creó este registro' },
        updatedBy: { type: 'integer', nullable: true, description: 'ID del usuario que actualizó este registro' },
      },
    };
  }
}

module.exports = UserDto;

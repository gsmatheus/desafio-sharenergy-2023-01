export enum EException {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  CONFLICT = 'CONFLICT',
}

export class IExceptionNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundException';
  }

  code_error = EException.NOT_FOUND;
  status = 404;
}

export class IExceptionUnauthorized extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }

  code_error = EException.UNAUTHORIZED;
  status = 401;
}

export class IExceptionForbidden extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ForbiddenException';
  }

  code_error = EException.FORBIDDEN;
  status = 403;
}

export class IExceptionUnprocessableEntity extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnprocessableEntityException';
  }

  code_error = EException.UNPROCESSABLE_ENTITY;
  status = 422;
}

export class IExceptionConflict extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictException';
  }

  code_error = EException.CONFLICT;
  status = 409;
}

import AppError from "./BaseError";
import ErrorConstants from "./ErrorConstants";

export class BadRequestException extends AppError {
  constructor() {
    super(404, ErrorConstants.BAD_REQUEST_EXCEPTION);
  }
}

export class UnAuthorizedAccess extends AppError {
  constructor() {
    super(401, ErrorConstants.UNAUTHORIZED_ACCESS);
  }
}

export class InternalServerError extends AppError {
  constructor() {
    super(500, ErrorConstants.INTERNAL_SERVER_ERROR);
  }
}

export class NotFoundException extends AppError {
  constructor() {
    super(404, ErrorConstants.NOT_FOUND_EXCEPTION);
  }
}

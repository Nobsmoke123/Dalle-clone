import AppError from "./BaseError";
import ErrorConstants from "./ErrorConstants";

export class BadRequestException extends AppError {
  constructor(public message = ErrorConstants.BAD_REQUEST_EXCEPTION) {
    super(404, message);
  }
}

export class UnAuthorizedAccess extends AppError {
  constructor(public message = ErrorConstants.UNAUTHORIZED_ACCESS) {
    super(401, message);
  }
}

export class InternalServerError extends AppError {
  constructor(public message = ErrorConstants.INTERNAL_SERVER_ERROR) {
    super(500, message);
  }
}

export class NotFoundExceptionError extends AppError {
  constructor(public message = ErrorConstants.NOT_FOUND_EXCEPTION) {
    super(404, message);
  }
}

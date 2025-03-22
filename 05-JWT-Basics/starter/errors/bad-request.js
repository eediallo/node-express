import { CustomAPIError } from "./custom-error.js";
import statusCodes from "http-status-codes";

export class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.BAD_REQUEST;
  }
}

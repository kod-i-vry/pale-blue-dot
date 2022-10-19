import { ApiError } from "./api-error";

type ValidationErrorParam = {
  code: string;
  message: string;
}
export class ValidationError extends ApiError {
  constructor(param: ValidationErrorParam) {
    super({
      code: param.code,
      message: param.message,
      statusCode: 409
    })
  }
} 
import { ApiError } from "./api-error";

type LogicalErrorParam = {
  code: string;
  message: string;
}
export class LogicalError extends ApiError {
  constructor(param: LogicalErrorParam) {
    super({
      code: param.code,
      message: param.message,
      statusCode: 400
    })
  }
} 
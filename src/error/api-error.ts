type ApiErrorParameter = {
  code: string;
  message: string;
  statusCode: number;
}

export class ApiError extends Error {
  code: string;
  message: string;
  statusCode: number;

  constructor(param: ApiErrorParameter) {
    super(param.message);
    this.code = param.code;
    this.statusCode = param.statusCode;
  } 
}

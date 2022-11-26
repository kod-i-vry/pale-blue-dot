export interface ErrorFormat {
  message: string;
  code: string;
}

export default class CommonError {
  private message: string;
  private code: string;

  constructor(err: ErrorFormat) {
    this.message = err.message;
    this.code = err.code;
  }

  getMessage() {
    return this.message;
  }

  getCode() {
    return this.code;
  }

  toString() {
    return this.message;
  }
}

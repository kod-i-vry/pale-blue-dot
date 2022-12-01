import { CommonError, ErrorFormat } from './index';

export default class CommonApiError extends CommonError {
  private rawMessage?: string;
  private rawCode?: string;

  constructor(err: ErrorFormat, res?: any) {
    super(err);

    if (res && res.response && res.response.data) {
      this.rawMessage = res.response.data.message;
      this.rawCode = res.response.data.errorCode;
    }
  }

  getRawMessage() {
    return this.rawMessage;
  }

  getRawCode() {
    return this.rawCode;
  }
}

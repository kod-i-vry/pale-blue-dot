import { NextFunction, Request, Response } from 'express';

import { CommonError, CommonApiError } from '../error/index';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CommonApiError) {
    return res.status(400).send({
      success: false,
      err: {
        message: err.getMessage(),
        code: err.getCode(),
        rawMsessage: err.getRawMessage(),
        rawCode: err.getRawCode(),
      },
    });
  }

  if (err instanceof CommonError) {
    return res.status(400).send({
      success: false,
      err: {
        code: err.getCode(),
        message: err.getMessage(),
      },
    });
  }

  return res.status(500).send({
    err: { message: 'internal error', code: 'ERR-000' },
  });
};

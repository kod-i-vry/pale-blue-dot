import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

import { CommonApiError, CommonError } from '../error/index';
import { loggerUtils } from '../utils/index.mjs';
import { Result } from '../common/index.mjs';

const { logger } = loggerUtils;
const { ValidationError } = Joi;

export default (e: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(e, { req, res });

  const result = new Result(null, e, false);

  if (e instanceof ValidationError) {
    return res.status(400).json(result);
  }

  if (e instanceof CommonApiError) {
    return res.status(400).json(result);
  }

  if (e instanceof CommonError) {
    return res.status(400).json(result);
  }

  return res.status(500).json(result);
};

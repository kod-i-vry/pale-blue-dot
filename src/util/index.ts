import bcrypt from 'bcryptjs';
import env from 'env-var';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { LogicalError } from '../error';

const JWT_KEY = env.get('JWT_KEY').required().asString();

export const createHash = (pwd: string, saltRounds: number): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.hash(pwd, saltRounds, (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });

export const compareHash = (pwd: string, hashedPassword: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    bcrypt.compare(pwd, hashedPassword, (err, result) => {
      if (err) {
        return reject(new LogicalError({ code: 'COMPARE_FAILED', message: 'compare function error' }));
      }
      return resolve(result);
    });
  });

export const createAccessToken = (userEmail: string) => sign({ userEmail }, JWT_KEY, { expiresIn: '1h' });

export const wrapAsync = (func: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>): RequestHandler =>
  (req, res, next) => func(req, res, next).catch(next);

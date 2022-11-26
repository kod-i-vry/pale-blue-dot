import { validateOrReject } from 'class-validator';
import {
  ClassConstructor,
  plainToClass,
  plainToInstance,
} from 'class-transformer';
import { CommonError } from '../error/index';

export const validateRequestParam = async <T extends object>(
  cls: ClassConstructor<T>,
  object: any
) => {
  const param = plainToClass(cls, object);

  await validateOrReject(param).catch((e: Error) => {
    throw new CommonError({ message: e.toString(), code: 'Validation Failed' });
  });

  return param;
};

export const validateParams = async (
  model: { new (): any },
  params: Record<any, any>
): Promise<Record<string, any>> => {
  const target = plainToInstance(model, params);

  await validateOrReject(target).catch((error) => {
    const errorMessages = error.map((data: any) => {
      return Object.values(data.constraints).join();
    });
    throw new CommonError({ message: errorMessages.join(', '), code: '' });
  });

  return target;
};

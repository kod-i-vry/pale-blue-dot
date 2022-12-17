import { Router } from 'express';

import { AppDataSource } from '../../../database';
import { Tutor, Tutee } from '../../../entities';
import { compareHash, createHash, createAccessToken, wrapAsync } from '../../../util';
import { CommonError, CommonApiError, ErrorFormat } from '../../../error';
import { ApiError } from '../../../error/api-error';

const SALT_ROUNDS = 10;

const router = Router();
      
//signup router
router.post('/signup', wrapAsync(async (req, res, next) => {
  const {userEmail, userName, pwd, isTutor, tag, language1, language2, language3, comment, contents, startTime, endTime} = req.body;

  const existUser = await AppDataSource.getRepository(Tutee).findOne({
    where: {
      userEmail: userEmail
    }
  });

  if(existUser) {
    throw new ApiError({code: 'VALIDATION_FAILED', message: 'userEmail already exist', statusCode: 400});
  };

  const pwdValidation = /^(?=.*[A-Za-z])(?=.*[0-9])[a-zA-Z0-9!-_]{8,20}$/;

  if(!pwdValidation.test(pwd)) {
    throw new ApiError({code: 'VALIDATION_FAILED', message: 'invalid password', statusCode: 400});
  }

  const hashedPassword = await createHash( pwd, SALT_ROUNDS );

  if (isTutor === true) {
    const tutor = AppDataSource.getRepository(Tutor).create({
      userEmail: userEmail,
      userName: userName,
      pwd: hashedPassword,
      isTutor: isTutor,
      tag: tag,
      language1: language1,
      language2: language2,
      language3: language3,
      oneLineComment: comment,
      contents: contents,
      classStartTime: startTime,
      classEndTime: endTime
    });
  
    await AppDataSource.getRepository(Tutor).save(tutor);

    res.status(200).json({ msg : 'signup success!' });
  } 
  
  else if (isTutor === false) {
    const tutee = AppDataSource.getRepository(Tutee).create({
      userEmail: userEmail,
      userName: userName,
      pwd: hashedPassword,
      isTutor: isTutor,
      tag: tag,
      language1: language1,
      language2: language2,
      language3: language3,
      oneLineComment: comment,
      contents: contents,
      classStartTime: startTime,
      classEndTime: endTime
    });

    await AppDataSource.getRepository(Tutee).save(tutee);

    res.status(200).json({ msg : 'signup success!' });
  };
}));

//login router
router.post('/login', wrapAsync(async (req, res, next) => {
  const { userEmail, pwd } =req.body;
}))

export default router;

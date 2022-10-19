import { Router } from 'express';

import { AppDataSource } from '../../../database';
import { Tutee, Tutor } from '../../../entity';
import { compareHash, createHash, createAccessToken, wrapAsync } from '../../../util';
import { ApiError, ValidationError } from '../../../error';

const SALT_ROUNDS = 10;

const router = Router();

//signup
router.post('/signup', wrapAsync(async (req, res, next) => {
  const {userEmail, userName, pwd, isTutor, tag, language1, language2, language3, comment, contents, startTime, endTime} = req.body;

  const existUser = await AppDataSource.getRepository(Tutor && Tutee).findOne({
    where: {
      userEmail: userEmail
    }
  });

  if(existUser) {
    throw new ValidationError({code: 'VALIDATION_FAILED', message: 'userEmail already exist'});
  };

  const pwdValidation = /^(?=.*[A-Za-z])(?=.*[0-9])[a-zA-Z0-9!-_]{8,20}$/;

  if(!pwdValidation.test(pwd)) {
    ;throw new ValidationError({code: 'VALIDATION_FAILED', message: 'invalid password'});
  }

  const hashedPassword = await createHash( pwd, SALT_ROUNDS );

  if (isTutor === '1') {
    const tutor = AppDataSource.getRepository(Tutor).create({
      userEmail: userEmail,
      userName: userName,
      pwd: hashedPassword,
      isTutor: isTutor,
      tag: tag,
      language1: language1,
      language2: language2,
      language3: language3,
      comment: comment,
      contents: contents,
      startTime: startTime,
      endTime: endTime
    });
  
    await AppDataSource.getRepository(Tutor).save(tutor);

    res.status(200).json({ msg : 'signup success!'});
  } 
  
  else if (isTutor === '0') {
    const tutee = AppDataSource.getRepository(Tutee).create({
      userEmail: userEmail,
      userName: userName,
      pwd: hashedPassword,
      isTutor: isTutor,
      tag: tag,
      language1: language1,
      language2: language2,
      language3: language3,
      comment: comment,
      contents: contents,
      startTime: startTime,
      endTime: endTime
    });

    await AppDataSource.getRepository(Tutee).save(tutee);

    res.status(200).json({ msg : 'signup success!'});
  };
}));


export default router;
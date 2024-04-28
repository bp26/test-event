import { Request, Response, NextFunction } from 'express';
import { ResponceMessage, StatusCode } from '../enums/index.js';
import ApiError from '../utils/apiError.js';

export const isUserAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('session', req.session);
  console.log('sessionId', req.sessionID);
  console.log('unauth', req.isUnauthenticated());
  console.log('user', req.user);

  if (!req.isAuthenticated()) {
    throw new ApiError(StatusCode.UNAUTHORIZED, ResponceMessage.UNAUTHORIZED);
  }

  next();
};

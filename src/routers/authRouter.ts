import express from 'express';
import authController from '../controllers/authController.js';
import passport from 'passport';
import { isUserAuthenticated } from '../middleware/isUserAuthenticated.js';
import { CLIENT_BASE_URL } from '../constants/index.js';

const authRouter = express.Router();

authRouter.post('/register', authController.registerLocalUser);
authRouter.post(
  '/login',
  passport.authenticate('local'),
  authController.getAuthentificatedUser
);
authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { successRedirect: CLIENT_BASE_URL })
);
authRouter.get(
  '/user',
  isUserAuthenticated,
  authController.getAuthentificatedUser
);
authRouter.delete('/logout', isUserAuthenticated, authController.logout);
authRouter.get('/set', (req, res) => {
  res.cookie('test', 'dewdwedwed', {
    httpOnly: true,
    maxAge: 34560000,
    sameSite: 'none',
    secure: true,
  });
  res.sendStatus(200);
});
authRouter.get('/get', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

export default authRouter;

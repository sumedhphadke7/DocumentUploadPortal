import { Request, Response } from 'express';

export const register = (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Registration successful' });
};

export const login = (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Login successful' });
};
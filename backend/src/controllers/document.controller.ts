import { Request, Response } from 'express';

export const uploadDocument = async (_req: Request, res: Response) => {
    res.status(201).json({ message: 'Upload document endpoint' });
};

export const getDocument = async (_req: Request, res: Response) => {
    res.status(200).json({ message: 'List documents endpoint' });
};
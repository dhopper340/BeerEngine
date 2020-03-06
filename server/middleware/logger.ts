import { Request, Response } from 'express';

export const loggerMiddleware = (request: Request, response: Response, next: () => void) => {
    console.log('Request logged:', request.method, request.path);
    next();
};

import { Request, Response } from 'express';

export const loggerMiddleware = (request: Request, response: Response, next) => {
    console.log('Request logged:', request.method, request.path);
    next();
};

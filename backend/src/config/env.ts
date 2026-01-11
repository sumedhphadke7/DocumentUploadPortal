import dotenv from 'dotenv';
dotenv.config();

export const env = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI as string,
    JWT__SECRET: process.env.JWT_SECRET as string
};
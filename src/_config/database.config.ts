import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';

export const databaseSchema = {
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_USERNAME: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
};

export default registerAs('DATABASE_CONFIG', () => ({
  host: process.env.TYPEORM_HOST,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
}));

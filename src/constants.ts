import { config } from 'dotenv';
config();

export const NODE_ENV = process.env.NODE_ENV || 'development'

export const IS_PROD = NODE_ENV === 'production'

export const API_BASE_URL = process.env.API_BASE_URL || '/api/v1';

export const USERNAME_DB = process.env.USERNAME_DB

export const PASSWORD_DB = process.env.PASSWORD_DB

export const NAME_DB = process.env.NAME_DB

export const HOST_DB = process.env.HOST_DB || 'localhost'

export const PORT_DB = parseInt(process.env.PORT_DB as string) || 3306
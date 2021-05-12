import { createServer } from './app/http/app';
import { startConnexion } from './database/index';

startConnexion();
createServer();
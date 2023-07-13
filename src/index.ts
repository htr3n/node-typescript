import { sayHello } from './greeting';
import { logger } from './logging';

console.log(sayHello('NodeJS and TypeScript'));

logger.info(sayHello('NodeJS and TypeScript'));

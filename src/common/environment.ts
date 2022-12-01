import 'dotenv/config';
import env from 'env-var';

export const PORT = env.get('PORT').default(3000).asInt();

// Database
export const DB_HOST = env.get('DB_HOST').required().asString();
export const DB_PORT = env.get('DB_PORT').required().asInt();
export const DB_USER = env.get('DB_USER').required().asString();
export const DB_PASSWORD = env.get('DB_PASSWORD').required().asString();
export const DB_NAME = env.get('DB_NAME').required().asString();

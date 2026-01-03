import dotenv from 'dotenv';
import path from 'path';

// Load shared environment variables
// In Docker, these are passed as env vars, but for local dev we might need to load from file
// However, the task specified one shared .env file.
// We assume it's loaded by the process runner or docker.
// Fallback to loading from expected location if not present.

if (!process.env.SERVICE_NAME) {
    dotenv.config({ path: path.resolve(__dirname, '../../../../env/shared.env') });
}

export const config = {
    serviceName: process.env.SERVICE_NAME || 'user-service',
    port: parseInt(process.env.SERVICE_PORT || '4000', 10),
    mongoUri: process.env.MONGO_URI_USER_SERVICE || 'mongodb://localhost:27017/user-service',
    encryptionKey: process.env.ENCRYPTION_KEY || 'default-secret-key', // Example
};

import mongoose from 'mongoose';
import { config } from './env.config';

export class MongoConfig {
    static async connect(): Promise<void> {
        try {
            await mongoose.connect(config.mongoUri);
            console.log('\x1b[32m📦 Connected to MongoDB\x1b[0m');
        } catch (error) {
            console.error('❌ MongoDB connection error:', error);
            process.exit(1);
        }
    }
}

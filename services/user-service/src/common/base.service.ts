import { Model, Document } from 'mongoose';

export abstract class BaseService<T extends Document> {
    constructor(protected readonly model: Model<T>) { }

    async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async findById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async create(data: Partial<T>): Promise<T> {
        const created = new this.model(data);
        return created.save();
    }
}

import { injectable } from 'tsyringe';
import { BaseService } from '../../common/base.service';
import { UserModel, IUser } from './user.model';

@injectable()
export class UserService extends BaseService<IUser> {
    constructor() {
        super(UserModel);
    }

    // Add specific business logic here if needed
    async findByEmail(email: string): Promise<IUser | null> {
        return this.model.findOne({ email }).exec();
    }
}

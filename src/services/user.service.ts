import { AppDataSource } from "../database/DataSource";
import { User } from "../entites/User";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async createUser(user: User) {
        console.log('data', user);
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, user: User) {
        return await this.userRepository.update(id, user);
    }

    async deleteUser(id: number) {
        return await this.userRepository.delete(id);
    }
}
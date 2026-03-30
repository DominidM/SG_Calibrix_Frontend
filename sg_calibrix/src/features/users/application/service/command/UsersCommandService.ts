import { Users } from '../../../domain/entity/Users'
import { IUsersRepository } from '../../../domain/ports/out/IUsersRepository'
import { CreateUsersInput, UpdateUsersInput } from '../../../domain/ports/in/IUsersUseCase'

export class UsersCommandService {
  constructor(private readonly repository: IUsersRepository) {}

  async create(data: CreateUsersInput): Promise<Users> {
    return this.repository.save(data)
  }

  async update(id: string, data: UpdateUsersInput): Promise<Users> {
    return this.repository.update(id, data)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}

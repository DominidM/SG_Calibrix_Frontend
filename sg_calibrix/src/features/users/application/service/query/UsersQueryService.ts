import { Users } from '../../../domain/entity/Users'
import { IUsersRepository } from '../../../domain/ports/out/IUsersRepository'

export class UsersQueryService {
  constructor(private readonly repository: IUsersRepository) {}

  async getAll(): Promise<Users[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<Users> {
    return this.repository.findById(id)
  }
}

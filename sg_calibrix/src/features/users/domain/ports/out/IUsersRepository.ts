import { Users } from '../../entity/Users'
import { CreateUsersInput, UpdateUsersInput } from '../in/IUsersUseCase'

export interface IUsersRepository {
  findAll(): Promise<Users[]>
  findById(id: string): Promise<Users>
  save(data: CreateUsersInput): Promise<Users>
  update(id: string, data: UpdateUsersInput): Promise<Users>
  delete(id: string): Promise<void>
}

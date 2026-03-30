import { Users } from '../../entity/Users'

export interface IUsersUseCase {
  getAll(): Promise<Users[]>
  getById(id: string): Promise<Users>
  create(data: CreateUsersInput): Promise<Users>
  update(id: string, data: UpdateUsersInput): Promise<Users>
  delete(id: string): Promise<void>
}

export interface CreateUsersInput {
  // TODO: agregar campos requeridos para crear
}

export interface UpdateUsersInput {
  // TODO: agregar campos requeridos para actualizar
}

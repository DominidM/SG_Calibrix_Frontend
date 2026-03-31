import { Roles } from '../../entity/Roles'

export interface IRolesUseCase {
  getAll(): Promise<Roles[]>
  getById(id: string): Promise<Roles>
  create(data: CreateRolesInput): Promise<Roles>
  update(id: string, data: UpdateRolesInput): Promise<Roles>
  delete(id: string): Promise<void>
}

export interface CreateRolesInput {
  // TODO: agregar campos requeridos para crear
}

export interface UpdateRolesInput {
  // TODO: agregar campos requeridos para actualizar
}

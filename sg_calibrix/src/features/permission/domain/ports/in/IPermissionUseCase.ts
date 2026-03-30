import { Permission } from '../../entity/Permission'

export interface IPermissionUseCase {
  getAll(): Promise<Permission[]>
  getById(id: string): Promise<Permission>
  create(data: CreatePermissionInput): Promise<Permission>
  update(id: string, data: UpdatePermissionInput): Promise<Permission>
  delete(id: string): Promise<void>
}

export interface CreatePermissionInput {
  // TODO: agregar campos requeridos para crear
}

export interface UpdatePermissionInput {
  // TODO: agregar campos requeridos para actualizar
}

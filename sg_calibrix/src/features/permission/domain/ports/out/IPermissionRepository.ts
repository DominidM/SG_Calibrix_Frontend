import { Permission } from '../../entity/Permission'
import { CreatePermissionInput, UpdatePermissionInput } from '../in/IPermissionUseCase'

export interface IPermissionRepository {
  findAll(): Promise<Permission[]>
  findById(id: string): Promise<Permission>
  save(data: CreatePermissionInput): Promise<Permission>
  update(id: string, data: UpdatePermissionInput): Promise<Permission>
  delete(id: string): Promise<void>
}

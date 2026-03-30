import { Permission } from '../../../domain/entity/Permission'
import { IPermissionRepository } from '../../../domain/ports/out/IPermissionRepository'
import { CreatePermissionInput, UpdatePermissionInput } from '../../../domain/ports/in/IPermissionUseCase'

export class PermissionCommandService {
  constructor(private readonly repository: IPermissionRepository) {}

  async create(data: CreatePermissionInput): Promise<Permission> {
    return this.repository.save(data)
  }

  async update(id: string, data: UpdatePermissionInput): Promise<Permission> {
    return this.repository.update(id, data)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}

import { Permission } from '../../../domain/entity/Permission'
import { IPermissionRepository } from '../../../domain/ports/out/IPermissionRepository'

export class PermissionQueryService {
  constructor(private readonly repository: IPermissionRepository) {}

  async getAll(): Promise<Permission[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<Permission> {
    return this.repository.findById(id)
  }
}

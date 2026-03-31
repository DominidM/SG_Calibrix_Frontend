import { Roles } from '../../../domain/entity/Roles'
import { IRolesRepository } from '../../../domain/ports/out/IRolesRepository'

export class RolesQueryService {
  constructor(private readonly repository: IRolesRepository) {}

  async getAll(): Promise<Roles[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<Roles> {
    return this.repository.findById(id)
  }
}

import { Roles } from '../../../domain/entity/Roles'
import { IRolesRepository } from '../../../domain/ports/out/IRolesRepository'
import { CreateRolesInput, UpdateRolesInput } from '../../../domain/ports/in/IRolesUseCase'

export class RolesCommandService {
  constructor(private readonly repository: IRolesRepository) {}

  async create(data: CreateRolesInput): Promise<Roles> {
    return this.repository.save(data)
  }

  async update(id: string, data: UpdateRolesInput): Promise<Roles> {
    return this.repository.update(id, data)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}

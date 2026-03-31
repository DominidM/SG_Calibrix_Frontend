import { Roles } from '../../entity/Roles'
import { CreateRolesInput, UpdateRolesInput } from '../in/IRolesUseCase'

export interface IRolesRepository {
  findAll(): Promise<Roles[]>
  findById(id: string): Promise<Roles>
  save(data: CreateRolesInput): Promise<Roles>
  update(id: string, data: UpdateRolesInput): Promise<Roles>
  delete(id: string): Promise<void>
}

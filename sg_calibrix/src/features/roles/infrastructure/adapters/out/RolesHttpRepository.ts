import { Roles } from '../../../domain/entity/Roles'
import { IRolesRepository } from '../../../domain/ports/out/IRolesRepository'
import { CreateRolesInput, UpdateRolesInput } from '../../../domain/ports/in/IRolesUseCase'
import { RolesResponseDto } from '../../../application/dto/out/RolesResponseDto'
import { toRoles, toCreateRolesDto, toUpdateRolesDto } from '../../../application/mapper/RolesMapper'
// import { rolesClient } from '@/shared/http/clients/rolesClient'

export class RolesHttpRepository implements IRolesRepository {

  async findAll(): Promise<Roles[]> {
    // const res = await rolesClient.get<RolesResponseDto[]>('/')
    // return res.data.map(toRoles)
    throw new Error('TODO: implementar findAll')
  }

  async findById(id: string): Promise<Roles> {
    // const res = await rolesClient.get<RolesResponseDto>('/' + id)
    // return toRoles(res.data)
    throw new Error('TODO: implementar findById')
  }

  async save(data: CreateRolesInput): Promise<Roles> {
    // const dto = toCreateRolesDto(data)
    // const res = await rolesClient.post<RolesResponseDto>('/', dto)
    // return toRoles(res.data)
    throw new Error('TODO: implementar save')
  }

  async update(id: string, data: UpdateRolesInput): Promise<Roles> {
    // const dto = toUpdateRolesDto(data)
    // const res = await rolesClient.put<RolesResponseDto>('/' + id, dto)
    // return toRoles(res.data)
    throw new Error('TODO: implementar update')
  }

  async delete(id: string): Promise<void> {
    // await rolesClient.delete('/' + id)
    throw new Error('TODO: implementar delete')
  }
}

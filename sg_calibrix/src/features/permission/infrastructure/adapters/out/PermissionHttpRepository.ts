import { Permission } from '../../../domain/entity/Permission'
import { IPermissionRepository } from '../../../domain/ports/out/IPermissionRepository'
import { CreatePermissionInput, UpdatePermissionInput } from '../../../domain/ports/in/IPermissionUseCase'
import { PermissionResponseDto } from '../../../application/dto/out/PermissionResponseDto'
import { toPermission, toCreatePermissionDto, toUpdatePermissionDto } from '../../../application/mapper/PermissionMapper'
// import { permissionClient } from '@/shared/http/clients/permissionClient'

export class PermissionHttpRepository implements IPermissionRepository {

  async findAll(): Promise<Permission[]> {
    // const res = await permissionClient.get<PermissionResponseDto[]>('/')
    // return res.data.map(toPermission)
    throw new Error('TODO: implementar findAll')
  }

  async findById(id: string): Promise<Permission> {
    // const res = await permissionClient.get<PermissionResponseDto>('/' + id)
    // return toPermission(res.data)
    throw new Error('TODO: implementar findById')
  }

  async save(data: CreatePermissionInput): Promise<Permission> {
    // const dto = toCreatePermissionDto(data)
    // const res = await permissionClient.post<PermissionResponseDto>('/', dto)
    // return toPermission(res.data)
    throw new Error('TODO: implementar save')
  }

  async update(id: string, data: UpdatePermissionInput): Promise<Permission> {
    // const dto = toUpdatePermissionDto(data)
    // const res = await permissionClient.put<PermissionResponseDto>('/' + id, dto)
    // return toPermission(res.data)
    throw new Error('TODO: implementar update')
  }

  async delete(id: string): Promise<void> {
    // await permissionClient.delete('/' + id)
    throw new Error('TODO: implementar delete')
  }
}

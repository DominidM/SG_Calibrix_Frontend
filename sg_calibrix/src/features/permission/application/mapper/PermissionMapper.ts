import { Permission } from '../../domain/entity/Permission'
import { PermissionResponseDto } from '../dto/out/PermissionResponseDto'
import { CreatePermissionInput, UpdatePermissionInput } from '../../domain/ports/in/IPermissionUseCase'
import { CreatePermissionDto } from '../dto/in/CreatePermissionDto'
import { UpdatePermissionDto } from '../dto/in/UpdatePermissionDto'

// Backend -> Entidad
export const toPermission = (dto: PermissionResponseDto): Permission => ({
  id: dto.id,
  // TODO: mapear campos snake_case -> camelCase
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
})

// Entidad -> DTO crear
export const toCreatePermissionDto = (input: CreatePermissionInput): CreatePermissionDto => ({
  // TODO: mapear campos
})

// Entidad -> DTO actualizar
export const toUpdatePermissionDto = (input: UpdatePermissionInput): UpdatePermissionDto => ({
  // TODO: mapear campos
})

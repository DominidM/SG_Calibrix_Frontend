import { Roles } from '../../domain/entity/Roles'
import { RolesResponseDto } from '../dto/out/RolesResponseDto'
import { CreateRolesInput, UpdateRolesInput } from '../../domain/ports/in/IRolesUseCase'
import { CreateRolesDto } from '../dto/in/CreateRolesDto'
import { UpdateRolesDto } from '../dto/in/UpdateRolesDto'

// Backend -> Entidad
export const toRoles = (dto: RolesResponseDto): Roles => ({
  id: dto.id,
  // TODO: mapear campos snake_case -> camelCase
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
})

// Entidad -> DTO crear
export const toCreateRolesDto = (input: CreateRolesInput): CreateRolesDto => ({
  // TODO: mapear campos
})

// Entidad -> DTO actualizar
export const toUpdateRolesDto = (input: UpdateRolesInput): UpdateRolesDto => ({
  // TODO: mapear campos
})

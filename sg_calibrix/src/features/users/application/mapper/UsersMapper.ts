import { Users } from '../../domain/entity/Users'
import { UsersResponseDto } from '../dto/out/UsersResponseDto'
import { CreateUsersInput, UpdateUsersInput } from '../../domain/ports/in/IUsersUseCase'
import { CreateUsersDto } from '../dto/in/CreateUsersDto'
import { UpdateUsersDto } from '../dto/in/UpdateUsersDto'

// Backend -> Entidad
export const toUsers = (dto: UsersResponseDto): Users => ({
  id: dto.id,
  // TODO: mapear campos snake_case -> camelCase
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
})

// Entidad -> DTO crear
export const toCreateUsersDto = (input: CreateUsersInput): CreateUsersDto => ({
  // TODO: mapear campos
})

// Entidad -> DTO actualizar
export const toUpdateUsersDto = (input: UpdateUsersInput): UpdateUsersDto => ({
  // TODO: mapear campos
})

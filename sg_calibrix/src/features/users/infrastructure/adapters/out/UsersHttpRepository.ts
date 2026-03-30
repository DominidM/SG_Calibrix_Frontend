import { Users } from '../../../domain/entity/Users'
import { IUsersRepository } from '../../../domain/ports/out/IUsersRepository'
import { CreateUsersInput, UpdateUsersInput } from '../../../domain/ports/in/IUsersUseCase'
import { UsersResponseDto } from '../../../application/dto/out/UsersResponseDto'
import { toUsers, toCreateUsersDto, toUpdateUsersDto } from '../../../application/mapper/UsersMapper'
// import { usersClient } from '@/shared/http/clients/usersClient'

export class UsersHttpRepository implements IUsersRepository {

  async findAll(): Promise<Users[]> {
    // const res = await usersClient.get<UsersResponseDto[]>('/')
    // return res.data.map(toUsers)
    throw new Error('TODO: implementar findAll')
  }

  async findById(id: string): Promise<Users> {
    // const res = await usersClient.get<UsersResponseDto>('/' + id)
    // return toUsers(res.data)
    throw new Error('TODO: implementar findById')
  }

  async save(data: CreateUsersInput): Promise<Users> {
    // const dto = toCreateUsersDto(data)
    // const res = await usersClient.post<UsersResponseDto>('/', dto)
    // return toUsers(res.data)
    throw new Error('TODO: implementar save')
  }

  async update(id: string, data: UpdateUsersInput): Promise<Users> {
    // const dto = toUpdateUsersDto(data)
    // const res = await usersClient.put<UsersResponseDto>('/' + id, dto)
    // return toUsers(res.data)
    throw new Error('TODO: implementar update')
  }

  async delete(id: string): Promise<void> {
    // await usersClient.delete('/' + id)
    throw new Error('TODO: implementar delete')
  }
}

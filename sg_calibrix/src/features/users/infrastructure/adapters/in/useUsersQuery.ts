import { useQuery } from '@tanstack/react-query'
import { UsersQueryService } from '../../../application/service/query/UsersQueryService'
import { UsersHttpRepository } from '../out/UsersHttpRepository'

const repository = new UsersHttpRepository()
const queryService = new UsersQueryService(repository)

export function useGetAllUsers() {
  return useQuery({
    queryKey: ['users', 'list'],
    queryFn: () => queryService.getAll(),
  })
}

export function useGetUsersById(id: string) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => queryService.getById(id),
    enabled: !!id,
  })
}

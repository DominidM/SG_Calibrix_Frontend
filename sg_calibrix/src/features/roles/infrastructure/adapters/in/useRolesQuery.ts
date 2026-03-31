import { useQuery } from '@tanstack/react-query'
import { RolesQueryService } from '../../../application/service/query/RolesQueryService'
import { RolesHttpRepository } from '../out/RolesHttpRepository'

const repository = new RolesHttpRepository()
const queryService = new RolesQueryService(repository)

export function useGetAllRoles() {
  return useQuery({
    queryKey: ['roles', 'list'],
    queryFn: () => queryService.getAll(),
  })
}

export function useGetRolesById(id: string) {
  return useQuery({
    queryKey: ['roles', id],
    queryFn: () => queryService.getById(id),
    enabled: !!id,
  })
}

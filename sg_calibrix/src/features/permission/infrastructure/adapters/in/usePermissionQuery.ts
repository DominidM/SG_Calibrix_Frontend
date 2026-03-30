import { useQuery } from '@tanstack/react-query'
import { PermissionQueryService } from '../../../application/service/query/PermissionQueryService'
import { PermissionHttpRepository } from '../out/PermissionHttpRepository'

const repository = new PermissionHttpRepository()
const queryService = new PermissionQueryService(repository)

export function useGetAllPermission() {
  return useQuery({
    queryKey: ['permission', 'list'],
    queryFn: () => queryService.getAll(),
  })
}

export function useGetPermissionById(id: string) {
  return useQuery({
    queryKey: ['permission', id],
    queryFn: () => queryService.getById(id),
    enabled: !!id,
  })
}

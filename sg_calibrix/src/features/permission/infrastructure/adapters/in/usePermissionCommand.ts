import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PermissionCommandService } from '../../../application/service/command/PermissionCommandService'
import { PermissionHttpRepository } from '../out/PermissionHttpRepository'
import { CreatePermissionInput, UpdatePermissionInput } from '../../../domain/ports/in/IPermissionUseCase'

const repository = new PermissionHttpRepository()
const commandService = new PermissionCommandService(repository)

export function useCreatePermission() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreatePermissionInput) => commandService.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['permission'] }),
  })
}

export function useUpdatePermission() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePermissionInput }) =>
      commandService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['permission'] }),
  })
}

export function useDeletePermission() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => commandService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['permission'] }),
  })
}

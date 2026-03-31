import { useMutation, useQueryClient } from '@tanstack/react-query'
import { RolesCommandService } from '../../../application/service/command/RolesCommandService'
import { RolesHttpRepository } from '../out/RolesHttpRepository'
import { CreateRolesInput, UpdateRolesInput } from '../../../domain/ports/in/IRolesUseCase'

const repository = new RolesHttpRepository()
const commandService = new RolesCommandService(repository)

export function useCreateRoles() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateRolesInput) => commandService.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] }),
  })
}

export function useUpdateRoles() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateRolesInput }) =>
      commandService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] }),
  })
}

export function useDeleteRoles() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => commandService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['roles'] }),
  })
}

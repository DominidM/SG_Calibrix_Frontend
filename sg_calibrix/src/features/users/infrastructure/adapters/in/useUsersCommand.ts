import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UsersCommandService } from '../../../application/service/command/UsersCommandService'
import { UsersHttpRepository } from '../out/UsersHttpRepository'
import { CreateUsersInput, UpdateUsersInput } from '../../../domain/ports/in/IUsersUseCase'

const repository = new UsersHttpRepository()
const commandService = new UsersCommandService(repository)

export function useCreateUsers() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateUsersInput) => commandService.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}

export function useUpdateUsers() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUsersInput }) =>
      commandService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}

export function useDeleteUsers() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => commandService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}

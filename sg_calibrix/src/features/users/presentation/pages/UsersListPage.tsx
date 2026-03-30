import { useGetAllUsers } from '../../infrastructure/adapters/in/useUsersQuery'
import { UsersTable } from '../components/UsersTable'

export function UsersListPage() {
  const { data, isLoading, error } = useGetAllUsers()

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los datos</div>

  return (
    <div>
      <h1>Users</h1>
      <UsersTable data={data ?? []} />
    </div>
  )
}

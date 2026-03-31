import { useGetAllRoles } from '../../infrastructure/adapters/in/useRolesQuery'
import { RolesTable } from '../components/RolesTable'

export function RolesListPage() {
  const { data, isLoading, error } = useGetAllRoles()

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los datos</div>

  return (
    <div>
      <h1>Roles</h1>
      <RolesTable data={data ?? []} />
    </div>
  )
}

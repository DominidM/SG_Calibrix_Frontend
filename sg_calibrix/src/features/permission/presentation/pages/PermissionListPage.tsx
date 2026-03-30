import { useGetAllPermission } from '../../infrastructure/adapters/in/usePermissionQuery'
import { PermissionTable } from '../components/PermissionTable'

export function PermissionListPage() {
  const { data, isLoading, error } = useGetAllPermission()

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los datos</div>

  return (
    <div>
      <h1>Permission</h1>
      <PermissionTable data={data ?? []} />
    </div>
  )
}

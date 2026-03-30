import { Permission } from '../../domain/entity/Permission'

interface PermissionTableProps {
  data: Permission[]
  onEdit?: (item: Permission) => void
  onDelete?: (id: string) => void
}

export function PermissionTable({ data, onEdit, onDelete }: PermissionTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {/* TODO: agregar columnas */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {/* TODO: agregar celdas */}
              <td>
                <button onClick={() => onEdit?.(item)}>Editar</button>
                <button onClick={() => onDelete?.(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

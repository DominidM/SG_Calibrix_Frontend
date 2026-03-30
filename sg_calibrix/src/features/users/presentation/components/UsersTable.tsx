import { Users } from '../../domain/entity/Users'

interface UsersTableProps {
  data: Users[]
  onEdit?: (item: Users) => void
  onDelete?: (id: string) => void
}

export function UsersTable({ data, onEdit, onDelete }: UsersTableProps) {
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

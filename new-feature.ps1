# ============================================
# SG Calibrix — Generador de Vertical Slice
# ============================================

param(
    [string]$FeatureName
)

if (-not $FeatureName) {
    $FeatureName = Read-Host "Nombre del feature (ej: account-receivable)"
}

# Convertir kebab-case a PascalCase (compatible PS5)
function ToPascalCase($str) {
    $parts = $str -split '-'
    $result = ""
    foreach ($part in $parts) {
        $result += $part.Substring(0,1).ToUpper() + $part.Substring(1).ToLower()
    }
    return $result
}

# Convertir kebab-case a camelCase (compatible PS5)
function ToCamelCase($str) {
    $pascal = ToPascalCase $str
    return $pascal.Substring(0,1).ToLower() + $pascal.Substring(1)
}

$Pascal = ToPascalCase $FeatureName
$Camel  = ToCamelCase $FeatureName

# Ruta correcta: dentro de sg_calibrix
$Base = "sg_calibrix/src/features/$FeatureName"

Write-Host ""
Write-Host "Generando feature: $Pascal" -ForegroundColor Cyan
Write-Host "Ruta: $Base" -ForegroundColor Gray
Write-Host ""

# ============================================
# CREAR CARPETAS
# ============================================
$folders = @(
    "$Base/domain/entity"
    "$Base/domain/ports/in"
    "$Base/domain/ports/out"
    "$Base/application/dto/in"
    "$Base/application/dto/out"
    "$Base/application/mapper"
    "$Base/application/service/command"
    "$Base/application/service/query"
    "$Base/infrastructure/adapters/in"
    "$Base/infrastructure/adapters/out"
    "$Base/presentation/components"
    "$Base/presentation/hooks"
    "$Base/presentation/pages"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

# ============================================
# DOMAIN — Entity
# ============================================
$content = @"
// Entidad principal del dominio $Pascal
export interface $Pascal {
  id: string
  // TODO: agregar propiedades del dominio
  createdAt: Date
  updatedAt: Date
}
"@
Set-Content -Path "$Base/domain/entity/$Pascal.ts" -Value $content -Encoding UTF8

# ============================================
# DOMAIN — Port In
# ============================================
$content = @"
import { $Pascal } from '../../entity/$Pascal'

export interface I${Pascal}UseCase {
  getAll(): Promise<${Pascal}[]>
  getById(id: string): Promise<$Pascal>
  create(data: Create${Pascal}Input): Promise<$Pascal>
  update(id: string, data: Update${Pascal}Input): Promise<$Pascal>
  delete(id: string): Promise<void>
}

export interface Create${Pascal}Input {
  // TODO: agregar campos requeridos para crear
}

export interface Update${Pascal}Input {
  // TODO: agregar campos requeridos para actualizar
}
"@
Set-Content -Path "$Base/domain/ports/in/I${Pascal}UseCase.ts" -Value $content -Encoding UTF8

# ============================================
# DOMAIN — Port Out
# ============================================
$content = @"
import { $Pascal } from '../../entity/$Pascal'
import { Create${Pascal}Input, Update${Pascal}Input } from '../in/I${Pascal}UseCase'

export interface I${Pascal}Repository {
  findAll(): Promise<${Pascal}[]>
  findById(id: string): Promise<$Pascal>
  save(data: Create${Pascal}Input): Promise<$Pascal>
  update(id: string, data: Update${Pascal}Input): Promise<$Pascal>
  delete(id: string): Promise<void>
}
"@
Set-Content -Path "$Base/domain/ports/out/I${Pascal}Repository.ts" -Value $content -Encoding UTF8

# ============================================
# APPLICATION — DTO In
# ============================================
$content = @"
// DTO de entrada para crear $Pascal
export interface Create${Pascal}Dto {
  // TODO: agregar campos segun el backend
}
"@
Set-Content -Path "$Base/application/dto/in/Create${Pascal}Dto.ts" -Value $content -Encoding UTF8

$content = @"
// DTO de entrada para actualizar $Pascal
export interface Update${Pascal}Dto {
  // TODO: agregar campos segun el backend
}
"@
Set-Content -Path "$Base/application/dto/in/Update${Pascal}Dto.ts" -Value $content -Encoding UTF8

# ============================================
# APPLICATION — DTO Out
# ============================================
$content = @"
// DTO de salida: forma exacta de la respuesta del backend (snake_case)
export interface ${Pascal}ResponseDto {
  id: string
  // TODO: agregar campos con los nombres exactos del backend
  created_at: string
  updated_at: string
}

export interface ${Pascal}PageResponseDto {
  content: ${Pascal}ResponseDto[]
  total_elements: number
  total_pages: number
  page_number: number
}
"@
Set-Content -Path "$Base/application/dto/out/${Pascal}ResponseDto.ts" -Value $content -Encoding UTF8

# ============================================
# APPLICATION — Mapper
# ============================================
$content = @"
import { $Pascal } from '../../domain/entity/$Pascal'
import { ${Pascal}ResponseDto } from '../dto/out/${Pascal}ResponseDto'
import { Create${Pascal}Input, Update${Pascal}Input } from '../../domain/ports/in/I${Pascal}UseCase'
import { Create${Pascal}Dto } from '../dto/in/Create${Pascal}Dto'
import { Update${Pascal}Dto } from '../dto/in/Update${Pascal}Dto'

// Backend -> Entidad
export const to${Pascal} = (dto: ${Pascal}ResponseDto): $Pascal => ({
  id: dto.id,
  // TODO: mapear campos snake_case -> camelCase
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
})

// Entidad -> DTO crear
export const toCreate${Pascal}Dto = (input: Create${Pascal}Input): Create${Pascal}Dto => ({
  // TODO: mapear campos
})

// Entidad -> DTO actualizar
export const toUpdate${Pascal}Dto = (input: Update${Pascal}Input): Update${Pascal}Dto => ({
  // TODO: mapear campos
})
"@
Set-Content -Path "$Base/application/mapper/${Pascal}Mapper.ts" -Value $content -Encoding UTF8

# ============================================
# APPLICATION — Query Service
# ============================================
$content = @"
import { $Pascal } from '../../../domain/entity/$Pascal'
import { I${Pascal}Repository } from '../../../domain/ports/out/I${Pascal}Repository'

export class ${Pascal}QueryService {
  constructor(private readonly repository: I${Pascal}Repository) {}

  async getAll(): Promise<${Pascal}[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<$Pascal> {
    return this.repository.findById(id)
  }
}
"@
Set-Content -Path "$Base/application/service/query/${Pascal}QueryService.ts" -Value $content -Encoding UTF8

# ============================================
# APPLICATION — Command Service
# ============================================
$content = @"
import { $Pascal } from '../../../domain/entity/$Pascal'
import { I${Pascal}Repository } from '../../../domain/ports/out/I${Pascal}Repository'
import { Create${Pascal}Input, Update${Pascal}Input } from '../../../domain/ports/in/I${Pascal}UseCase'

export class ${Pascal}CommandService {
  constructor(private readonly repository: I${Pascal}Repository) {}

  async create(data: Create${Pascal}Input): Promise<$Pascal> {
    return this.repository.save(data)
  }

  async update(id: string, data: Update${Pascal}Input): Promise<$Pascal> {
    return this.repository.update(id, data)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
"@
Set-Content -Path "$Base/application/service/command/${Pascal}CommandService.ts" -Value $content -Encoding UTF8

# ============================================
# INFRASTRUCTURE — HTTP Repository
# ============================================
$content = @"
import { $Pascal } from '../../../domain/entity/$Pascal'
import { I${Pascal}Repository } from '../../../domain/ports/out/I${Pascal}Repository'
import { Create${Pascal}Input, Update${Pascal}Input } from '../../../domain/ports/in/I${Pascal}UseCase'
import { ${Pascal}ResponseDto } from '../../../application/dto/out/${Pascal}ResponseDto'
import { to${Pascal}, toCreate${Pascal}Dto, toUpdate${Pascal}Dto } from '../../../application/mapper/${Pascal}Mapper'
// import { ${Camel}Client } from '@/shared/http/clients/${Camel}Client'

export class ${Pascal}HttpRepository implements I${Pascal}Repository {

  async findAll(): Promise<${Pascal}[]> {
    // const res = await ${Camel}Client.get<${Pascal}ResponseDto[]>('/')
    // return res.data.map(to${Pascal})
    throw new Error('TODO: implementar findAll')
  }

  async findById(id: string): Promise<$Pascal> {
    // const res = await ${Camel}Client.get<${Pascal}ResponseDto>('/' + id)
    // return to${Pascal}(res.data)
    throw new Error('TODO: implementar findById')
  }

  async save(data: Create${Pascal}Input): Promise<$Pascal> {
    // const dto = toCreate${Pascal}Dto(data)
    // const res = await ${Camel}Client.post<${Pascal}ResponseDto>('/', dto)
    // return to${Pascal}(res.data)
    throw new Error('TODO: implementar save')
  }

  async update(id: string, data: Update${Pascal}Input): Promise<$Pascal> {
    // const dto = toUpdate${Pascal}Dto(data)
    // const res = await ${Camel}Client.put<${Pascal}ResponseDto>('/' + id, dto)
    // return to${Pascal}(res.data)
    throw new Error('TODO: implementar update')
  }

  async delete(id: string): Promise<void> {
    // await ${Camel}Client.delete('/' + id)
    throw new Error('TODO: implementar delete')
  }
}
"@
Set-Content -Path "$Base/infrastructure/adapters/out/${Pascal}HttpRepository.ts" -Value $content -Encoding UTF8

# ============================================
# INFRASTRUCTURE — Hook Query
# ============================================
$content = @"
import { useQuery } from '@tanstack/react-query'
import { ${Pascal}QueryService } from '../../../application/service/query/${Pascal}QueryService'
import { ${Pascal}HttpRepository } from '../out/${Pascal}HttpRepository'

const repository = new ${Pascal}HttpRepository()
const queryService = new ${Pascal}QueryService(repository)

export function useGetAll${Pascal}() {
  return useQuery({
    queryKey: ['${Camel}', 'list'],
    queryFn: () => queryService.getAll(),
  })
}

export function useGet${Pascal}ById(id: string) {
  return useQuery({
    queryKey: ['${Camel}', id],
    queryFn: () => queryService.getById(id),
    enabled: !!id,
  })
}
"@
Set-Content -Path "$Base/infrastructure/adapters/in/use${Pascal}Query.ts" -Value $content -Encoding UTF8

# ============================================
# INFRASTRUCTURE — Hook Command
# ============================================
$content = @"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ${Pascal}CommandService } from '../../../application/service/command/${Pascal}CommandService'
import { ${Pascal}HttpRepository } from '../out/${Pascal}HttpRepository'
import { Create${Pascal}Input, Update${Pascal}Input } from '../../../domain/ports/in/I${Pascal}UseCase'

const repository = new ${Pascal}HttpRepository()
const commandService = new ${Pascal}CommandService(repository)

export function useCreate${Pascal}() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Create${Pascal}Input) => commandService.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['${Camel}'] }),
  })
}

export function useUpdate${Pascal}() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Update${Pascal}Input }) =>
      commandService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['${Camel}'] }),
  })
}

export function useDelete${Pascal}() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => commandService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['${Camel}'] }),
  })
}
"@
Set-Content -Path "$Base/infrastructure/adapters/in/use${Pascal}Command.ts" -Value $content -Encoding UTF8

# ============================================
# PRESENTATION — Table Component
# ============================================
$content = @"
import { $Pascal } from '../../domain/entity/$Pascal'

interface ${Pascal}TableProps {
  data: ${Pascal}[]
  onEdit?: (item: $Pascal) => void
  onDelete?: (id: string) => void
}

export function ${Pascal}Table({ data, onEdit, onDelete }: ${Pascal}TableProps) {
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
"@
Set-Content -Path "$Base/presentation/components/${Pascal}Table.tsx" -Value $content -Encoding UTF8

# ============================================
# PRESENTATION — List Page
# ============================================
$content = @"
import { useGetAll${Pascal} } from '../../infrastructure/adapters/in/use${Pascal}Query'
import { ${Pascal}Table } from '../components/${Pascal}Table'

export function ${Pascal}ListPage() {
  const { data, isLoading, error } = useGetAll${Pascal}()

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los datos</div>

  return (
    <div>
      <h1>$Pascal</h1>
      <${Pascal}Table data={data ?? []} />
    </div>
  )
}
"@
Set-Content -Path "$Base/presentation/pages/${Pascal}ListPage.tsx" -Value $content -Encoding UTF8

# ============================================
# INDEX — barrel export
# ============================================
$content = @"
export { ${Pascal}ListPage } from './presentation/pages/${Pascal}ListPage'
export type { $Pascal } from './domain/entity/$Pascal'
"@
Set-Content -Path "$Base/index.ts" -Value $content -Encoding UTF8

# ============================================
# RESUMEN
# ============================================
Write-Host ""
Write-Host "  Feature '$Pascal' generado exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "  Archivos creados en: $Base" -ForegroundColor Gray
Write-Host ""
Write-Host "  Proximos pasos:" -ForegroundColor Cyan
Write-Host "  1. Edita la entidad:  $Base/domain/entity/$Pascal.ts"
Write-Host "  2. Completa los DTOs: $Base/application/dto/"
Write-Host "  3. Completa mapper:   $Base/application/mapper/${Pascal}Mapper.ts"
Write-Host "  4. Crea la ruta:      sg_calibrix/src/app/(private)/$FeatureName/page.tsx"
Write-Host ""
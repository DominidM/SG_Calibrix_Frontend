// DTO de salida: forma exacta de la respuesta del backend (snake_case)
export interface RolesResponseDto {
  id: string
  // TODO: agregar campos con los nombres exactos del backend
  created_at: string
  updated_at: string
}

export interface RolesPageResponseDto {
  content: RolesResponseDto[]
  total_elements: number
  total_pages: number
  page_number: number
}

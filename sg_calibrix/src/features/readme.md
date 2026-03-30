# 🏗️ SG Calibrix — Arquitectura Frontend
## Vertical Slices

Cada feature mapea 1:1 con un microservicio del backend.
Cada slice es completamente independiente y contiene todas sus capas.

```
src/features/
│
├── account-receivable/         # → account-receivable-service
│   ├── domain/
│   │   ├── entity/             # Entidades del dominio (AccountReceivable.ts)
│   │   └── ports/
│   │       ├── in/             # Casos de uso (interfaces)
│   │       └── out/            # Repositorios (interfaces)
│   ├── application/
│   │   ├── dto/
│   │   │   ├── in/                 # Lo que mandas al backend
│   │   │   └── out/                # Lo que recibes del backend
│   │   ├── mapper/                 # Convierte respuesta del backend → entidad
│   │   └── service/
│   │       ├── command/            # Crear, editar, eliminar
│   │       └── query/              # Listar, buscar, obtener
│   ├── infrastructure/
│   │   └── adapters/
│   │       ├── in/                 # Hooks React
│   │       └── out/                # Llamadas HTTP reales
│   └── presentation/
│       ├── components/         # Componentes visuales
│       ├── hooks/              # Estado de UI
│       └── pages/              # Página completa
```

---

## Capas por Slice

### `domain/`
Núcleo del negocio. **No depende de nada externo.**
- `entity/` — Entidades y value objects
- `ports/in/` — Interfaces de casos de uso (lo que la app puede hacer)
- `ports/out/` — Interfaces de repositorios (lo que necesita del exterior)

### `application/`
Orquesta el dominio. **Solo conoce el dominio.**
- `dto/in/` — Datos que entran al caso de uso
- `dto/out/` — Datos que salen del caso de uso
- `mapper/` — Convierte entre entidades y DTOs
- `service/command/` — Operaciones de escritura (crear, actualizar, eliminar)
- `service/query/` — Operaciones de lectura (obtener, listar, buscar)

### `infrastructure/`
Implementa los ports. **Conoce el mundo exterior.**
- `adapters/in/` — Hooks React que consumen casos de uso
- `adapters/out/` — Clientes HTTP que implementan los repositorios

### `presentation/`
UI pura. **Solo llama a los adapters de entrada.**
- `components/` — Componentes React
- `hooks/` — Estado y lógica de UI
- `pages/` — Composición de componentes

---

## Regla de Dependencias

```
presentation → infrastructure/in → application → domain
                                        ↑
                              infrastructure/out
```

> ❌ Nunca importar entre features directamente
> ✅ Si algo es compartido, va a `shared/`

---

## Shared

```
src/shared/
├── ui/                         # Componentes genéricos (Button, Modal, Table)
├── http/
│   ├── createHttpClient.ts     # Factory de clientes Axios
│   └── clients/                # Un cliente por microservicio
│       └── accountReceivableClient.ts
├── config/
│   └── env.ts                  # Variables de entorno centralizadas
└── utils/
    ├── formatters.ts
    └── validators.ts
```

---

## Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_ACCOUNT_RECEIVABLE_SERVICE_URL=https://account-receivable.up.railway.app
```

---

## Principios

| Principio | Descripción |
|-----------|-------------|
| **Vertical Slicing** | Cada feature vive junta, de UI a HTTP |
| **Ports & Adapters** | El dominio define contratos, la infra los implementa |
| **Dependency Inversion** | El dominio no conoce la infra, la infra conoce el dominio |
| **Feature Isolation** | Las features no se importan entre sí |
| **Single Responsibility** | Cada capa tiene una única razón de cambiar |
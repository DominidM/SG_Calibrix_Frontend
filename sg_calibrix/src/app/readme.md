# 🗺️ SG Calibrix — Estructura de Rutas

Las rutas en `src/app/` son **solo routing**.
Cada `page.tsx` únicamente importa desde su feature correspondiente.

---

## Estructura de Rutas

```
src/app/
│
├── layout.tsx                          # Layout raíz
├── page.tsx                            # → Redirect a dashboard o login
│
├── (auth)/                             # Grupo: sin navbar/sidebar
│   ├── layout.tsx
│   └── login/
│       └── page.tsx                    # → features/auth/presentation
│
├── (private)/                          # Grupo: requiere autenticación
│   ├── layout.tsx                      # Navbar + Sidebar
│   │
│   ├── dashboard/
│   │   └── page.tsx                    # → features/dashboard/presentation
│   │
│   ├── account-receivable/             # → features/account-receivable
│   │   ├── page.tsx                    # Listado
│   │   ├── [id]/
│   │   │   └── page.tsx                # Detalle
│   │   └── new/
│   │       └── page.tsx                # Crear nuevo
│   │
│   ├── billing/                        # → features/billing
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   └── settings/                       # → features/settings
│       └── page.tsx
│
└── api/                                # API Routes Next.js (si se necesitan)
    └── [...]/
```

---

## Regla de Rutas

Cada `page.tsx` debe verse así, **nada más**:

```tsx
// src/app/(private)/account-receivable/page.tsx

import { AccountReceivableListPage } from '@/features/account-receivable/presentation/pages/AccountReceivableListPage'

export default function Page() {
  return <AccountReceivableListPage />
}
```

> ❌ Nunca poner lógica, hooks ni fetch en `page.tsx`
> ✅ `page.tsx` solo importa y renderiza la página de la feature

---

## Route Groups

| Grupo | Descripción | Layout |
|-------|-------------|--------|
| `(auth)` | Rutas públicas | Sin sidebar |
| `(private)` | Rutas protegidas | Con sidebar + navbar |

---

## Mapeo Feature → Ruta

| Feature | Ruta |
|---------|------|
| `features/auth` | `/login` |
| `features/dashboard` | `/dashboard` |
| `features/account-receivable` | `/account-receivable` |
| `features/billing` | `/billing` |
| `features/settings` | `/settings` |
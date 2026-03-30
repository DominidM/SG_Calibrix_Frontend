# SG_Calibrix_Frontend

Frontend application built with Next.js, React, TypeScript, SCSS, and Tailwind CSS. Designed to consume a microservices backend through a centralized API Gateway.

.\new-feature.ps1 -FeatureName users  

---

## 🧱 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.x | React framework (App Router) |
| React | 19.x | UI library |
| TypeScript | Latest | Static typing |
| Tailwind CSS | Latest | Utility-first styling |
| SCSS / CSS Modules | Latest | Component-level custom styles |
| ESLint | Latest | Code linting |

---

## 🗂️ Project Structure

```
sg_calibrix/
├── public/                  # Static assets
├── src/
│   ├── app/                 # App Router pages & layouts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/          # Reusable UI components
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── Button.module.scss
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API calls to backend
│   ├── store/               # Global state management
│   ├── styles/              # Global styles & SCSS variables
│   │   └── globals.scss
│   └── types/               # TypeScript interfaces & types
├── .env.example             # Environment variable template
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚙️ Prerequisites

- Node.js 20+
- npm or yarn
- Backend services running (SG_Calibrix_Backend)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/SG_Calibrix_Frontend.git
cd SG_Calibrix_Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

> ⚠️ Never commit `.env.local` with real credentials.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Styling Guide

This project uses **Tailwind CSS** and **SCSS Modules** together:

- Use **Tailwind** for layout, spacing, colors, and typography
- Use **SCSS Modules** for component-specific logic, animations, and mixins
- Use `@apply` inside `.scss` files to combine both when needed

```scss
// Example: Button.module.scss
.button {
  @apply px-4 py-2 rounded font-semibold;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}
```

---

## 🔐 Authentication

Authentication is handled via **JWT tokens** issued by the backend `auth-service`. Tokens are stored securely and attached to every API request through a centralized service layer.

---

## 🌐 API Integration

All backend communication goes through the API Gateway. Configure the base URL in your `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
   ```
   feat/<scope>/<short-description>
   ```
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat(auth): add login form validation
   fix(layout): fix navbar overflow on mobile
   style(button): update hover transition
   ```
4. Open a Pull Request to `develop`

---

## 📄 License

This project is private and proprietary. All rights reserved.
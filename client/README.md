# Login Page Frontend

A modern React application for user authentication, built with TypeScript, Vite, and TailwindCSS.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn or bun (package manager)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd login-page/client
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file and set your backend URL:

```
VITE_REACT_APP_BACKEND_URL=http://localhost:8000
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- React Query
- React Hook Form
- Zod (for form validation)
- Axios (for API calls)

## Project Structure

```
src/
├── components/    # Feature components
├── pages/         # Page components
├── ui/            # Reusable components
├── api/           # API services
└── App.tsx        # Main application component
```

## Development Guidelines

1. Follow the TypeScript strict mode guidelines
2. Use functional components with hooks
3. Implement proper error handling
4. Write clean, maintainable code
5. Follow the established project structure

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

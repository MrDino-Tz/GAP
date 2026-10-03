import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './themes/ThemeProvider'
import MigrationNotice from './components/MigrationNotice.tsx'
import { shouldShowMigrationNotice } from './lib/deployment.ts'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    {shouldShowMigrationNotice() ? <MigrationNotice /> : <App />}
  </ThemeProvider>
);

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './themes/ThemeProvider'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

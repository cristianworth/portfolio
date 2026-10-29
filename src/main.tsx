import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { App } from './App';
import { pageFromPath } from './routes.mjs';
import './styles.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App page={pageFromPath(window.location.pathname, import.meta.env.BASE_URL)} />
  </StrictMode>
);
if (root.children.length) hydrateRoot(root, app);
else createRoot(root).render(app);

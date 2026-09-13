import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');

function showFatalError(err: unknown) {
  const el = document.getElementById('initial-loader');
  if (el) {
    el.innerHTML =
      '<div style="text-align:center;max-width:400px">' +
      '<p style="color:#f87171;margin:0 0 .5rem;font-weight:600">Portfolio failed to load</p>' +
      '<p style="color:#64748b;margin:0 0 .25rem">' + String(err) + '</p>' +
      '<p style="color:#64748b;margin:0">Try a hard refresh (Ctrl+Shift+R). Contact: welly.almeida@gmail.com</p>' +
      '</div>';
  }
}

try {
  createRoot(container!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  const loader = document.getElementById('initial-loader');
  if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
} catch (err) {
  showFatalError(err);
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type BrowserWindow = Window & {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
};

const scheduleNonCriticalWork = (callback: () => void) => {
  const browserWindow = window as unknown as BrowserWindow;
  if (browserWindow.requestIdleCallback) {
    browserWindow.requestIdleCallback(callback, { timeout: 2500 });
  } else {
    window.setTimeout(callback, 1800);
  }
};

const loadAnalytics = () => {
  const browserWindow = window as unknown as BrowserWindow;
  if (document.querySelector('script[data-analytics]')) return;

  browserWindow.dataLayer = browserWindow.dataLayer || [];
  browserWindow.gtag = (...args: unknown[]) => {
    browserWindow.dataLayer.push(args);
  };
  browserWindow.gtag('js', new Date());
  browserWindow.gtag('config', 'G-4XBY16BPLY');

  const script = document.createElement('script');
  script.async = true;
  script.dataset.analytics = 'true';
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4XBY16BPLY';
  document.head.appendChild(script);
};

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(() => undefined);
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

scheduleNonCriticalWork(() => {
  loadAnalytics();
  registerServiceWorker();
});

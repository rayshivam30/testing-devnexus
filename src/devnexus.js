import { DevNexus } from 'devnexus-sdk';

// Vite exposes VITE_* values in the browser bundle. Use a browser/public-scoped
// DevNexus key here; never put a server secret key in a client-side app.
const apiKey = import.meta.env.VITE_DEVNEXUS_API_KEY;

if (apiKey) {
  DevNexus.init({
    apiKey,
    baseUrl: 'https://working-success-relocation-singer.trycloudflare.com/api/ingest',
    autoCapture: true,
  });
} else {
  console.warn('DevNexus is not initialized: set VITE_DEVNEXUS_API_KEY in .env.local.');
}

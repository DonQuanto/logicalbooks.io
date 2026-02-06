// Basic configuration for forms provider
// provider: 'netlify' | 'custom'
// - 'netlify': uses Netlify Forms (current behavior)
// - 'custom': posts JSON to FORM_ENDPOINT
//
// To switch away from Netlify, set provider to 'custom' and set FORM_ENDPOINT
// to your serverless endpoint (e.g., Cloudflare Worker URL).
(function configureForms() {
  const isLocal = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
  const endpoint = isLocal ? 'http://localhost:4000/proxy' : '/api/forms';

  window.APP_CONFIG = Object.assign(window.APP_CONFIG || {}, {
    FORMS: {
      provider: 'custom',
      // Local proxy aids dev testing; Netlify rewrite handles production traffic.
      FORM_ENDPOINT: endpoint,
      AUTH_HEADER: '',
      AUTH_VALUE: ''
    }
  });
})();

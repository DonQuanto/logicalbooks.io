// Basic configuration for forms provider
// provider: 'netlify' | 'custom'
// - 'netlify': uses Netlify Forms (current behavior)
// - 'custom': posts JSON to FORM_ENDPOINT
//
// To switch away from Netlify, set provider to 'custom' and set FORM_ENDPOINT
// to your serverless endpoint (e.g., Cloudflare Worker URL).
window.APP_CONFIG = Object.assign(window.APP_CONFIG || {}, {
  FORMS: {
    // Use Google Apps Script endpoint
    provider: 'custom',
    // Google Apps Script Web App URL
    FORM_ENDPOINT: 'https://script.google.com/macros/s/AKfycbx2Fsh99stzLJkQOzRYQEJFeRKsW-IXnKpd2yxuIohWrkKZNjznbE99Z7prLx1Jw0Plhw/exec',
    AUTH_HEADER: '',
    AUTH_VALUE: ''
  }
});

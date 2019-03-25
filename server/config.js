function env(name, defaultValue) {
  return process.env[name] || defaultValue;
}

const isDev = process.env['NODE_ENV'] !== 'production';

module.exports = {
  isDev,
  dialog: {
    webhook: env(
      'DIALOG_WEBHOOK',
      'https://ee.dlg.im/v1/webhooks/d6a644b7e6a0bb5831b0c0c85830200f376d8ba717c6aa299225648a1d32929c',
    ),
  },
  email_to: env('EMAIL_TO', 'info@dlg.im'),
  email: {
    host: env('EMAIL_HOST', 'smtp.gmail.com'),
    port: env('EMAIL_PORT', 465),
    secure: true,
    auth: {
      user: env('EMAIL_USER', 'bot@dlg.im'),
      pass: env('EMAIL_PASSWORD', 'zUebiL&WRJRcJWJhwfPj2YgJ'),
    },
  },
  server: isDev
    ? {
        port: env('PORT', 3010),
        host: env('HOST', '127.0.0.1'),
      }
    : {
        port: env('PORT', 3000),
        host: env('HOST', '127.0.0.1'),
      },
  ghost: {
    endpoint: env('GHOST_ENDPOINT', 'https://georgetokmakov.ghost.io'),
    apiKey: env('GHOST_API_KEY', '927544e28f9c605d92e6e9123a'),
  },
  mailchimp: {
    key: env('MAILCHIMP_KEY', '60f18b64be37e27454d2be0075362713-us13'),
    list: {
      ru: env('MAILCHIMP_LIST_RU', '31bdb551f1'),
      en: env('MAILCHIMP_LIST_EN', 'fd8e55c366'),
    },
  },
};

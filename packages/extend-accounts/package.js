Package.describe({
  name: 'local:extend-accounts',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');

  api.use('ecmascript');
  api.use('sha');

  api.mainModule('client.js', 'client');
});
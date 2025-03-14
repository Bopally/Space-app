'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
require('dotenv').config(); // Load .env variables

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-dotenv': {
      clientAllowedKeys: ['NASA_API_KEY'], // Expose only allowed keys
    },
  });

  return app.toTree();
};

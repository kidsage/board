module.exports = {
  apps: [{
    name: 'borad',
    script: 'bin/www',
    watch: '.',
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};

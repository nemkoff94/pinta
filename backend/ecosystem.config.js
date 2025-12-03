module.exports = {
  apps: [
    {
      name: 'pinta-backend',
      script: 'index.js',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
};

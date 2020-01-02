const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/manager/api',
    proxy({
      target: 'http://10.20.152.70:5009',
<<<<<<< HEAD
=======
      // target: 'http://10.20.152.27:5000',
>>>>>>> ryk
      changeOrigin: true
    })
  );

};
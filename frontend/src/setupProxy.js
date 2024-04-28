/*const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
app.use('/', createProxyMiddleware({
    target:'http://localhost:3080'
}))
}

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/', createProxyMiddleware({
            target: 'http://localhost:3080',
            changeOrigin: true,
        })
    );
};
*/

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({ // alterado o caminho de "/" para "/api" para evitar conflitos com as rotas do React
            target: 'http://localhost:3080', // corrigido o target para o backend
            changeOrigin: true,
        })
    );
};

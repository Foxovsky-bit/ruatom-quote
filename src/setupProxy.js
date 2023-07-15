const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {

    app.use(
        createProxyMiddleware('/proxy',
            {
                target:'https://api.forismatic.com',
                changeOrigin:true,
                pathRewrite: {
                    '^/proxy': '',
                }
            })
    )
    app.listen(4200)
}
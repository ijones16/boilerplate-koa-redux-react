var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello from koa!';
});

app.listen(3000);
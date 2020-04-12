var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, (req) => {
    console.log("Servidor corriendo en el puerto: " + port);
})

app.get("/", ((req, res) => {
    res.sendFile('index.html', { root: __dirname })
}))
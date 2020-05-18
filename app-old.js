const http = require("http");

http
  .createServer((request, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    let salida = {
      nombre: "Diego",
      edad: 21,
    };

    res.write(JSON.stringify(salida));

    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");

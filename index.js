const express = require("express");
const app = express();
const PORT = parseInt(process.argv[2]) || 8081;

const { engine } = require("express-handlebars");

app.engine("handlebars", engine()); // esta linea en las diapositivas figura mal, esta es la manera actual
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/datos", (req, res) => {
  res.status(200).send(`
     <H1>
        Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} -
        <b> PID: ${process.pid} </b> - ${new Date().toLocaleString()}
     </H1>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

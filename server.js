const express = require("express")

const app = express()
const puerto = 3005

app.use(express.text())

app.get("/saludo", (req, res) => {
  res.send("Hola a todos, damos la bienvenida a esta comunidad, donde podemos participar y dialogar entr todos.")
})

app.get("/campaña", (req, res) => {
  res.send("Campaña: comunicación clara, convivencia digital y participación ciudadana.")
})

app.get("/avisos", (req, res) => {
  res.send("Avisos comunitarios: verificar información, cuidar el lenguaje y evitar rumores.")
})

app.post("/propuestas", (req, res) => {
  const propuesta = req.body

  console.log("Propuesta recibida:")
  console.log(propuesta)

  res.send("Propuesta recibida por la plataforma comunitaria: " + propuesta)
})

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada. Revisa la dirección solicitada.")
})

app.listen(puerto, () => {
  console.log("Servidor Express funcionando en http://localhost:3005")
  console.log("Rutas disponibles:")
  console.log("GET  /saludo")
  console.log("GET  /campaña")
  console.log("GET  /complementos")
  console.log("POST /propuestas");
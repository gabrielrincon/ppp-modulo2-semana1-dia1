const express = require("express")

const app = express()
const puerto = process.env.PORT || 5000

app.use(express.text())

app.get("/", (req, res) => {
  res.send("Bienvenida comunidad. Este es un servidor Express para comunicación digital responsable.")
})

app.get("/campania", (req, res) => {
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

app.listen(puerto, "0.0.0.0", () => {
  console.log(`Servidor Express funcionando en http://0.0.0.0:${puerto}`)
  console.log("Rutas disponibles:")
  console.log("GET  /")
  console.log("GET  /campania")
  console.log("GET  /avisos")
  console.log("POST /propuestas")
})

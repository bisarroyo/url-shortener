import express from 'express'
const PORT = process.env.PORT ?? 3000

const app = express()

app.get('/', (req, res) => {
  res.json({ test: true })
})

app.listen(PORT, () => {
  console.log(`Server running on porttt ${PORT}`)
})

import express from 'express'

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Ola mundo' })
})

app.listen(3333, () => console.log('Running server on port 3333'))
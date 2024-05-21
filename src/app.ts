import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()
// const port = 3000

app.use(express.json())
app.use(express.text())
app.use(cors())

// app.use(express.Router)

app.get('/', (req: Request, res: Response) => {
  // const a = "something";

  res.send('Hello World!')
})

export default app

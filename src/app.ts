
import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
import { StudentControllers } from './app/modules/student/student.controller'
const app = express()
// const port = 3000

app.use(express.json())
app.use(express.text())
app.use(cors())
app.use(express.Router())

const getAController = (req: Request, res: Response) => {
  // const a = "something";
  res.send('Hello World!')
  console.log("running")
  
}

// application routes
app.use("/api/v1/students", StudentRoutes);

// app.get("/api/v1/students", StudentControllers.getStudent)

app.get('/', getAController)
// app.get('/api/v1/students', getAController)

export default app

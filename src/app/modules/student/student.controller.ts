import { StudentServices } from './studenet.service'
// import { Student } from './student.interface'
import { Request, Response } from 'express'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    const result = await StudentServices.createStudentInDB(student)

    res.status(200).json({ success: true, message: 'Successful', data: result })
  } catch (error) {
    console.error('Error creating student:', error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({ success: true, message: 'Successful', data: result })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({ success: true, message: 'Successful', data: result })
  } catch (error) {
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}

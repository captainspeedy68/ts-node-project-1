import { StudentServices } from './studenet.service'
import { Student } from './student.interface'
import { Request, Response } from 'express'

const createStudent = async (req: Request, res: Response) => {
    try {
      const student = req.body;
      const result = await StudentServices.createStudentInDB(student);
  
      res.status(200).json({ success: true, message: "Successful", data: result });
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };
  

const getStudent = async(req: Request, res: Response) => {
    console.log("Get Students");
    res.send("Hellow");
}


export const StudentControllers = {
    createStudent,
    getStudent
}
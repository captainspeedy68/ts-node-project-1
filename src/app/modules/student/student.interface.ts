// import { LocalGuardian } from './student.interface';
// import { Schema, model, connect } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNumber: string
  motherName: string
  motherOccupation: string
  motherContactNumber: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string
  contactNumber: string
  emergencyContactNo: string
  bloodGroup?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-'
  email: string
  avatar?: string
  presentAdress: string
  parmenantAdress: string
  guardian: Guardian
  LocalGuardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}

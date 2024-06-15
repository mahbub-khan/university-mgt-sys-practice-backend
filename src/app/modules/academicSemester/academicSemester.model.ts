import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  months,
  semesterCodes,
  semesterNames,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: { type: String, required: true, enum: semesterNames },
  code: { type: String, required: true, enum: semesterCodes },
  year: { type: Date, required: true },
  startMonth: { type: String, required: true, enum: months },
  endMonth: { type: String, required: true, enum: months },
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

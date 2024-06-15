import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
//import studentValidationSchema from './student.validation';

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();

  //send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Students retreived successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  //send response

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '1 Student retreived successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  //send response

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '1 Student deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};

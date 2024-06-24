import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Academic Faculty Name must be a string' })
      .max(100, {
        message: 'Academic Faculty Name can not be more than 100 characters',
      }),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Academic Faculty Name must be a string' })
      .max(100, {
        message: 'Academic Faculty Name can not be more than 100 characters',
      }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};

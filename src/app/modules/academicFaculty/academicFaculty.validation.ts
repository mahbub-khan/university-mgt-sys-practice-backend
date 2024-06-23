import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z
    .string({ invalid_type_error: 'Academic Faculty Name must be a string' })
    .max(20, {
      message: 'Academic Faculty Name can not be more than 20 characters',
    }),
});

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
};

import { z } from 'zod';

// Helper function to capitalize words
const capitalize = (value: string) => {
  const capitalizedValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return value === capitalizedValue ? value : undefined;
};

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, "First Name can't be more than 20 characters")
    .refine((value) => capitalize(value) !== undefined, {
      message: 'First Name is not capitalized',
    }),
  middleName: z
    .string()
    .trim()
    .max(10, "Middle Name can't be more than 10 characters")
    .optional()
    .refine((value) => value === undefined || capitalize(value) !== undefined, {
      message: 'Middle Name is not capitalized',
    }),
  lastName: z
    .string()
    .trim()
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last Name should only contain letters',
    }),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z.string().trim().optional(),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().trim().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z.string().trim().optional(),
  motherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Mother Contact No is required' }),
});

// Local Guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, { message: 'Local Guardin Name is required' }),
  occupation: z.string().trim().optional(),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardin Contact No is required' }),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardin Address is required' }),
});

// Student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .trim()
      .min(6, { message: 'Password ID is required' })
      .max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      email: z
        .string()
        .trim()
        .min(1, 'Zod - Email is required')
        .email('Coming from Zod library - {VALUE} is not a valid email'),
      contactNo: z
        .string()
        .trim()
        .min(1, { message: 'Contact No is required' }),
      emergencyContactNo: z.string().trim().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .trim()
        .min(1, { message: 'Present Address is required' }),
      permanentAddress: z
        .string()
        .trim()
        .min(1, { message: 'Permanent Address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
    }),
  }),
});

export const StudentValidations = {
  studentValidationSchema: createStudentValidationSchema,
};

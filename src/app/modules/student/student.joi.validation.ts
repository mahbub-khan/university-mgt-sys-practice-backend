import Joi from 'joi';

// Helper function to capitalize words
const capitalize = (value: string, helpers: any) => {
  const capitalizedValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  if (value !== capitalizedValue) {
    return helpers.error('string.capitalized');
  }
  return value;
};

// UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .custom(capitalize, 'capitalize first letter validation')
    .messages({
      'any.required': 'First Name is required',
      'string.max': "First Name can't be more than 20 characters",
      'string.capitalized': '{#label} is not capitalized',
    }),
  middleName: Joi.string()
    .trim()
    .max(10)
    .custom(capitalize, 'capitalize first letter validation')
    .allow(null, '')
    .messages({
      'string.max': "Middle Name can't be more than 10 characters",
      'string.capitalized': '{#label} is not capitalized',
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'any.required': 'Last Name is required',
      'string.pattern.base': 'Last Name should only contain letters',
    }),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().trim().allow(null, ''),
  fatherContactNo: Joi.string().trim().required().messages({
    'any.required': 'Father Contact No is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().trim().allow(null, ''),
  motherContactNo: Joi.string().trim().required().messages({
    'any.required': 'Mother Contact No is required',
  }),
});

// Local Guardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().trim().allow(null, ''),
  contactNo: Joi.string().trim().required().messages({
    'any.required': 'Local Guardian Contact No is required',
  }),
  address: Joi.string().trim().required().messages({
    'any.required': 'Local Guardian Address is required',
  }),
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'any.required': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string()
    .trim()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.required': 'Gender is required',
      'any.only': '{#label} is not valid',
    }),
  dateOfBirth: Joi.string().trim().allow(null, ''),
  email: Joi.string().trim().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Coming from Joi - {#label} is not a valid email',
  }),
  contactNo: Joi.string().trim().required().messages({
    'any.required': 'Contact No is required',
  }),
  emergencyContactNo: Joi.string().trim().allow(null, ''),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .allow(null, '')
    .messages({
      'any.only': '{#label} is not valid',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().trim().allow(null, ''),
  isActive: Joi.string()
    .trim()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{#label} is not valid',
    }),
});

export default studentValidationSchema;

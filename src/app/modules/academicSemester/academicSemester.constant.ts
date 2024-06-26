import {
  TAcdemicSemesterNameCodeMapper,
  TMonths,
  TSemesterCodes,
  TSemesterNames,
} from './academicSemester.interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const semesterNames: TSemesterNames[] = ['Autumn', 'Summer', 'Fall'];

export const semesterCodes: TSemesterCodes[] = ['01', '02', '03'];

export const academicSemesterNameCodeMapper: TAcdemicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

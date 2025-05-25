import * as TeacherNS from './subjects/Teacher';
import * as CppNS from './subjects/Cpp';
import * as JavaNS from './subjects/Java';
import * as ReactNS from './subjects/React';

export const cpp = new CppNS.Subjects.Cpp();
export const java = new JavaNS.Subjects.Java();
export const react = new ReactNS.Subjects.React();

export const cTeacher: TeacherNS.Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

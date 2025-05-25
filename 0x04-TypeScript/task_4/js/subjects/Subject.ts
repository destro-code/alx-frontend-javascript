import { Subjects } from './Teacher';

export namespace Subjects {
  export class Subject {
    private _teacher?: Subjects.Teacher;

    setTeacher(teacher: Subjects.Teacher) {
      this._teacher = teacher;
    }

    get teacher() {
      return this._teacher;
    }
  }
}

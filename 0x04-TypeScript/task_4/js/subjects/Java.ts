import { Subjects } from './Teacher';
import { Subjects as SubjectNS } from './Subject';

export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectNS.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

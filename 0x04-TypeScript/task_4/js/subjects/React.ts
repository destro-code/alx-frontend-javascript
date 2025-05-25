import { Subjects } from './Teacher';
import { Subjects as SubjectNS } from './Subject';

export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectNS.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

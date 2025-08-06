// task_2/js/main.ts

// Task 5: Employee interfaces
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Task 5: Classes implementing interfaces
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Task 5: createEmployee function
export function createEmployee(salary: number | string): Director | Teacher {
  // @ts-ignore: allow comparison between string and number
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Task 6: Type guard and executor
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Task 7: String literal type and function
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Example usages (for testing)
console.log(createEmployee(200));       // Teacher
console.log(createEmployee(1000));      // Director
console.log(createEmployee('$500'));    // Director

console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

console.log(teachClass('Math'));       // Teaching Math
console.log(teachClass('History'));    // Teaching History

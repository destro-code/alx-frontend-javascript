// Declare unique symbols for branding
declare const majorBrand: unique symbol;
declare const minorBrand: unique symbol;

interface MajorCredits {
  credits: number;
  readonly [majorBrand]: unique symbol;  // brand property
}

interface MinorCredits {
  credits: number;
  readonly [minorBrand]: unique symbol;  // brand property
}

// Factory functions to create branded types
function createMajorCredits(credits: number): MajorCredits {
  return { credits } as MajorCredits;
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits } as MinorCredits;
}

// Sum functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// Example usage (optional)
const major1 = createMajorCredits(10);
const major2 = createMajorCredits(20);
const totalMajor = sumMajorCredits(major1, major2);

const minor1 = createMinorCredits(5);
const minor2 = createMinorCredits(15);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajor.credits);
console.log('Total Minor Credits:', totalMinor.credits);

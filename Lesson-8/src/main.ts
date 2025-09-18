// <== UTILITY TYPES ==>
// PARTIAL
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};
const assignment1: Assignment = {
  studentId: "compsci123",
  title: "Final Year Project",
  grade: 0,
};
console.log(updateAssignment(assignment1, { grade: 95 }));
const assignedGraded: Assignment = updateAssignment(assignment1, { grade: 95 });
// REQUIRED
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};
const assignVerified: Readonly<Assignment> = {
  ...assignedGraded,
  verified: true,
};
recordAssignment({ ...assignedGraded, verified: true });
// RECORD
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};
type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Kelly: "B",
};
interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 78, assign2: 86 },
};
// PICK
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignmentResult = {
  studentId: "compsci123",
  grade: 98,
};
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "compsci123",
  title: "Final Exam",
};
// EXCLUDE & EXTRACT
type AdjustedGrades = Exclude<LetterGrades, "U">;
type HighGrades = Extract<LetterGrades, "A" | "B">;
// NON-NULLABLE
type AllPossibleGrades = "A" | "B" | "C" | "D" | "U" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
// RETURN TYPE
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
// PARAMETERS
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
// AWAITED
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUserData = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUserData>>;
fetchUserData().then((users) => console.log(users));

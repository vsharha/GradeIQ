import CreateAssignment from "@/components/assignments/CreateAssignment";
import Assignment from "@/components/assignments/Assignment";

const assignments = [
    {
        id: 1,
        title: "History of Ancient Rome",
        createdOn: "2025-10-04T09:00:00Z",
        dueDate: "2025-10-18T23:59:59Z",
        description: "An in-depth analysis of the socio-political structure of the Roman Republic and its transition into the Roman Empire. Students are expected to cite primary sources.",
        submitted: 70,
        marked: 30,
    },
    {
        id: 3,
        title: "Literature: Shakespearean Tragedies",
        createdOn: "2025-10-15T09:00:00Z",
        dueDate: "2025-10-29T23:59:59Z",
        description: "Compare and contrast the themes in Hamlet and Macbeth. Provide textual evidence.",
        submitted: 60,
        marked: 50,
    },
    {
        id: 2,
        title: "Physics: Laws of Motion",
        createdOn: "2025-10-10T09:00:00Z",
        dueDate: "2025-10-24T23:59:59Z",
        description: "Explain Newton's three laws of motion with real-world examples. Include diagrams and calculations.",
        submitted: 55,
        marked: 40,
    },
    {
        id: 4,
        title: "Biology: Cell Structure",
        createdOn: "2025-10-20T09:00:00Z",
        dueDate: "2025-11-03T23:59:59Z",
        description: "Describe the functions of cell organelles. Include labeled diagrams.",
        submitted: 80,
        marked: 75,
    },
    {
        id: 5,
        title: "Mathematics: Calculus Introduction",
        createdOn: "2025-10-25T09:00:00Z",
        dueDate: "2025-11-08T23:59:59Z",
        description: "Solve basic differentiation and integration problems. Show all steps.",
        submitted: 65,
        marked: 60,
    }
];

export {assignments}
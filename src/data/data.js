const assignments = [
    {
        id: 1,
        title: "History of Ancient Rome",
        createdOn: "2025-10-04T09:00:00Z",
        dueDate: "2025-09-10T23:59:59Z",
        description: "An in-depth analysis of the socio-political structure of the Roman Republic and its transition into the Roman Empire. Students are expected to cite primary sources.",
        maxGrade: 100.0,
        passingGrade: 80.0,
    },
    {
        id: 2,
        title: "Physics: Laws of Motion",
        createdOn: "2025-10-10T09:00:00Z",
        dueDate: "2025-10-24T23:59:59Z",
        description: "Explain Newton's three laws of motion with real-world examples. Include diagrams and calculations.",
        maxGrade: 80.0,
        passingGrade: 77.0,
    },
    {
        id: 3,
        title: "Literature: Shakespearean Tragedies",
        createdOn: "2025-10-15T09:00:00Z",
        dueDate: "2025-10-29T23:59:59Z",
        description: "Compare and contrast the themes in Hamlet and Macbeth. Provide textual evidence.",
        maxGrade: 100.0,
        passingGrade: 85.0,
    },
    {
        id: 4,
        title: "Biology: Cell Structure",
        createdOn: "2025-10-20T09:00:00Z",
        dueDate: "2025-11-03T23:59:59Z",
        description: "Describe the functions of cell organelles. Include labeled diagrams.",
        maxGrade: 100.0,
        passingGrade: 89.5,
    },
    {
        id: 5,
        title: "Mathematics: Calculus Introduction",
        createdOn: "2025-10-25T09:00:00Z",
        dueDate: "2025-11-08T23:59:59Z",
        description: "Solve basic differentiation and integration problems. Show all steps.",
        maxGrade: 100.0,
        passingGrade: 90.0,
    }
];

const studentSubmissions = [
    {
        assignmentID: 1,
        submissions: [
            { id: 1, studentName: "John Doe", submittedOn: "2025-10-06T09:00:00Z", grade: 72.0, gradeConfirmed: true },
            { id: 2, studentName: "Jane Smith", submittedOn: "2025-10-07T10:15:00Z", grade: 88.0, gradeConfirmed: true },
            { id: 3, studentName: "Alice Johnson", submittedOn: "2025-10-08T14:30:00Z", grade: 94.0, gradeConfirmed: false },
            { id: 4, studentName: "Bob Lee", submittedOn: "2025-10-09T16:45:00Z", grade: 65.0, gradeConfirmed: false }
        ]
    },
    {
        assignmentID: 2,
        submissions: [
            { id: 1, studentName: "Chris Evans", submittedOn: "2025-10-12T09:30:00Z", grade: 77.0, gradeConfirmed: true },
            { id: 2, studentName: "Emily Clark", submittedOn: "2025-10-13T11:00:00Z", grade: 80.0, gradeConfirmed: false },
            { id: 3, studentName: "Michael Brown", submittedOn: "2025-10-14T13:20:00Z", grade: 68.0, gradeConfirmed: false }
        ]
    },
    {
        assignmentID: 3,
        submissions: [
            { id: 1, studentName: "Sarah Miller", submittedOn: "2025-10-17T10:00:00Z", grade: 91.0, gradeConfirmed: true },
            { id: 2, studentName: "David Wilson", submittedOn: "2025-10-18T12:30:00Z", grade: 85.0, gradeConfirmed: false },
            { id: 3, studentName: "Olivia Davis", submittedOn: "2025-10-19T15:45:00Z", grade: 78.0, gradeConfirmed: false }
        ]
    },
    {
        assignmentID: 4,
        submissions: [
            { id: 1, studentName: "James Taylor", submittedOn: "2025-10-22T09:15:00Z", grade: 99.0, gradeConfirmed: true },
            { id: 2, studentName: "Sophia Martinez", submittedOn: "2025-10-23T11:40:00Z", grade: 87.0, gradeConfirmed: true },
            { id: 3, studentName: "Benjamin Harris", submittedOn: "2025-10-24T14:10:00Z", grade: 92.0, gradeConfirmed: false },
            { id: 4, studentName: "Mia Robinson", submittedOn: "2025-10-25T16:25:00Z", grade: 75.0, gradeConfirmed: false }
        ]
    },
    {
        assignmentID: 5,
        submissions: [
            { id: 1, studentName: "William Walker", submittedOn: "2025-10-27T10:30:00Z", grade: 83.0, gradeConfirmed: true },
            { id: 2, studentName: "Charlotte Young", submittedOn: "2025-10-28T12:50:00Z", grade: 90.0, gradeConfirmed: true },
            { id: 3, studentName: "Henry King", submittedOn: "2025-10-29T15:05:00Z", grade: 97.0, gradeConfirmed: false }
        ]
    }
];

export function getSubmissionCount(assignmentID) {
    const submissions = studentSubmissions.find((submission)=>submission.assignmentID===assignmentID).submissions;
    return {
        count: submissions.length,
        confirmedCount: submissions.reduce((total, submission) => total + (submission.gradeConfirmed ? 1 : 0), 0),
    }
}

export {assignments, studentSubmissions}
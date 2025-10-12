const assignments = [
    {
        id: 1,
        title: "History of Ancient Rome",
        created_at: "2025-10-04T09:00:00Z",
        due: "2025-09-10T23:59:59Z",
        description: "An in-depth analysis of the socio-political structure of the Roman Republic and its transition into the Roman Empire. Students are expected to cite primary sources.",
        max_grade: 100.0,
        passing_grade: 80.0,
    },
    {
        id: 2,
        title: "Physics: Laws of Motion",
        created_at: "2025-10-10T09:00:00Z",
        due: "2025-10-24T23:59:59Z",
        description: "Explain Newton's three laws of motion with real-world examples. Include diagrams and calculations.",
        max_grade: 80.0,
        passing_grade: 77.0,
    },
    {
        id: 3,
        title: "Literature: Shakespearean Tragedies",
        created_at: "2025-10-15T09:00:00Z",
        due: "2025-10-29T23:59:59Z",
        description: "Compare and contrast the themes in Hamlet and Macbeth. Provide textual evidence.",
        max_grade: 100.0,
        passing_grade: 85.0,
    },
    {
        id: 4,
        title: "Biology: Cell Structure",
        created_at: "2025-10-20T09:00:00Z",
        due: "2025-11-03T23:59:59Z",
        description: "Describe the functions of cell organelles. Include labeled diagrams.",
        max_grade: 100.0,
        passing_grade: 89.5,
    },
    {
        id: 5,
        title: "Mathematics: Calculus Introduction",
        created_at: "2025-10-25T09:00:00Z",
        due: "2025-11-08T23:59:59Z",
        description: "Solve basic differentiation and integration problems. Show all steps.",
        max_grade: 100.0,
        passing_grade: 90.0,
    }
];

const studentSubmissions = [
    {
        assignment_id: 1,
        submissions: [
            { id: 1, name: "John Doe", created_at: "2025-10-06T09:00:00Z", grade: 72.0, grade_confirmed: true },
            { id: 2, name: "Jane Smith", created_at: "2025-10-07T10:15:00Z", grade: 88.0, grade_confirmed: true },
            { id: 3, name: "Alice Johnson", created_at: "2025-10-08T14:30:00Z", grade: 94.0, grade_confirmed: false },
            { id: 4, name: "Bob Lee", created_at: "2025-10-09T16:45:00Z", grade: 65.0, grade_confirmed: false }
        ]
    },
    {
        assignment_id: 2,
        submissions: [
            { id: 1, name: "Chris Evans", created_at: "2025-10-12T09:30:00Z", grade: 77.0, grade_confirmed: true },
            { id: 2, name: "Emily Clark", created_at: "2025-10-13T11:00:00Z", grade: 80.0, grade_confirmed: false },
            { id: 3, name: "Michael Brown", created_at: "2025-10-14T13:20:00Z", grade: 68.0, grade_confirmed: false }
        ]
    },
    {
        assignment_id: 3,
        submissions: [
            { id: 1, name: "Sarah Miller", created_at: "2025-10-17T10:00:00Z", grade: 91.0, grade_confirmed: true },
            { id: 2, name: "David Wilson", created_at: "2025-10-18T12:30:00Z", grade: 85.0, grade_confirmed: false },
            { id: 3, name: "Olivia Davis", created_at: "2025-10-19T15:45:00Z", grade: 78.0, grade_confirmed: false }
        ]
    },
    {
        assignment_id: 4,
        submissions: [
            { id: 1, name: "James Taylor", created_at: "2025-10-22T09:15:00Z", grade: 99.0, grade_confirmed: true },
            { id: 2, name: "Sophia Martinez", created_at: "2025-10-23T11:40:00Z", grade: 87.0, grade_confirmed: true },
            { id: 3, name: "Benjamin Harris", created_at: "2025-10-24T14:10:00Z", grade: 92.0, grade_confirmed: false },
            { id: 4, name: "Mia Robinson", created_at: "2025-10-25T16:25:00Z", grade: 75.0, grade_confirmed: false }
        ]
    },
    {
        assignment_id: 5,
        submissions: [
            { id: 1, name: "William Walker", created_at: "2025-10-27T10:30:00Z", grade: 83.0, grade_confirmed: true },
            { id: 2, name: "Charlotte Young", created_at: "2025-10-28T12:50:00Z", grade: 90.0, grade_confirmed: true },
            { id: 3, name: "Henry King", created_at: "2025-10-29T15:05:00Z", grade: 97.0, grade_confirmed: false }
        ]
    }
];

export {assignments, studentSubmissions}


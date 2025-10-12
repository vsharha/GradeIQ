const BASE_URL = "https://gradeiq.onrender.com"

async function fetchAssignments() {
    const response = await fetch(`${BASE_URL}/assignments`)

    return await response.json()
}
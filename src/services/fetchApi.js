const BASE_URL = "https://gradeiq.onrender.com"
// const BASE_URL = "https://localhost:8000"

export async function fetchAssignments() {
    const response = await fetch(`${BASE_URL}/assignments?user_id=${1}`)
    if(!response.ok) throw new Error("Could not fetch assignments")
    return await response.json()
}

export async function fetchSubmissions(assignment_id) {
    const response = await fetch(`${BASE_URL}/submissions?assignment_id=${assignment_id}`)
    if(!response.ok) throw new Error("Could not fetch submissions")
    return await response.json()
}
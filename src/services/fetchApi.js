export async function fetchAssignments(headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments`, { headers });
    if(!response.ok) throw new Error("Could not fetch assignments")
    return await response.json()
}

export async function fetchSubmissions(assignment_id, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/submissions?assignment_id=${assignment_id}`, { headers });
    if(!response.ok) throw new Error("Could not fetch submissions")
    return await response.json()
}

export async function fetchUser(headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/users/me`, { headers });
    if(!response.ok) throw new Error("Could not fetch user")
    console.log(response.json())
    return await response.json()
}
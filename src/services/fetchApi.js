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
    return await response.json()
}

export async function createAssignment(assignment, headers, setError) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(assignment)
    });

    const data = await response.json()

    if(!response.ok) {
        if(data.errors) {
            console.log(data.errors)

            for(const err of data.errors) {
                setError(err.field, {message: err.message})
            }
        }

        throw new Error("Could not fetch assignment")
    }

    return data;
}

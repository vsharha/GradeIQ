function handleApiError(response, data, defaultMessage) {
    if (data && data.errors && Array.isArray(data.errors)) {
        const errorMsg = data.errors.map(err => err.message).join(", ");
        throw new Error(errorMsg);
    } else if (data && data.message) {
        throw new Error(data.message);
    } else {
        throw new Error(defaultMessage);
    }
}

export async function fetchAssignments(headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments`, { headers });
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not fetch assignments");
    return data;
}

export async function fetchSubmissions(assignment_id, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/submissions`, { headers });
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not fetch submissions");
    return data;
}

export async function fetchUser(headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/users/me`, { headers });
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not fetch user");
    return data;
}

export async function createAssignment(assignment, headers, setError) {
    console.log(assignment)
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
            for(const err of data.errors) {
                setError(err.field, {message: err.message})
            }
        }

        throw new Error("Could not create assignment")
    }

    return data;
}

export async function uploadSubmissions(assignment_id, encoded_files, headers) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/submissions/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(encoded_files)
  });

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error("Could not parse error response");
  }
  if(!response.ok) handleApiError(response, data, "Could not fetch user");

  return data;
}

export async function deleteAssignment(assignment_id, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
    })
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not delete assignment");
    return data;
}

export async function generateRubrics(mark_scheme, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/rubrics/generate`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(mark_scheme)
    })
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not upload mark scheme");
    return data;
}

export async function getSubmissionFileURL(submission_id, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/submissions/${submission_id}/file`, { headers });
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not fetch submission file");
    return data;
}

export async function gradeSubmissions(assignment_id, submission_ids, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/grade`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify({submission_ids})
    })
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not grade submissions");
    return data;
}
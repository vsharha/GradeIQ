import { toast } from "sonner";

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

        toast.error("Could not create assignment")
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

export async function generateRubrics(payload, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/rubrics/generate`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(payload)
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/submissions/grade`, {
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

export async function deleteSubmissions(assignment_id, submission_ids, headers) {
    console.log(submission_ids)
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/submissions`, {
        method: 'DELETE',
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
    if(!response.ok) handleApiError(response, data, "Could not delete submissions");
    return data;
}

export async function confirmSubmissionGrades(assignment_id, submission_ids, headers) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}/submissions/confirm-grades`, {
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
    if(!response.ok) handleApiError(response, data, "Could not confirm submissions");
    return data;
}

export async function updateAssignment(assignment_id, payload, headers, setError) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments/${assignment_id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(payload)
    })
    const data = await response.json()

    if(!response.ok) {
        if(data.errors) {
            for(const err of data.errors) {
                setError(err.field, {message: err.message})
            }
        }

        toast.error("Could not edit assignment")
        throw new Error("Could not edit assignment")
    }

    return data;
}

export async function updateSubmission(submission_id, payload, headers, setError) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/submissions/${submission_id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(payload)
    })
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not edit submission");
    return data;
}

export async function fetchModels() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/models`)
    let data;
    try {
        data = await response.json();
    } catch (e) {
        throw new Error("Could not parse error response");
    }
    if(!response.ok) handleApiError(response, data, "Could not edit submission");
    return data;
}
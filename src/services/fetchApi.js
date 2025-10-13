import { createClient } from "@/utils/supabase/client";

async function getAuthHeaders() {
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        throw new Error("Not authenticated");
    }

    return {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json'
    };
}

export async function fetchAssignments() {
    const headers = await getAuthHeaders();
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/assignments`, { headers });
    if(!response.ok) throw new Error("Could not fetch assignments")
    return await response.json()
}

export async function fetchSubmissions(assignment_id) {
    const headers = await getAuthHeaders();
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/submissions?assignment_id=${assignment_id}`, { headers });
    if(!response.ok) throw new Error("Could not fetch submissions")
    return await response.json()
}
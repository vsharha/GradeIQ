import { createClient } from "@/utils/supabase/server";

export default async function getServerAuthHeaders() {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        throw new Error("Not authenticated");
    }

    return {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json'
    };

}
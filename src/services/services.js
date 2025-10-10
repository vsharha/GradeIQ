export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return `${formattedDate} (${formattedTime})`;
}
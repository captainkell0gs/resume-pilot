function formatDate(date) {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d)) return "";
    return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
    });
}


export function formatRange(start, end) {
    const s = formatDate(start);
    const e = formatDate(end);

    if (!s && !e) return "";
    if (!s) return e;
    if (!e) return `${s} - Present`;
    return `${s} - ${e}`;
}
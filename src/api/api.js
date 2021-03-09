import fetch from "node-fetch";

export const apiCall = (link) =>
fetch(link).then(res => res.json())
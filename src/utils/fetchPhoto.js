// This is not a general-purpose abstraction over fetch, it's written for a very specific endpoint.
import * as origins from "../variables/origins"

export default function fetchPhoto(body) {
    const endpoint = "/photo"
    return fetch(origins.backend + endpoint, {
        method: "POST",
        body,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`
        }
    }).then(res => res.json())
}
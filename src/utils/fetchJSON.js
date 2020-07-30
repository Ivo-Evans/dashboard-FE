export default async function fetchJSON({url, method="GET", data=false, token=false}) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (data) {options.body = JSON.stringify(data)}
    if (token) {
        const token = localStorage.getItem("JWT")
        options.headers.authorization = token
    }
    const query = await fetch(url, options)
    console.log(query)
    return query.json()
}
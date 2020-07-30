export default async function fetchJSON({url, endpoint, method="GET", data=false, token=false}) {
    const options = {
        method,
        headers: {
            "content-type": "application/json"
        }        
    }
    if (data) {options.body = JSON.stringify(data)}
    if (token) {
        const token = localStorage.getItem("JWT")
        options.tokenheaders.authorization = token
    }
    const query = await fetch(url + endpoint, options)
    console.log(query)
    return query.json()
}
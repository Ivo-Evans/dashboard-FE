export const currentJWT = () => {
    const JWT = localStorage.getItem("JWT")
    let payloadObject
    try {
        const payloadString = JWT.split(".")[1]
        payloadObject = JSON.parse(window.atob(payloadString))
        localStorage.setItem("username", payloadObject.username)
    } catch {
        payloadObject = {exp: 0}
    }
    const date = new Date()
    const now = Math.round(date.getTime() / 1000)
    return Number(payloadObject.exp) > now;
}

import React from "react"

function useUsername(setUsername, loggedIn) {
    React.useEffect(() => {
        const username = localStorage.getItem("username")
        setUsername(username || "")
    }, [setUsername, loggedIn])
}

export default useUsername
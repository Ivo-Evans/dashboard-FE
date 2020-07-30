import React from "react"

function useUsername(setUsername) {
    React.useEffect(() => {
        const username = localStorage.getItem("username")
        setUsername(username || "")
    }, [setUsername])
}

export default useUsername
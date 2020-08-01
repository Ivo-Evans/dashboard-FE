import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useTodos(setTodos, loggedIn) {
    React.useEffect(() => {
        if (!loggedIn) { return }
        const endpoint = "/todos"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setTodos)
    }, [setTodos, loggedIn])
}

export default useTodos
import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useTodos(setTodos) {
    React.useEffect(() => {
        const endpoint = "/todos"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setTodos)
    }, [setTodos])
}

export default useTodos
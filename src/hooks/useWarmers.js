import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useWarmers(setWarmers, loggedIn) {
    React.useEffect(() => {
        if (!loggedIn) { return }
        const endpoint = "/warmers"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setWarmers)
    }, [setWarmers, loggedIn])
}

export default useWarmers
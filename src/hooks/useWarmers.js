import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useWarmers(setWarmers) {
    React.useEffect(() => {
        const endpoint = "/warmers"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setWarmers)
    }, [setWarmers])
}

export default useWarmers
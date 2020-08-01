import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function usePhotos(setPhotos, loggedIn) {
    React.useEffect(() => {
        if (!loggedIn) { return }
        const endpoint = "/photo"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setPhotos)
    }, [setPhotos, loggedIn])
}

export default usePhotos
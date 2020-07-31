import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function usePhotos(setPhotos) {
    React.useEffect(() => {
        const endpoint = "/photo"
        fetchJSON({
            url: origins.backend + endpoint,
            token: true
        }).then(setPhotos)
    }, [setPhotos])
}

export default usePhotos
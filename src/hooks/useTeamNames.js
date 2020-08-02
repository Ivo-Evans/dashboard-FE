import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useTeamNames(setTeamNames, setCurrentTeam, loggedIn) {
    React.useEffect(() => {
        if (!loggedIn) { return }
        const endpoint = "/teams"
        fetchJSON({
            url: origins.backend + endpoint,
        }).then(res => {
            setTeamNames(res)
            setCurrentTeam(res[0])
        })
    }, [setTeamNames, setCurrentTeam, loggedIn])
}

export default useTeamNames
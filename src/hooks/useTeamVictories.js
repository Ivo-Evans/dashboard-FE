import React from "react"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"

function useTeamVictories(setTeamVictories, currentTeam, loggedIn) {
    React.useEffect(() => {
        if (!(loggedIn && currentTeam)) { return }
        const endpoint = `/teams/${currentTeam}`
        fetchJSON({
            url: origins.backend + endpoint,
        }).then(setTeamVictories)
    }, [setTeamVictories, currentTeam, loggedIn])
}

export default useTeamVictories
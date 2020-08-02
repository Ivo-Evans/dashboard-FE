import React from 'react'
import styled from "styled-components"
import * as sc from "../components/forms/styled-components"


const Text = styled.div`
color: #fff;
text-align: left;
font-size: 1.25em;
`

export const Sport = ({teamNames, currentTeam, setCurrentTeam, teamVictories}) => {
        return (
        <sc.Page>
            <h1>{currentTeam} victories</h1>
            <select onChange={e => setCurrentTeam(e.target.value)}>
                {teamNames.map(team => {
                    return (
                        <option value={team}>{team}</option>
                    )
                })}
            </select>
            <Text>
            {teamVictories.map(game => {
                if (game.away_team === currentTeam) {
                    return <p>{currentTeam} won against {game.home_team} in an away game.</p>
                }
                return <p>{currentTeam} won against {game.away_team} at home.</p>
            })}
            </Text>
        </sc.Page>
    )
}

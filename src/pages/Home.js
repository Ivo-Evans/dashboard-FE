import React from 'react'
import DashboardGrid from "../components/dashboard/DashboardGrid"
import DashboardCard from "../components/dashboard/DashboardCard"
// import useClothes from "../hooks/useClothes"
import useUsername from "../hooks/useUsername"

export const Home = () => {
    const [username, setUsername] = React.useState("")
    useUsername(setUsername)

    // const [clothes, setClothes] = React.useState(null)
    // useClothes(setClothes)

    return (
        <div>
            <h1>Good day {username}</h1>
            <DashboardGrid>
                <DashboardCard title="Weather"/>
                <DashboardCard title="News"/>
                <DashboardCard title="Sport"/>
                <DashboardCard title="Photos"/>
                <DashboardCard title="Tasks"/>
                <DashboardCard title="Clothes"/>
            </DashboardGrid>
        </div>
    )
}

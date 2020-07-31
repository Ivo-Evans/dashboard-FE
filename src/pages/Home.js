import React from 'react'
import DashboardGrid from "../components/dashboard/DashboardGrid"
import DashboardCard from "../components/dashboard/DashboardCard"
import WeatherCard from "../components/dashboard/WeatherCard"
import PhotoCard from "../components/dashboard/PhotoCard/PhotoCard"

// import useClothes from "../hooks/useClothes"
import useUsername from "../hooks/useUsername"


export const Home = ({weather, photos}) => {
    const [username, setUsername] = React.useState("")
    useUsername(setUsername)



    return (
        <div>
            <h1>Good day {username}</h1>
            <DashboardGrid>
                <WeatherCard title="Weather" weather={weather}/>
                <DashboardCard title="News"/>
                <DashboardCard title="Sport"/>
                <PhotoCard title="Photos" photos={photos}/>
                <DashboardCard title="Tasks"/>
                <DashboardCard title="Clothes"/>
            </DashboardGrid>
        </div>
    )
}

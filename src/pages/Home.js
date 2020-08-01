import React from 'react'
import DashboardGrid from "../components/dashboard/DashboardGrid"
import DashboardCard from "../components/dashboard/DashboardCard"
import WeatherCard from "../components/dashboard/WeatherCard/WeatherCard"
import NewsCard from "../components/dashboard/NewsCard/NewsCard"
import PhotoCard from "../components/dashboard/PhotoCard/PhotoCard"
import TodoCard from "../components/dashboard/TodoCard/TodoCard"
import WarmersCard from "../components/dashboard/WarmersCard/WarmersCard"

import useUsername from "../hooks/useUsername"


export const Home = ({weather, photos, todos, warmers, news}) => {
    const [username, setUsername] = React.useState("")
    useUsername(setUsername)

    return (
        <div>
            <h1>Good day {username}</h1>
            <DashboardGrid>
                <WeatherCard title="Weather" weather={weather}/>
                <NewsCard title="News" news={news}/>
                <DashboardCard title="Sport"/>
                <PhotoCard title="Photos" photos={photos}/>
                <TodoCard title="Tasks" todos={todos}/>
                <WarmersCard title="Clothes" warmers={warmers}/>
            </DashboardGrid>
        </div>
    )
}

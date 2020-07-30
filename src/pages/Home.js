import React from 'react'
import DashboardGrid from "../components/dashboard/DashboardGrid"
import DashboardCard from "../components/dashboard/DashboardCard"

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
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
